import { topAssets } from "@/data/mockData";
import { cn } from "@/lib/utils";

function formatVolume(volume: number): string {
  if (volume >= 1000000) return `$${(volume / 1000000).toFixed(1)}M`;
  if (volume >= 1000) return `$${(volume / 1000).toFixed(0)}K`;
  return `$${volume}`;
}

export function TopAssetsTable() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="font-medium">Top Assets</h3>
        <p className="text-sm text-muted-foreground">By volume and success rate</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Asset</th>
              <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Volume</th>
              <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Success</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {topAssets.map((asset, index) => (
              <tr key={index} className="hover:bg-accent/50 transition-colors">
                <td className="py-3">
                  <div>
                    <span className="font-mono text-xs">{asset.asset}</span>
                    <span className="text-xs text-muted-foreground ml-2">{asset.issuer}</span>
                  </div>
                </td>
                <td className="py-3 text-right font-mono text-xs text-muted-foreground">
                  {formatVolume(asset.volume)}
                </td>
                <td className="py-3 text-right">
                  <span
                    className={cn(
                      "font-mono text-xs",
                      asset.successRate >= 98 ? "text-success" :
                      asset.successRate >= 95 ? "text-chart-2" : "text-warning"
                    )}
                  >
                    {asset.successRate}%
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