import Image from "next/image";
import { type FC } from "react";

import { cn } from "@/lib";

type PoolInfoCardProps = {
  pool: {
    token1: string;
    token2: string;
  };
  className?: string;
};

export const PoolInfoCard: FC<PoolInfoCardProps> = (props) => {
  const { className, pool } = props;
  return (
    <div
      className={cn(
        "flex flex-[1_0_0] flex-col items-center gap-8 rounded-2xl border-t border-border bg-gradient-to-b from-[#f5e2e91a] to-[#8f84881a] p-8",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-[18px]">
        <div className="flex items-start">
          <Image
            className="z-[1]"
            src={`/token/${pool.token1}.svg`}
            alt=""
            width={48}
            height={48}
          />
          <Image
            className="z-[2] -ml-1"
            src={`/token/${pool.token2}.svg`}
            alt=""
            width={48}
            height={48}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 self-stretch">
        <span className="leading-[120%]; self-stretch text-center text-2xl font-bold not-italic text-white">
          Pool {pool.token1.toUpperCase()}/{pool.token2.toUpperCase()}
        </span>
        <div className="flex h-10 content-center items-start gap-2 px-8 py-1">
          <span className="flex-none text-center text-2xl font-normal not-italic leading-[120%] ">
            APR 87.4%
          </span>
          <Image src="/star.svg" alt="" width={33} height={28} />
        </div>
      </div>
      <button
        className="group flex flex-row items-start gap-[10px] rounded-full border border-border p-2 pl-3 hover:bg-accent/50"
        title="Explore"
        type="button"
      >
        <span className="text-base font-normal not-italic leading-[120%] text-primary">
          Explore
        </span>
        <Image
          className="group-hover:animate-[shake_1s_linear_infinite]"
          src="/arrow-right-pink.svg"
          alt=""
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};
