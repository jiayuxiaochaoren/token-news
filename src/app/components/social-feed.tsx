import { Heart, MessageCircle, Repeat } from "lucide-react";
import { Image } from "@/app/components/ui/image";
import { TwitterStruct } from "@/types/tweets";
import dayjs from "dayjs";

type SocialViewMode = "like" | "views" | "latest" | "followers";

interface SocialFeedProps {
  viewMode: SocialViewMode;
  tweets: TwitterStruct[];
}

export function SocialFeed({ viewMode, tweets }: SocialFeedProps) {
  // In a real application, you would filter or sort the tweets based on the viewMode

  return (
    <div className="divide-y divide-[#404040]">
      {tweets?.map((tweet, i) => (
        <div key={tweet?.tweet_id + i} className="p-4">
          <div className="flex gap-3">
            <Image
              src={tweet?.user?.icon || "/placeholder.svg"}
              alt={tweet?.user?.screen_name || ""}
              width={40}
              height={40}
              // className="rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-semibold">{tweet?.user?.name}</div>
                  <div className="text-sm text-[#a3a3a3]">
                    @{tweet.user?.screen_name}
                  </div>
                </div>
                <div className="text-sm text-[#a3a3a3]">
                  {dayjs.unix(tweet?.created_time).format("YYYY-MM-DD HH:mm")}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1 text-sm text-[#a3a3a3]">
                  <Heart className="w-4 h-4" />
                  <span>{tweet?.favorite_count}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#a3a3a3]">
                  <Repeat className="w-4 h-4" />
                  <span>{tweet?.retweet_count}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#a3a3a3]">
                  <MessageCircle className="w-4 h-4" />
                  <span>{tweet?.reply_count}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
