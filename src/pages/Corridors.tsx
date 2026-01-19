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
  const selectedLabel = corridorPairs.find(p => p.value === selectedCorridor)?.label || "USDC → XLM";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-lg font-semibold">Corridor Explorer</h1>
            <p className="text-sm text-muted-foreground">Asset pair analytics</p>
          </div>
          
          <Select value={selectedCorridor} onValueChange={setSelectedCorridor}>
            <SelectTrigger className="w-[180px] bg-card border-border">
              <SelectValue placeholder="Select pair" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {corridorPairs.map((pair) => (
                <SelectItem key={pair.value} value={pair.value}>
                  {pair.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <KPICard
            title="Success Rate"
            value={`${details.successRate}%`}
            icon={Activity}
          />
          <KPICard
            title="Avg Slippage"
            value={`${details.avgSlippage}%`}
            icon={TrendingDown}
          />
          <KPICard
            title="7-Day Volume"
            value={formatCurrency(details.volume7d)}
            icon={DollarSign}
          />
        </div>

        <div className="rounded-lg border border-border bg-card p-5">
          <div className="mb-4">
            <h3 className="font-medium">Volume Trend</h3>
            <p className="text-sm text-muted-foreground">{selectedLabel} — last 7 days</p>
          </div>
          
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={details.volumeTrend}
                margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(200, 60%, 50%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(200, 60%, 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 11 }}
                  dy={8}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 11 }}
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                  dx={-8}
                  width={50}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 14%, 12%)",
                    border: "1px solid hsl(220, 12%, 16%)",
                    borderRadius: "6px",
                    fontSize: "12px",
                  }}
                  labelStyle={{ color: "hsl(220, 10%, 92%)" }}
                  itemStyle={{ color: "hsl(200, 60%, 50%)" }}
                  formatter={(value: number) => [formatCurrency(value), "Volume"]}
                />
                <Area
                  type="monotone"
                  dataKey="volume"
                  stroke="hsl(200, 60%, 50%)"
                  strokeWidth={1.5}
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