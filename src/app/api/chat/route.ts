import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { RESUME_DATA } from "@/lib/resume-data";

export const maxDuration = 30;

type ChatMessage = {
    role: "user" | "assistant";
    content: string;
};

function isChatMessage(message: unknown): message is ChatMessage {
    if (!message || typeof message !== "object") return false;

    const candidate = message as Record<string, unknown>;
    return (
        (candidate.role === "user" || candidate.role === "assistant") &&
        typeof candidate.content === "string"
    );
}

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

        if (!apiKey) {
            return new Response(
                "My AI brain needs a power source! Please add a GOOGLE_GENERATIVE_AI_API_KEY.",
                {
                    status: 503,
                    headers: { "Content-Type": "text/plain; charset=utf-8" },
                }
            );
        }

        const body: unknown = await req.json();
        if (
            !body ||
            typeof body !== "object" ||
            !("messages" in body) ||
            !Array.isArray(body.messages)
        ) {
            return new Response("Invalid request body", { status: 400 });
        }

        const messages = body.messages.filter(isChatMessage).slice(-20);
        if (messages.length === 0) {
            return new Response("At least one valid message is required", { status: 400 });
        }

        const formattedMessages = messages.map((message) => ({
            role: message.role,
            content: message.content.slice(0, 4000),
        }));

        const result = await generateText({
            model: google("gemini-2.0-flash-lite"),
            messages: formattedMessages,
            system: `You are an AI assistant representing Vishnu Adithya. Answer questions about him based on the following resume information. Be concise, friendly, and professional.

${RESUME_DATA}

If someone asks something not in the resume, politely say you don't have that information and suggest checking his resume or contacting him directly.`,
        });

        return new Response(result.text, {
            headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
    } catch (error) {
        console.error("Chat API Error:", error);
        return new Response("The portfolio assistant is temporarily unavailable. Please try again later.", {
            status: 502,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
    }
}
