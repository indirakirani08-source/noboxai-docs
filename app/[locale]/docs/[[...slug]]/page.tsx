import { source } from "@/lib/source";
import { DocsPage, DocsBody, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { icons } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;
  const page = source.getPage(slug, locale);
  if (!page) notFound();

  const MDX = page.data.body;
  const iconName = page.data.icon as keyof typeof icons | undefined;
  const LucideIcon = iconName ? icons[iconName] : null;

  return (
    <DocsPage
      toc={page.data.toc}
      full={false}
      tableOfContent={{
        enabled: true,
        component:
          page.data.toc.length > 0 ? undefined : (
            <div className="hidden lg:block w-[293px] shrink-0" />
          ),
      }}
    >
      <DocsBody>
        {LucideIcon && <LucideIcon size={32} />}
        <DocsTitle>{page.data.title}</DocsTitle>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}