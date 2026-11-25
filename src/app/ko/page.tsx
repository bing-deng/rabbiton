import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { buildMetadata } from "@/lib/seo";

// Korean site for international/foreign visitors, served at /ko/.
export const metadata: Metadata = buildMetadata("ko");

export default function Page() {
  return (
    <LanguageProvider lang="ko">
      <HomePage />
    </LanguageProvider>
  );
}
