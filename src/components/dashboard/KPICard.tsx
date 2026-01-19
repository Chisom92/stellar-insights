import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  change?: string;
  className?: string;
}

export function KPICard({ title, value, subtitle, icon: Icon, change, className }: KPICardProps) {
  return (
    <div className={cn("p-5 rounded-lg border border-border bg-card", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-mono font-medium mt-1">
            {value}
            {subtitle && <span className="text-sm font-sans text-muted-foreground ml-1">{subtitle}</span>}
          </p>
          {change && (
            <p className="text-xs text-muted-foreground mt-2">{change}</p>
          )}
        </div>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}