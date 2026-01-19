import { corridorReliability } from "@/data/mockData";
import { cn } from "@/lib/utils";

function formatVolume(volume: number): string {
  if (volume >= 1000000) return `$${(volume / 1000000).toFixed(1)}M`;
  if (volume >= 1000) return `$${(volume / 1000).toFixed(0)}K`;
  return `$${volume}`;
}

export function CorridorHeatmap() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="font-medium">Corridor Reliability</h3>
        <p className="text-sm text-muted-foreground">Asset pair performance</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Pair</th>
              <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Reliability</th>
              <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Volume</th>
              <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Latency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {corridorReliability.map((corridor, index) => (
              <tr key={index} className="hover:bg-accent/50 transition-colors">
                <td className="py-3">
                  <span className="font-mono text-xs">{corridor.source}/{corridor.dest}</span>
                </td>
                <td className="py-3 text-right">
                  <span
                    className={cn(
                      "font-mono text-xs",
                      corridor.reliability >= 98 ? "text-success" :
                      corridor.reliability >= 95 ? "text-chart-2" : "text-warning"
                    )}
                  >
                    {corridor.reliability}%
                  </span>
                </td>
                <td className="py-3 text-right font-mono text-xs text-muted-foreground">
                  {formatVolume(corridor.volume)}
                </td>
                <td className="py-3 text-right font-mono text-xs text-muted-foreground">
                  {corridor.latency}s
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}