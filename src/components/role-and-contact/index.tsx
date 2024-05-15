import Image from "next/image";
import { type FC } from "react";

import { SocialButton } from "@/components";
import { Socials } from "@/types";

export const RoleAndContact: FC = () => {
  return (
    <div className="container flex flex-col items-center">
      <div className="flex flex-col items-center gap-16">
        <span className="text-[32px] font-normal not-italic leading-[120%]">
          <span className="text-[32px] font-normal not-italic leading-[120%] text-primary">
            Piggy DEX
          </span>{" "}
          plays a vital role in powering the <br /> revolution of Defi on
          Conflux
        </span>
        <Image
          src="/role-and-contact-piggy.svg"
          alt=""
          width={300}
          height={400}
        />
        <div className="flex flex-col items-center gap-9">
          <span className="text-center text-[40px] font-bold not-italic leading-[120%]">
            Let’s build together!
          </span>
          <div className="flex flex-col items-center justify-center gap-6">
            <span className="text-center text-2xl font-normal not-italic leading-[120%] text-white/80">
              Join Our Community
            </span>
            <div className="flex items-start gap-2">
              <SocialButton
                SocialName={Socials.Telegram}
                iconSize={32}
                link={process.env.NEXT_PUBLIC_TELEGRAM_URL}
              />
              <SocialButton
                SocialName={Socials.X}
                iconSize={32}
                link={process.env.NEXT_PUBLIC_TWITTER_URL}
              />
              <SocialButton
                SocialName={Socials.Discord}
                iconSize={32}
                link={process.env.NEXT_PUBLIC_DISCORD_URL}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
