"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { updateTweet } from "@/app/actions/updateTweet";
import { fetcher } from "@/utils/fetcher";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";

interface Tweet {
  id: string;
  content: string;
}

export function TweetEditor({ tweetId }: { tweetId: string }) {
  const router = useRouter();
  const { data: tweet, mutate } = useSWR<Tweet>(
    `/api/tweets/${tweetId}`,
    fetcher
  );
  const [content, setContent] = useState(tweet?.content || "");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      await updateTweet(tweetId, content);
      await mutate(); // 重新获取更新后的数据
      router.refresh(); // 刷新页面以显示更新
    } catch (error) {
      console.error("Failed to update tweet:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  if (!tweet) return <div className="text-[#ffffff]/60">Loading...</div>;

  return (
    <div className="bg-[#171717] p-4 rounded-lg">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-4 bg-[#262626] text-[#ffffff] border-[#404040]"
      />
      <Button
        onClick={handleUpdate}
        disabled={isUpdating}
        className="bg-[#CCFF00] text-[#171717] hover:bg-[#CCFF00]/90"
      >
        {isUpdating ? "Updating..." : "Update Tweet"}
      </Button>
    </div>
  );
}
