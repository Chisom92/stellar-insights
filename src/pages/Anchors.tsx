import { Header } from "@/components/layout/Header";
import { anchorData } from "@/data/mockData";
import { cn } from "@/lib/utils";

function formatVolume(volume: number): string {
  if (volume >= 1000000) return `$${(volume / 1000000).toFixed(1)}M`;
  if (volume >= 1000) return `$${(volume / 1000).toFixed(0)}K`;
  return `$${volume}`;
}

export default function Anchors() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">Anchor Reliability</h1>
          <p className="text-sm text-muted-foreground">Performance by anchor</p>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">Anchor</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">Assets</th>
                <th className="px-5 py-3 text-right text-xs font-medium text-muted-foreground">Volume</th>
                <th className="px-5 py-3 text-right text-xs font-medium text-muted-foreground">Success</th>
                <th className="px-5 py-3 text-right text-xs font-medium text-muted-foreground">Failures</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {anchorData.map((anchor, index) => (
                <tr key={index} className="hover:bg-accent/50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full flex-shrink-0",
                          anchor.status === "green" ? "bg-success" :
                          anchor.status === "yellow" ? "bg-warning" : "bg-destructive"
                        )}
                      />
                      <span className="font-medium">{anchor.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      {anchor.assets.map((asset) => (
                        <span
                          key={asset}
                          className="px-1.5 py-0.5 rounded text-xs bg-secondary text-secondary-foreground font-mono"
                        >
                          {asset}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-xs text-muted-foreground">
                    {formatVolume(anchor.volume)}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <span
                      className={cn(
                        "font-mono text-xs",
                        anchor.successRate >= 97 ? "text-success" :
                        anchor.successRate >= 93 ? "text-warning" : "text-destructive"
                      )}
                    >
                      {anchor.successRate}%
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <span
                      className={cn(
                        "font-mono text-xs",
                        anchor.failures <= 3 ? "text-muted-foreground" :
                        anchor.failures <= 6 ? "text-warning" : "text-destructive"
                      )}
                    >
                      {anchor.failures}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-success" />
            <span>≥97% success</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-warning" />
            <span>93–97%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-destructive" />
            <span>&lt;93%</span>
          </div>
        </div>
      </main>
    </div>
  );
}