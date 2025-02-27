"use client";

import { Shadcn } from "@/app/shadcn";
import { useChat } from "ai/react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";

export default function HomePage() {
  return (
    <main className="container mx-auto flex flex-col gap-6 self-stretch py-4">
      <div className="mt-12 flex flex-col gap-4 self-center">
        <h1 className="text-center text-4xl font-extrabold">
          Assistant for AI chat
        </h1>
      </div>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <div className="mt-4 h-[650px] overflow-hidden rounded-lg border shadow">
          <MyRuntimeProvider>
            <Shadcn />
          </MyRuntimeProvider>
        </div>
      </div>
    </main>
  );
}

export type AssistantProps = {
  chat: ReturnType<typeof useChat>;
};

const MyRuntimeProvider = ({ children }: { children: React.ReactNode }) => {
  const runtime = useChatRuntime({ api: "/api/chat" });
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
};