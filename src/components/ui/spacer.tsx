import { type FC } from "react";

import { cn } from "@/lib";

interface Props {
  className?: string;
}

export const Spacer: FC<Props> = ({ className }) => {
  return <div className={cn("h-20 w-full bg-transparent", className)} />;
};
