// components/language-switch.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] === "en" ? "en" : "id";
  const nextLocale = currentLocale === "id" ? "en" : "id";

  function toggle() {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${nextLocale.toUpperCase()}`}
      className="flex items-center gap-1.5 h-9 px-2 pr-3 rounded-full border border-border/50 bg-muted/30 hover:bg-muted/60 transition-colors"
    >
      <div className="relative h-7 w-7 overflow-hidden rounded-full shrink-0">
        <Image
          src={`/flags/${currentLocale}.png`}
          alt={currentLocale.toUpperCase()}
          fill
          className="object-cover"
        />
      </div>
      <span className="text-sm font-medium">
        {currentLocale.toUpperCase()}
      </span>
    </button>
  );
}