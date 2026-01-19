import { Header } from "@/components/layout/Header";
import { KPICard } from "@/components/dashboard/KPICard";
import { PaymentsChart } from "@/components/dashboard/PaymentsChart";
import { CorridorHeatmap } from "@/components/dashboard/CorridorHeatmap";
import { TopAssetsTable } from "@/components/dashboard/TopAssetsTable";
import { kpiData } from "@/data/mockData";
import { Activity, GitBranch, DollarSign, Clock } from "lucide-react";

function formatCurrency(value: number): string {
  if (value >= 1000000000) return `$${(value / 1000000000).toFixed(2)}B`;
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  return `$${value.toLocaleString()}`;
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Network metrics as of Jan 14, 2025</p>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Success Rate"
            value={`${kpiData.paymentSuccessRate}%`}
            icon={Activity}
            change="+0.3% from last week"
          />
          <KPICard
            title="Active Corridors"
            value={kpiData.activeCorridors}
            icon={GitBranch}
            change="+5 new corridors"
          />
          <KPICard
            title="Liquidity Depth"
            value={formatCurrency(kpiData.liquidityDepth)}
            icon={DollarSign}
            change="+2.1% from last week"
          />
          <KPICard
            title="Avg Settlement"
            value={`${kpiData.avgSettlementTime}s`}
            icon={Clock}
            change="-0.5s improvement"
          />
        </div>

        <div className="mb-6">
          <PaymentsChart />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <CorridorHeatmap />
          <TopAssetsTable />
        </div>
      </main>
    </div>
  );
}