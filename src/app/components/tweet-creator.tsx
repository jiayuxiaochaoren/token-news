"use client";

import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";

const fetcher = (url: string, init?: RequestInit) =>
  fetch(url, init).then((res) => res.json());

export function TweetCreator() {
  const [content, setContent] = useState("");
  const router = useRouter();

  const { mutate } = useSWR("/api/tweets", fetcher);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        setContent("");
        await mutate(); // 重新获取tweets列表
        router.refresh(); // 刷新页面以显示新tweet
      } else {
        console.error("Failed to create tweet");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#171717] p-4 rounded-lg">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
        className="mb-4 bg-[#262626] text-[#ffffff] border-[#404040] placeholder-[#737373]"
      />
      <Button
        type="submit"
        className="bg-[#d4f932] text-[#000000] hover:bg-[#d4f932]/90"
      >
        Tweet
      </Button>
    </form>
  );
}
