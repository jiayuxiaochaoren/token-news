import { getAlertsList } from "./actions/alerts";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { MonitoringControls } from "./components/monitoring-controls";
import { Sidebar } from "./components/sidebar";
import { TokenProvider } from "@/contexts/token-context";

// 设置页面缓存
export const revalidate = 5;

export default async function Page() {
  const defaultList = await getAlertsList({ page: 1 });

  return (
    <TokenProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex pt-[52px] h-[calc(100vh-52px)]">
          <Sidebar defaultList={defaultList} />
          <div className="flex-1 overflow-auto">
            <div className="w-px bg-[#262626] fixed top-[52px] bottom-0 left-[320px] hidden lg:block"></div>
            <main className="p-4 lg:p-6">
              <Dashboard />
            </main>
          </div>
        </div>
        <MonitoringControls />
      </div>
    </TokenProvider>
  );
}
