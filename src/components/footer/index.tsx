import { type FC } from "react";

import { Seperator } from "@/components";

export const Footer: FC = () => {
  return (
    <footer className="container flex items-start justify-between border-t border-white/20 px-12 py-12">
      <div className="flex flex-[1_0_0] items-start gap-[60px]">
        <span className="text-xl font-normal not-italic leading-[120%] tracking-[0.4px]">
          Contact
        </span>
        <span className="text-xl font-normal not-italic leading-[120%] tracking-[0.4px]">
          Press
        </span>
        <span className="text-xl font-normal not-italic leading-[120%] tracking-[0.4px]">
          Blog
        </span>
        <span className="text-xl font-normal not-italic leading-[120%] tracking-[0.4px]">
          Documentation
        </span>
      </div>
      <div className="flex flex-[1_0_0] items-start justify-end gap-6">
        <span className="text-xl font-normal not-italic leading-[120%] tracking-[0.4px]">
          ©2024 Piggy DEX
        </span>
        <Seperator className="h-[25px] bg-accent" direction="horizontal" />
        <span className="text-xl font-normal not-italic leading-[120%] tracking-[0.4px]">
          Cookie & Privacy Policy
        </span>
      </div>
    </footer>
  );
};
