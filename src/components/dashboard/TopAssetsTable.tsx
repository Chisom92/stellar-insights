import { topAssets } from "@/data/mockData";
import { cn } from "@/lib/utils";

function formatVolume(volume: number): string {
  if (volume >= 1000000) return `$${(volume / 1000000).toFixed(1)}M`;
  if (volume >= 1000) return `$${(volume / 1000).toFixed(0)}K`;
  return `$${volume}`;
}

function formatTxCount(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return count.toString();
}

export function TopAssetsTable() {
  return (
    <div className="rounded-xl border border-border/50 bg-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Top Assets & Anchors</h3>
        <p className="text-sm text-muted-foreground">By volume and success rate</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Asset
              </th>
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Issuer
              </th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Volume (7d)
              </th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Success Rate
              </th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Transactions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {topAssets.map((asset, index) => (
              <tr
                key={index}
                className="group transition-colors hover:bg-accent/30"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {asset.asset.slice(0, 2)}
                    </div>
                    <span className="font-medium">{asset.asset}</span>
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-sm text-muted-foreground">{asset.issuer}</span>
                </td>
                <td className="py-4 text-right">
                  <span className="font-mono-numbers text-sm">
                    {formatVolume(asset.volume)}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <span
                    className={cn(
                      "font-mono-numbers text-sm",
                      asset.successRate >= 98 ? "text-success" : 
                      asset.successRate >= 95 ? "text-chart-2" : "text-warning"
                    )}
                  >
                    {asset.successRate}%
                  </span>
                </td>
                <td className="py-4 text-right">
                  <span className="font-mono-numbers text-sm text-muted-foreground">
                    {formatTxCount(asset.txCount)}
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
