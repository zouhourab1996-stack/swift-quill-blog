import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
  position: "sidebar" | "in-article" | "banner";
  className?: string;
}

const adSizes = {
  sidebar: "h-64",
  "in-article": "h-24 md:h-28",
  banner: "h-24",
};

const AdPlaceholder = ({ position, className }: AdPlaceholderProps) => {
  return (
    <div
      className={cn(
        "bg-ad-bg border border-ad-border border-dashed rounded-lg flex flex-col items-center justify-center text-center p-4",
        adSizes[position],
        className
      )}
      role="complementary"
      aria-label="Advertisement placeholder"
    >
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
        Advertisement
      </div>
      <div className="text-[10px] text-muted-foreground/60">
        {position === "sidebar" && "300 × 250"}
        {position === "in-article" && "Responsive"}
        {position === "banner" && "728 × 90"}
      </div>
      <div className="mt-2 text-[10px] text-muted-foreground/40">
        Google AdSense
      </div>
    </div>
  );
};

export default AdPlaceholder;
