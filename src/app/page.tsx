import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { buildMetadata } from "@/lib/seo";

// Japanese site, served at the root so「結婚相談所RABBIT」keeps ranking here.
export const metadata: Metadata = buildMetadata("ja");

export default function Page() {
  return (
    <LanguageProvider lang="ja">
      <HomePage />
    </LanguageProvider>
  );
}
