import Image from "next/image";
import { type FC } from "react";

import { LaunchAppButton } from "../ui";

export const Header: FC = () => {
  return (
    <>
      <header className="container flex h-auto items-start justify-between border-b bg-background px-12 py-8">
        <div className="flex flex-shrink-0 items-center justify-center gap-[13px]">
          <Image src="/logo.svg" alt="Logo" width={48} height={48} />
          <Image src="/logo-text.svg" alt="Logo" width={148} height={48} />
        </div>
        <LaunchAppButton />
      </header>
    </>
  );
};
