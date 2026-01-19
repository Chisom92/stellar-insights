import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, BarChart3, GitBranch, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor payment flows, success rates, and volume across the Stellar network with sub-second latency.",
  },
  {
    icon: GitBranch,
    title: "Corridor Intelligence",
    description: "Deep visibility into asset corridors, slippage patterns, and liquidity depth for optimal routing.",
  },
  {
    icon: Shield,
    title: "Anchor Reliability",
    description: "Track anchor performance, uptime, and failure rates to ensure reliable payment paths.",
  },
  {
    icon: Zap,
    title: "Settlement Speed",
    description: "Measure and optimize settlement times across different asset pairs and payment routes.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Ndii Intelligence</span>
          </Link>
          <Link to="/dashboard">
            <Button variant="hero" size="sm">
              View Dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="container relative">
          <div className="flex flex-col items-center py-24 lg:py-32 text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse-glow" />
              <span className="text-muted-foreground">Live on Stellar Mainnet</span>
            </div>

            {/* Headline */}
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-fade-in [animation-delay:100ms] opacity-0">
              <span className="text-gradient">Stellar Flow Intelligence</span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms] opacity-0">
              Real-time analytics for payments, liquidity, and reliability on the Stellar network. 
              Make data-driven decisions with comprehensive corridor and anchor insights.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in [animation-delay:300ms] opacity-0">
              <Link to="/dashboard">
                <Button variant="hero" size="xl">
                  View Dashboard
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="hero-outline" size="xl">
                  How It Works
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 animate-fade-in [animation-delay:400ms] opacity-0">
              {[
                { value: "97.8%", label: "Avg Success Rate" },
                { value: "142", label: "Active Corridors" },
                { value: "$847M", label: "Liquidity Depth" },
                { value: "4.2s", label: "Avg Settlement" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="text-3xl font-bold font-mono-numbers text-gradient">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive Network Intelligence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand and optimize payment flows on the Stellar network.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 animate-fade-in opacity-0"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 border-t border-border/50">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-12 lg:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] opacity-30" />
            
            <div className="relative text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to explore Stellar flows?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                Get instant access to real-time analytics and start making data-driven decisions today.
              </p>
              <div className="mt-8">
                <Link to="/dashboard">
                  <Button variant="hero" size="xl">
                    Explore Dashboard
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Activity className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-medium">Ndii Intelligence</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built for the Stellar ecosystem
          </p>
        </div>
      </footer>
    </div>
  );
}
