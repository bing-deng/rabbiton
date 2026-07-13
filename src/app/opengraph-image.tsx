// Shared brand OpenGraph image. The same card is used per locale segment so /,
// /en/ and /zh/ all get a social preview (see src/components/brand-og.tsx).
import BrandOG from "@/components/brand-og";

export const dynamic = "force-static";
export const alt = "結婚相談所 RABBIT";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default BrandOG;
