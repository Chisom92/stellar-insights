import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, GitBranch, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Payment Analytics",
    description: "Track payment success rates, volume, and latency across the network.",
  },
  {
    icon: GitBranch,
    title: "Corridor Data",
    description: "Monitor asset pairs, slippage, and liquidity depth.",
  },
  {
    icon: Shield,
    title: "Anchor Metrics",
    description: "Evaluate anchor reliability and failure rates.",
  },
  {
    icon: Zap,
    title: "Settlement Speed",
    description: "Analyze settlement times across payment routes.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center">
              <BarChart3 className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="font-medium">Ndii</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/corridors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Corridors
            </Link>
            <Link to="/anchors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Anchors
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground mb-3">Stellar Network Analytics</p>
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
              Stellar Flow Intelligence
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Real-time analytics for payments, liquidity, and reliability on the Stellar network.
            </p>
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <Button>
                  View Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#features">
                <Button variant="ghost">How It Works</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "97.8%", label: "Success Rate" },
              { value: "142", label: "Active Corridors" },
              { value: "$847M", label: "Liquidity Depth" },
              { value: "4.2s", label: "Avg Settlement" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-mono font-medium">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-border">
        <div className="container py-16">
          <p className="text-sm text-muted-foreground mb-2">Features</p>
          <h2 className="text-xl font-semibold mb-8">Network Intelligence</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-5 rounded-lg border border-border bg-card"
              >
                <feature.icon className="h-5 w-5 text-muted-foreground mb-4" />
                <h3 className="font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="container py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Ready to explore?</h2>
              <p className="text-muted-foreground mt-1">Access real-time Stellar network data.</p>
            </div>
            <Link to="/dashboard">
              <Button>
                Open Dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-primary/20 flex items-center justify-center">
              <BarChart3 className="h-3 w-3 text-primary" />
            </div>
            <span className="text-sm">Ndii Intelligence</span>
          </div>
          <p className="text-xs text-muted-foreground">Stellar Network Analytics</p>
        </div>
      </footer>
    </div>
  );
}