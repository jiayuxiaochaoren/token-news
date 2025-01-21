"use client";

import { Sheet, SheetContent } from "@/app/components/ui/sheet";
import { TweetCard } from "./tweet-card";
import { TweetCreator } from "./tweet-creator";
import useSWR from "swr";

interface Tweet {
  id: string;
  name: string;
  username: string;
  content: string;
  timestamp: string;
  likes: string;
  retweets: string;
  replies: string;
  quotes: string;
}

interface TweetsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function TweetsDrawer({ open, onOpenChange }: TweetsDrawerProps) {
  const { data: tweets, error } = useSWR<Tweet[]>(
    open ? "/api/tweets" : null,
    fetcher
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[400px] bg-[#171717] border-l border-[#ffffff]/10 p-0"
      >
        <div className="overflow-auto h-full">
          <div className="p-4 border-b border-[#ffffff]/10">
            <TweetCreator />
          </div>
          {error && (
            <div className="p-4 text-[#ef4444]">Failed to load tweets</div>
          )}
          {!tweets && <div className="p-4 text-[#ffffff]/60">Loading...</div>}
          {tweets &&
            tweets.map((tweet) => <TweetCard key={tweet.id} {...tweet} />)}
        </div>
      </SheetContent>
    </Sheet>
  );
}
