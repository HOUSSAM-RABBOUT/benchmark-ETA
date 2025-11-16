import { Plane } from "lucide-react";

interface SectionDividerProps {
  variant?: "primary" | "secondary";
}

export const SectionDivider = ({ variant = "primary" }: SectionDividerProps) => {
  return (
    <div className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <div className={`h-px flex-1 ${variant === "primary" ? "bg-gradient-to-r from-transparent via-primary/30 to-primary/30" : "bg-gradient-to-r from-transparent via-muted-foreground/20 to-muted-foreground/20"}`} />
          <div className={`p-2 rounded-full ${variant === "primary" ? "bg-primary/10" : "bg-muted"}`}>
            <Plane className={`w-4 h-4 ${variant === "primary" ? "text-primary" : "text-muted-foreground"}`} />
          </div>
          <div className={`h-px flex-1 ${variant === "primary" ? "bg-gradient-to-l from-transparent via-primary/30 to-primary/30" : "bg-gradient-to-l from-transparent via-muted-foreground/20 to-muted-foreground/20"}`} />
        </div>
      </div>
    </div>
  );
};
