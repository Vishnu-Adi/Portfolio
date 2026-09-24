"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CornerDownLeft, LoaderCircle } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const prompts = [
  "What did you build at HPE?",
  "Why did you use WebRTC in WebDrop?",
  "What are you exploring now?",
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function ask(question: string) {
    const content = question.trim();
    if (!content || isLoading) return;

    const messageIndex = messages.length;
    const userMessage: Message = {
      id: `${messageIndex}-user`,
      role: "user",
      content,
    };
    const assistantMessage: Message = {
      id: `${messageIndex}-assistant`,
      role: "assistant",
      content: "",
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error("The archive is unavailable right now.");
      }

      const answer = await response.text();
      setMessages((current) =>
        current.map((message) => (message.id === assistantMessage.id ? { ...message, content: answer } : message)),
      );
    } catch {
      setError("The archive is unavailable right now. The rest of the portfolio is still open.");
      setMessages((current) => current.filter((message) => message.id !== assistantMessage.id));
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <section className="ask-archive" aria-labelledby="ask-archive-title">
      <div className="ask-archive__header">
        <div>
          <p className="eyebrow">INTERACTIVE ARCHIVE / 05</p>
          <h2 id="ask-archive-title">Ask Vishnu.</h2>
        </div>
        <p className="ask-archive__status" role="status" aria-live="polite">
          <span className="availability-mark__dot" />
          {isLoading ? "Thinking" : "Available to answer"}
        </p>
      </div>

      <div className="ask-archive__body" aria-live="polite">
        {messages.length === 0 && (
          <div className="ask-archive__intro">
            <p>
              A small, searchable layer over the work. Ask about a project, a technical choice, or the part that was harder than it looked.
            </p>
            <div className="ask-archive__prompts">
              {prompts.map((prompt) => (
                <button key={prompt} type="button" onClick={() => void ask(prompt)}>
                  <span>{prompt}</span>
                  <ArrowUpRight size={15} strokeWidth={1.25} />
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div key={message.id} className={`ask-message ask-message--${message.role}`}>
            <span className="ask-message__label">{message.role === "user" ? "YOU" : "VA"}</span>
            <p>{message.content || (isLoading ? "Reading the archive…" : "")}</p>
          </div>
        ))}

        {error && <p className="ask-archive__error">{error}</p>}
      </div>

      <form className="ask-archive__form" onSubmit={handleSubmit}>
        <label htmlFor="ask-vishnu" className="sr-only">Ask Vishnu about his work</label>
        <input
          id="ask-vishnu"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about a project, a choice, a trade-off…"
          disabled={isLoading}
          autoComplete="off"
        />
        <button type="submit" disabled={isLoading || !input.trim()} aria-label="Send question">
          {isLoading ? <LoaderCircle className="spin" size={18} strokeWidth={1.4} /> : <CornerDownLeft size={18} strokeWidth={1.4} />}
        </button>
      </form>
    </section>
  );
}
