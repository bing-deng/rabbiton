import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { buildMetadata } from "@/lib/seo";

// English site for international/foreign visitors, served at /en/.
export const metadata: Metadata = buildMetadata("en");

export default function Page() {
  return (
    <LanguageProvider lang="en">
      <HomePage />
    </LanguageProvider>
  );
}
