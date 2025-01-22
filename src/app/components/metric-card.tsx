import {
  ArrowUpIcon,
  LightbulbIcon,
  TwitterIcon,
  BarChart3Icon,
  UsersIcon,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: number | string;
  icon: "lightbulb" | "twitter" | "bar-chart" | "users";
  changes: {
    fiveMin: string;
    oneHour: string;
    sixHours: string;
  };
}

const iconMap = {
  lightbulb: LightbulbIcon,
  twitter: TwitterIcon,
  "bar-chart": BarChart3Icon,
  users: UsersIcon,
};

export function MetricCard({ title, value, icon, changes }: MetricCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="bg-[#262626]/50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
        <div className="flex items-center text-[#d4f932] text-sm">
          <ArrowUpIcon className="w-3 h-3 mr-1" />
          {changes.fiveMin}
        </div>
      </div>
      <div className="text-2xl font-bold mb-4">{value}</div>
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div>
          <div className="text-[#a3a3a3]">5min</div>
          <div className="text-[#d4f932]">{changes.fiveMin}</div>
        </div>
        <div>
          <div className="text-[#a3a3a3]">1h</div>
          <div className="text-[#d4f932]">{changes.oneHour}</div>
        </div>
        <div>
          <div className="text-[#a3a3a3]">6h</div>
          <div className="text-[#d4f932]">{changes.sixHours}</div>
        </div>
      </div>
    </div>
  );
}
