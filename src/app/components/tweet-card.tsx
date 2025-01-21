import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { HeartIcon, RepeatIcon, MessageCircleIcon } from "lucide-react";

interface TweetCardProps {
  name: string;
  username: string;
  content: string;
  timestamp: string;
  likes: string;
  retweets: string;
  replies: string;
  quotes: string;
}

export function TweetCard({
  name,
  username,
  content,
  timestamp,
  likes,
  retweets,
  replies,
  quotes,
}: TweetCardProps) {
  return (
    <div className="p-4 border-b border-white/10">
      <div className="flex gap-3">
        <Avatar className="w-10 h-10 rounded-full">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold">{name}</div>
              <div className="text-sm text-muted-foreground">{username}</div>
            </div>
            <div className="text-sm text-muted-foreground">{timestamp}</div>
          </div>
          <div className="mt-2 text-sm">
            {content.split("EigenLayer").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="text-[#CCFF00]">EigenLayer</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6 mt-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <HeartIcon className="w-4 h-4" /> {likes}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <RepeatIcon className="w-4 h-4" /> {retweets}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageCircleIcon className="w-4 h-4" /> {replies}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              x{quotes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
