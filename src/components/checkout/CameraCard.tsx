import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Camera } from "@/types";

interface CameraCardProps {
  camera: Camera;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export function CameraCard({ camera, onUpdateQuantity }: CameraCardProps) {
  const [selectedColor, setSelectedColor] = useState(camera.colors?.[0]?.name ?? "");

  const activeColor = camera.colors?.find((c) => c.name === selectedColor);
  const displayImage = activeColor?.image ?? camera.image;

  return (
    <div
      className={cn(
        "min-h-[331.1px] bg-card rounded-[10px] px-[11px] py-[15px] flex flex-col transition-all",
        camera.quantity > 0
          ? "border-2 border-primary"
          : "border border-border"
      )}
    >
      {camera.saveBadge && (
        <div className="bg-primary text-primary-foreground text-[11px] font-bold px-2.5 py-1 rounded-full w-fit leading-none mb-3">
          {camera.saveBadge}
        </div>
      )}

      <div className="h-[100px] flex items-center justify-center mb-3">
        <img
          src={displayImage}
          alt={camera.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <h3 className="text-[18px] font-semibold text-foreground leading-none tracking-[0.6px] mb-1">
        {camera.name}
      </h3>

      <p className="text-[14px] text-muted-foreground leading-[130%] tracking-[0.6px] font-medium mb-2">
        {camera.description}
      </p>

      <button className="text-[14px] text-primary font-medium underline underline-offset-0 decoration-solid text-left leading-[130%] tracking-[0.6px] mb-3">
        Learn More
      </button>

      {camera.colors && camera.colors.length > 0 && (
        <div className="flex gap-1.5 flex-wrap mb-3">
          {camera.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={cn(
                "flex items-center gap-1 px-1.5 py-1 rounded-md border text-[10px] font-medium transition-colors",
                selectedColor === color.name
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-background text-muted-foreground hover:border-muted-foreground/40"
              )}
            >
              <img
                src={color.image}
                alt={color.name}
                className="w-5 h-5 rounded object-cover"
              />
              {color.name}
            </button>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onUpdateQuantity(camera.id, camera.quantity - 1)}
            className="w-7 h-7 border border-input rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="w-6 text-center text-sm font-normal">
            {camera.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(camera.id, camera.quantity + 1)}
            className="w-7 h-7 border border-input rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {camera.originalPrice > 0 && (
            <span className="text-[16px] text-[#D8392B] line-through leading-none tracking-[0.6px] whitespace-nowrap">
              ${camera.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-sm font-normal text-foreground leading-tight whitespace-nowrap">
            ${camera.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
