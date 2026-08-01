import {
  Waves,
  Box,
  Cpu,
  FlaskConical,
  Target,
  Activity,
  Bot,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { SkillGroup } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  waves: Waves,
  box: Box,
  cpu: Cpu,
  "flask-conical": FlaskConical,
  target: Target,
  activity: Activity,
  bot: Bot,
  sparkles: Sparkles,
};

export function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = iconMap[group.icon] ?? Box;

  return (
    <div className="group rounded-lg border border-border-subtle bg-surface/40 p-6 transition-all duration-300 ease-signature hover:border-border hover:bg-surface">
      <Icon
        size={20}
        strokeWidth={1.4}
        className="text-accent transition-transform duration-300 ease-signature group-hover:-translate-y-0.5"
      />
      <h3 className="mt-4 font-display text-[15px] font-semibold text-foreground">
        {group.category}
      </h3>
      <ul className="mt-3 space-y-1.5">
        {group.items.map((item) => (
          <li key={item} className="text-[13px] leading-relaxed text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
