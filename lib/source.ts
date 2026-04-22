import { docs } from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { icons } from "lucide-react";
import { createElement } from "react";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
  icon(name) {
    if (name && name in icons) return createElement(icons[name as keyof typeof icons]);
  },
  i18n: {
    languages: ["id", "en"],
    defaultLanguage: "id",
    parser: "dir",
  },
});