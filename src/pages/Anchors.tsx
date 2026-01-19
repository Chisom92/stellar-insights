import { Header } from "@/components/layout/Header";
import { anchorData } from "@/data/mockData";
import { cn } from "@/lib/utils";

function formatVolume(volume: number): string {
  if (volume >= 1000000) return `$${(volume / 1000000).toFixed(1)}M`;
  if (volume >= 1000) return `$${(volume / 1000).toFixed(0)}K`;
  return `$${volume}`;
}

function getStatusColor(status: string): string {
  switch (status) {
    case "green":
      return "bg-success";
    case "yellow":
      return "bg-warning";
    case "red":
      return "bg-destructive";
    default:
      return "bg-muted";
  }
}

function getStatusBg(status: string): string {
  switch (status) {
    case "green":
      return "bg-success/10";
    case "yellow":
      return "bg-warning/10";
    case "red":
      return "bg-destructive/10";
    default:
      return "bg-muted/10";
  }
}

export default function Anchors() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Anchor Reliability</h1>
          <p className="text-muted-foreground">Performance rankings for Stellar anchors</p>
        </div>

        {/* Anchors Table */}
        <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Anchor
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Assets
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Volume (7d)
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Success Rate
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Failure %
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {anchorData.map((anchor, index) => (
                  <tr
                    key={index}
                    className="group transition-colors hover:bg-accent/30"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center">
                        <span
                          className={cn(
                            "flex h-3 w-3 rounded-full",
                            getStatusColor(anchor.status)
                          )}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold",
                            getStatusBg(anchor.status),
                            anchor.status === "green" ? "text-success" :
                            anchor.status === "yellow" ? "text-warning" : "text-destructive"
                          )}
                        >
                          {anchor.name.slice(0, 2).toUpperCase()}
                        </div>
                        <span className="font-medium">{anchor.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-1.5">
                        {anchor.assets.map((asset) => (
                          <span
                            key={asset}
                            className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {asset}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className="font-mono-numbers text-sm">
                        {formatVolume(anchor.volume)}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium font-mono-numbers",
                          anchor.successRate >= 97 ? "bg-success/20 text-success" :
                          anchor.successRate >= 93 ? "bg-warning/20 text-warning" :
                          "bg-destructive/20 text-destructive"
                        )}
                      >
                        {anchor.successRate}%
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span
                        className={cn(
                          "font-mono-numbers text-sm",
                          anchor.failures <= 3 ? "text-success" :
                          anchor.failures <= 6 ? "text-warning" :
                          "text-destructive"
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
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-end gap-6">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-success" />
            <span className="text-sm text-muted-foreground">Reliable (≥97%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-warning" />
            <span className="text-sm text-muted-foreground">Moderate (93-97%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-destructive" />
            <span className="text-sm text-muted-foreground">At Risk (&lt;93%)</span>
          </div>
        </div>
      </main>
    </div>
  );
}
