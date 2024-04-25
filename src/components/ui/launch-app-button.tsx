"use client";
import { type FC } from "react";

import { cn } from "@/lib";

interface Props {
  className?: string;
  textClassName?: string;
  onClick?: () => void;
}

export const LaunchAppButton: FC<Props> = ({
  className,
  textClassName,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        " flex h-12 items-center justify-center rounded-[10px] bg-primary px-8 py-3 hover:bg-primary/80",
        className,
      )}
      title="Launch App"
      type="button"
    >
      <span
        className={cn(
          "text-base font-bold not-italic leading-[120%] text-primary-foreground",
          textClassName,
        )}
      >
        Launch App
      </span>
    </button>
  );
};
