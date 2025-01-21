import { Button } from "@/app/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 bg-[#0f0f0f] h-[52px] fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold text-[#f2a]">f2a</span>
      </div>
      <button className="text-sm text-[#ffffff]">Login</button>
    </header>
  );
}
