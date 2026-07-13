import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { buildMetadata } from "@/lib/seo";

// Chinese site for international/foreign visitors, served at /zh/.
export const metadata: Metadata = buildMetadata("zh");

export default function Page() {
  return (
    <LanguageProvider lang="zh">
      <HomePage />
    </LanguageProvider>
  );
}
