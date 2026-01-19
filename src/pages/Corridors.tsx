import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { KPICard } from "@/components/dashboard/KPICard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { corridorPairs, corridorDetails } from "@/data/mockData";
import { Activity, TrendingDown, DollarSign } from "lucide-react";

function formatCurrency(value: number): string {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value}`;
}

export default function Corridors() {
  const [selectedCorridor, setSelectedCorridor] = useState("usdc-xlm");
  const details = corridorDetails[selectedCorridor];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Page Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Corridor Explorer</h1>
            <p className="text-muted-foreground">Analyze asset pair performance and trends</p>
          </div>
          
          <Select value={selectedCorridor} onValueChange={setSelectedCorridor}>
            <SelectTrigger className="w-[220px] bg-card border-border/50">
              <SelectValue placeholder="Select corridor" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border/50">
              {corridorPairs.map((pair) => (
                <SelectItem key={pair.value} value={pair.value}>
                  {pair.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <KPICard
            title="Success Rate"
            value={`${details.successRate}%`}
            icon={Activity}
            trend={{ value: 0.2, isPositive: true }}
          />
          <KPICard
            title="Avg Slippage"
            value={`${details.avgSlippage}%`}
            icon={TrendingDown}
            trend={{ value: 0.05, isPositive: false }}
          />
          <KPICard
            title="7-Day Volume"
            value={formatCurrency(details.volume7d)}
            icon={DollarSign}
            trend={{ value: 8.3, isPositive: true }}
          />
        </div>

        {/* Volume Chart */}
        <div className="rounded-xl border border-border/50 bg-card p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Volume Trend</h3>
            <p className="text-sm text-muted-foreground">Daily volume for the selected corridor</p>
          </div>
          
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={details.volumeTrend}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                  dx={-10}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 44%, 10%)",
                    border: "1px solid hsl(220, 20%, 18%)",
                    borderRadius: "8px",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
                  }}
                  labelStyle={{ color: "hsl(210, 40%, 96%)", fontWeight: 500 }}
                  itemStyle={{ color: "hsl(199, 89%, 48%)" }}
                  formatter={(value: number) => [formatCurrency(value), "Volume"]}
                />
                <Area
                  type="monotone"
                  dataKey="volume"
                  stroke="hsl(199, 89%, 48%)"
                  strokeWidth={2}
                  fill="url(#colorVolume)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
