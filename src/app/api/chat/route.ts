import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { RESUME_DATA } from "@/lib/resume-data";

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

        if (!apiKey) {
            return new Response(
                "My AI brain needs a power source! Please add a GOOGLE_GENERATIVE_AI_API_KEY.",
                { status: 200, headers: { "Content-Type": "text/plain" } }
            );
        }

        const body = await req.json();
        const messages = body.messages || [];

        // Convert our simple message format to the format expected by AI SDK
        const formattedMessages = messages.map((msg: any) => ({
            role: msg.role,
            content: msg.content,
        }));

        const result = streamText({
            model: google("gemini-2.0-flash-lite"),
            messages: formattedMessages,
            system: `You are an AI assistant representing Vishnu Adithya. Answer questions about him based on the following resume information. Be concise, friendly, and professional.

${RESUME_DATA}

If someone asks something not in the resume, politely say you don't have that information and suggest checking his resume or contacting him directly.`,
        });

        return result.toTextStreamResponse();
    } catch (error) {
        console.error("Chat API Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
