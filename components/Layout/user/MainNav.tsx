import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Image
          src="/images/abstract-shape.png"
          width={24}
          height={204}
          alt="Picture of the author"
        />
        <span className="hidden font-bold sm:inline-block">Shoppers</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
    </div>
  );
}
