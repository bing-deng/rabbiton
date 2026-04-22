import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="bg-paper">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
          <a
            href="/"
            className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-rose-deep transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            トップへ戻る / Back
          </a>
          <article className="mt-8 bg-white rounded-3xl border border-stone-100 p-8 sm:p-12 shadow-sm">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
