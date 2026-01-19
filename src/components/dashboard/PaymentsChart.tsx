import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { paymentsOverTime } from "@/data/mockData";

export function PaymentsChart() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="font-medium">Payments</h3>
        <p className="text-sm text-muted-foreground">Daily transaction count</p>
      </div>
      
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={paymentsOverTime}
            margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPayments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(168, 45%, 52%)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(168, 45%, 52%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 11 }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 11 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              dx={-8}
              width={40}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(220, 14%, 12%)",
                border: "1px solid hsl(220, 12%, 16%)",
                borderRadius: "6px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "hsl(220, 10%, 92%)" }}
              itemStyle={{ color: "hsl(168, 45%, 52%)" }}
              formatter={(value: number) => [value.toLocaleString(), "Payments"]}
            />
            <Area
              type="monotone"
              dataKey="payments"
              stroke="hsl(168, 45%, 52%)"
              strokeWidth={1.5}
              fill="url(#colorPayments)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}