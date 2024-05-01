import { type FC } from "react";

import { HorizontalScrollingBanner, Spacer } from "@/components";

export const AwardedBy: FC = () => {
  return (
    <div className="flex flex-shrink-0 flex-col">
      <span className="text-center text-6xl font-bold not-italic leading-[120%] text-textLight">
        Awarded By
      </span>
      <Spacer />
      <HorizontalScrollingBanner
        scrollDirection="left"
        images={[
          {
            src: "/organizations/conflux-logo.svg",
            alt: "Conflux",
            width: 300,
            height: 48,
            href: "https://confluxnetwork.org/",
          },
          {
            src: "/organizations/uhack-logo.svg",
            alt: "Uhack",
            width: 300,
            height: 48,
            href: "https://uhack.xyz/",
          },
          {
            src: "/organizations/conflux-logo.svg",
            alt: "Conflux",
            width: 300,
            height: 48,
            href: "https://confluxnetwork.org/",
          },
          {
            src: "/organizations/uhack-logo.svg",
            alt: "Uhack",
            width: 300,
            height: 48,
            href: "https://uhack.xyz/",
          },
          {
            src: "/organizations/conflux-logo.svg",
            alt: "Conflux",
            width: 300,
            height: 48,
            href: "https://confluxnetwork.org/",
          },
          {
            src: "/organizations/uhack-logo.svg",
            alt: "Uhack",
            width: 300,
            height: 48,
            href: "https://uhack.xyz/",
          },
          {
            src: "/organizations/conflux-logo.svg",
            alt: "Conflux",
            width: 300,
            height: 48,
            href: "https://confluxnetwork.org/",
          },
          {
            src: "/organizations/uhack-logo.svg",
            alt: "Uhack",
            width: 300,
            height: 48,
            href: "https://uhack.xyz/",
          },
        ]}
      />
      <Spacer className="h-5" />
      <HorizontalScrollingBanner
        scrollDirection="right"
        images={[
          {
            src: "/organizations/uhack-logo.svg",
            alt: "Uhack",
            width: 300,
            height: 48,
            href: "https://uhack.xyz/",
          },
          {
            src: "/organizations/conflux-logo.svg",
            alt: "Conflux",
            width: 300,
            height: 48,
            href: "https://confluxnetwork.org/",
          },
          {
            src: "/organizations/uhack-logo.svg",
            alt: "Uhack",
            width: 300,
            height: 48,
            href: "https://uhack.xyz/",
          },
          {
            src: "/organizations/conflux-logo.svg",
            alt: "Conflux",
            width: 300,
            height: 48,
            href: "https://confluxnetwork.org/",
          },
          {
            src: "/organizations/uhack-logo.svg",
            alt: "Uhack",
            width: 300,
            height: 48,
            href: "https://uhack.xyz/",
          },
          {
            src: "/organizations/conflux-logo.svg",
            alt: "Conflux",
            width: 300,
            height: 48,
            href: "https://confluxnetwork.org/",
          },
          {
            src: "/organizations/uhack-logo.svg",
            alt: "Uhack",
            width: 300,
            height: 48,
            href: "https://uhack.xyz/",
          },
          {
            src: "/organizations/conflux-logo.svg",
            alt: "Conflux",
            width: 300,
            height: 48,
            href: "https://confluxnetwork.org/",
          },
        ]}
      />
    </div>
  );
};
