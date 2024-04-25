import Image from "next/image";
import { type FC } from "react";

export const KeyFeatures: FC = () => {
  return (
    <div className="container flex flex-shrink-0 flex-col gap-24 px-16">
      <span className="text-center text-6xl font-bold not-italic leading-[120%]">
        Key Features
      </span>
      <Image
        className="absolute z-[-1] mt-28 flex self-center"
        src="/key-features-piggy.svg"
        alt="Key Features"
        width={754}
        height={754}
      />
      <div className="flex w-full flex-shrink-0 flex-col gap-2">
        <div className="flex h-[200px] w-full shrink-0 flex-col items-center justify-center">
          <div className="flex flex-shrink-0 flex-col items-start gap-5 self-start rounded-2xl border-t border-[#ffa6c680] bg-gradient-to-l from-[#2120204d] to-[#ffbdd747] to-[105%] px-16 py-10 shadow-inner backdrop-blur">
            <div className=" flex flex-row items-center gap-5">
              <Image
                src="/farming-icon.svg"
                alt="Farming Icon"
                width={48}
                height={48}
              />
              <span className="text-[32px] font-bold not-italic leading-[120%] text-textLight">
                Farming as a Service
              </span>
            </div>
            <span className="text-base font-normal not-italic leading-[120%] text-white/85">
              Launch your token&apos;s liquidity mining program conveniently
              <br />
              and efficiently with the permissionless FaaS feature.
            </span>
          </div>
        </div>
        <div className="flex h-[200px] w-full shrink-0 flex-col items-center justify-center">
          <div className="flex flex-shrink-0 flex-col items-start gap-5 self-end rounded-2xl border-t border-[#ffa6c680] bg-gradient-to-l from-[#2120204d] from-[-5%] to-[#ffbdd747] to-[105%] px-16 py-10 shadow-inner backdrop-blur-xl">
            <div className=" flex flex-row items-center gap-5">
              <Image
                src="/layout-icon.svg"
                alt="Farming Icon"
                width={48}
                height={48}
              />
              <span className="text-[32px] font-bold not-italic leading-[120%] text-textLight">
                One-stop Project Launch
              </span>
            </div>
            <span className="text-base font-normal not-italic leading-[120%] text-white/85">
              All the features a team need to launch a project on Conflux: fund
              <br />
              raising, initiate and bootstrap liquidity, market maker service,
              <br />
              trading competition.
            </span>
          </div>
        </div>
        <div className="flex h-[200px] w-full shrink-0 flex-col items-center justify-center">
          <div className="flex flex-shrink-0 flex-col items-start gap-5 self-start rounded-2xl border-t border-[#ffa6c680] bg-gradient-to-r from-[#2120204d] from-[-5%] to-[#ffbdd74d] to-[105%] px-16 py-10 shadow-inner backdrop-blur">
            <div className=" flex flex-row items-center gap-5">
              <Image
                src="/graph-icon.svg"
                alt="Farming Icon"
                width={48}
                height={48}
              />
              <span className="text-[32px] font-bold not-italic leading-[120%] text-textLight">
                One to all Trading
              </span>
            </div>
            <span className="text-base font-normal not-italic leading-[120%] text-white/85">
              Easily setup investment portfolio and sell multiple tokens with a
              <br />
              single click.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
