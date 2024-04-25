import { type FC } from "react";

import { cn } from "@/lib";

interface Props {
  className?: string;
  direction: string | "horizontal" | "vertical";
}

export const Seperator: FC<Props> = ({ className, direction }) => {
  return (
    <>
      {direction === "horizontal" ? (
        <div className={cn("w-[1px] bg-primary", className)} />
      ) : (
        <div className={cn("h-[1px] bg-primary", className)} />
      )}
    </>
  );
};
