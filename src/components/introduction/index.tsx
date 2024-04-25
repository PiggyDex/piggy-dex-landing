"use client";
import Image from "next/image";
import { type FC } from "react";

export const Introduction: FC = () => {
  return (
    <div className="container flex h-[436px] flex-shrink-0 bg-transparent bg-gradient-to-tr from-[#FFA6C6] from-[-15%] to-75% backdrop-blur-3xl">
      <Image
        className="absolute right-0 mt-28 flex self-end"
        src="/introduction-piggy.png"
        alt="Introduction"
        width={600}
        height={450}
      />
      <div className="m-[100px] inline-flex flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-4">
          <span className="text-center text-6xl font-bold not-italic leading-[120%] text-primary">
            Piggy DEX
          </span>
          <span className="text-base font-normal not-italic leading-[120%] text-white/85">
            You can expect a highly efficient on-chain trading experience. This
            <br />
            makes the process of building and utilizing the service more
            <br />
            streamlined and convenient than ever before
          </span>
        </div>
        <button
          className="flex h-12 items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3"
          onClick={() => {}}
          title="Swap Now"
          type="button"
        >
          <span className="text-base font-bold not-italic leading-[120%] text-primary-foreground">
            Swap now
          </span>
          <Image src="/swap-icon.svg" alt="Swap Icon" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};
