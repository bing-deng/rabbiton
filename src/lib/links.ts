// External links sourced from the original rabbitonlinemarriage.com site.
// Keep these in one place so every CTA on the page stays in sync.

export const EXTERNAL_LINKS = {
  line: "https://lin.ee/iEGXG1Y",
  contactForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSfQTTO4CxEZHEovLkRj1snWCR6pDr9Q60tj2jqLtURZp3jqaA/viewform",
  instagram: "https://www.instagram.com/rabbit.kekkon",
  tiktokShin: "https://www.tiktok.com/@shin_tarot",
  tiktokYuka: "https://www.tiktok.com/@nizinoma_ma",
} as const;

export const TIKTOK_BY_MEMBER: Record<string, string> = {
  SHIN: EXTERNAL_LINKS.tiktokShin,
  YUKA: EXTERNAL_LINKS.tiktokYuka,
};
