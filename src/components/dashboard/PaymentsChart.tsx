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
    <div className="rounded-xl border border-border/50 bg-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Payments Over Time</h3>
        <p className="text-sm text-muted-foreground">Daily transaction volume</p>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={paymentsOverTime}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPayments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(173, 80%, 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(173, 80%, 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
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
              itemStyle={{ color: "hsl(173, 80%, 45%)" }}
              formatter={(value: number) => [value.toLocaleString(), "Payments"]}
            />
            <Area
              type="monotone"
              dataKey="payments"
              stroke="hsl(173, 80%, 45%)"
              strokeWidth={2}
              fill="url(#colorPayments)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
