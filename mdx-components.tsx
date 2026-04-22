import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { cn } from "@/lib/utils";
import { Tips, Kendala } from "@/components/callout";
import { Callout } from "fumadocs-ui/components/callout";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,

    Tips,
    Kendala,
    ImageZoom,
    Callout,

    img: (props) => {
      const isInline =
        props.className?.includes("inline") ||
        (props as any).style?.display === "inline" ||
        (props.width && Number(props.width) <= 64);

      if (isInline) {
        return (
          <img
            {...(props as any)}
            className={cn(
              "inline-block align-middle m-0 p-0 border-none shadow-none",
              props.className
            )}
          />
        );
      }

      return (
        <ImageZoom
          {...(props as any)}
          className={cn(
            "rounded-2xl border bg-muted/50 shadow-sm my-8 mx-auto",
            props.className
          )}
        />
      );
    },

    ...components,
  };
}