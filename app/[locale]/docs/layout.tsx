import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { nav, ...base } = baseOptions();
  return (
    <DocsLayout tree={source.getPageTree(locale)} {...base} nav={{ ...nav }} i18n={false}>
      {children}
    </DocsLayout>
  );
}