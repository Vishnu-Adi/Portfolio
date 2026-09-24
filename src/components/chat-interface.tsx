"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Bot, User, AlertCircle } from "lucide-react";

type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
};

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        const userMessageObj: Message = {
            id: Date.now().toString(),
            role: "user",
            content: userMessage,
        };

        setMessages((prev) => [...prev, userMessageObj]);
        setInput("");
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [...messages, userMessageObj],
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to get response");
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let assistantMessage = "";

            const assistantMessageObj: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "",
            };

            setMessages((prev) => [...prev, assistantMessageObj]);

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value);
                    assistantMessage += chunk;

                    setMessages((prev) => {
                        const updated = [...prev];
                        updated[updated.length - 1] = {
                            ...assistantMessageObj,
                            content: assistantMessage,
                        };
                        return updated;
                    });
                }
            }
        } catch (err) {
            console.error("Chat error:", err);
            setError("Failed to get response");
        } finally {
            setIsLoading(false);
        }
    };

    // Dummy fallback if API fails or no key
    const showFallback = error;

    return (
        <div className="w-full h-full flex flex-col">
            <div className="relative group flex-1 flex flex-col min-h-0">
                {/* Glow Effect */}
                <div
                    className={`absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 ${isFocused ? "opacity-75" : ""}`}
                ></div>

                <div className="relative flex-1 flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
                    {/* Header / Output Area */}
                    <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-zinc-50/50 dark:bg-black/20 min-h-0">
                        {(!messages || messages.length === 0) && !showFallback && (
                            <div className="flex flex-col items-center justify-center h-full text-zinc-400 space-y-4 py-4">
                                <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                                <div className="text-center space-y-1">
                                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                                        Ask me anything about Vishnu Adithya
                                    </p>
                                    <p className="text-xs text-zinc-400">
                                        Powered by his current resume & Gemini AI
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 text-xs">
                                    <button
                                        onClick={() => setInput("What is his current CGPA?")}
                                        className="px-3 py-1.5 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full border border-zinc-200 dark:border-zinc-700 transition-colors"
                                    >
                                        &quot;What is his current CGPA?&quot;
                                    </button>
                                    <button
                                        onClick={() => setInput("Tell me about his current projects")}
                                        className="px-3 py-1.5 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full border border-zinc-200 dark:border-zinc-700 transition-colors"
                                    >
                                        &quot;Tell me about his current projects&quot;
                                    </button>
                                </div>
                            </div>
                        )}

                        <AnimatePresence>
                            {messages?.map((m: Message) => (
                                <motion.div
                                    key={m.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className={`flex gap-3 mb-4 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    {m.role === "assistant" && (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <Bot className="w-4 h-4 text-white" />
                                        </div>
                                    )}

                                    <div
                                        className={`px-4 py-2.5 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm ${m.role === "user"
                                            ? "bg-black dark:bg-white text-white dark:text-black rounded-tr-none"
                                            : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-tl-none"
                                            }`}
                                    >
                                        {m.content}
                                    </div>

                                    {m.role === "user" && (
                                        <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center flex-shrink-0">
                                            <User className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isLoading && (
                            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono ml-11 mb-4">
                                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                        )}

                        {showFallback && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl mb-4"
                            >
                                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm text-red-700 dark:text-red-300">
                                    <p className="font-bold mb-1">Out of computing credits!</p>
                                    <p>My AI brain is currently resting. Please check my resume or email me directly!</p>
                                </div>
                            </motion.div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleFormSubmit} className="relative border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="Ask me about my experience..."
                            className="w-full pl-4 pr-12 py-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl outline-none text-sm font-medium placeholder:text-zinc-400 focus:bg-white dark:focus:bg-zinc-800 transition-colors border border-transparent focus:border-zinc-200 dark:focus:border-zinc-700"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="absolute right-5 top-1/2 -translate-y-1/2 p-2 bg-black dark:bg-white text-white dark:text-black rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform shadow-sm"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
