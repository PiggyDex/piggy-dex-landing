import { type FC } from "react";

import { PoolInfoCard } from "../ui";

export const Earn: FC = () => {
  return (
    <div className="container flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4">
        <span className="text-center text-6xl font-bold not-italic leading-[120%] text-primary">
          Earn
        </span>
        <span className="text-center text-base font-normal not-italic leading-[120%] text-white/85">
          Effortlessly grow your coin&apos;s value by selecting a yield stack{" "}
          <br />
          and enjoy daily APY returns.
        </span>
      </div>
      <div className="flex items-start gap-6 self-stretch ">
        <PoolInfoCard />
        <PoolInfoCard />
        <PoolInfoCard />
        <PoolInfoCard />
      </div>
    </div>
  );
};
