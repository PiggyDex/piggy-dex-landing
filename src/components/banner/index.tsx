import Image from "next/image";
import { type FC } from "react";

import { LaunchAppButton } from "../ui";

export const Banner: FC = () => {
  return (
    <div className="container flex flex-col items-center gap-12">
      <Image
        className="absolute z-[-1] ml-auto mr-auto"
        src="/banner-bg.svg"
        alt="banner"
        width={1440}
        height={1860}
      />
      <div className="inline-flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <span className="text-center text-6xl font-bold not-italic leading-[120%] text-textLight">
            The Ecosystem-focused DEX <br />
            <span className="text-primary">built on Conflux</span>
          </span>
          <span className="text-xl font-normal not-italic leading-[120%] tracking-[0.4px] text-white/80">
            Piggy DEX is the ecosystem-focused decentralized <br />
            exchange built on Conflux
          </span>
        </div>
        <LaunchAppButton />
      </div>
      <Image
        className="flex-shrink-0"
        src="/banner-piggy.svg"
        alt="banner"
        width={335}
        height={397}
      />
    </div>
  );
};
