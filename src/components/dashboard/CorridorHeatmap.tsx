import { corridorReliability } from "@/data/mockData";
import { cn } from "@/lib/utils";

function getReliabilityColor(reliability: number): string {
  if (reliability >= 98) return "bg-success/20 text-success";
  if (reliability >= 95) return "bg-chart-2/20 text-chart-2";
  if (reliability >= 90) return "bg-warning/20 text-warning";
  return "bg-destructive/20 text-destructive";
}

function formatVolume(volume: number): string {
  if (volume >= 1000000) return `$${(volume / 1000000).toFixed(1)}M`;
  if (volume >= 1000) return `$${(volume / 1000).toFixed(0)}K`;
  return `$${volume}`;
}

export function CorridorHeatmap() {
  return (
    <div className="rounded-xl border border-border/50 bg-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Corridor Reliability</h3>
        <p className="text-sm text-muted-foreground">Asset pair performance metrics</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Corridor
              </th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Reliability
              </th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Volume (7d)
              </th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Latency
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {corridorReliability.map((corridor, index) => (
              <tr
                key={index}
                className="group transition-colors hover:bg-accent/30"
              >
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{corridor.source}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-medium">{corridor.dest}</span>
                  </div>
                </td>
                <td className="py-4 text-right">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium font-mono-numbers",
                      getReliabilityColor(corridor.reliability)
                    )}
                  >
                    {corridor.reliability}%
                  </span>
                </td>
                <td className="py-4 text-right">
                  <span className="font-mono-numbers text-sm">
                    {formatVolume(corridor.volume)}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <span className="font-mono-numbers text-sm text-muted-foreground">
                    {corridor.latency}s
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
