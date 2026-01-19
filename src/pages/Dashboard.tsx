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
      
      <main className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Network Dashboard</h1>
          <p className="text-muted-foreground">Real-time Stellar network analytics and metrics</p>
        </div>

        {/* KPI Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Payment Success Rate"
            value={`${kpiData.paymentSuccessRate}%`}
            icon={Activity}
            trend={{ value: 0.3, isPositive: true }}
          />
          <KPICard
            title="Active Corridors"
            value={kpiData.activeCorridors}
            icon={GitBranch}
            trend={{ value: 5, isPositive: true }}
          />
          <KPICard
            title="Liquidity Depth"
            value={formatCurrency(kpiData.liquidityDepth)}
            icon={DollarSign}
            trend={{ value: 2.1, isPositive: true }}
          />
          <KPICard
            title="Avg Settlement Time"
            value={`${kpiData.avgSettlementTime}s`}
            icon={Clock}
            trend={{ value: 0.5, isPositive: true }}
          />
        </div>

        {/* Charts Row */}
        <div className="mb-8">
          <PaymentsChart />
        </div>

        {/* Tables Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          <CorridorHeatmap />
          <TopAssetsTable />
        </div>
      </main>
    </div>
  );
}
