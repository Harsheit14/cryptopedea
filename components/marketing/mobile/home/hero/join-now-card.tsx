import Link from "next/link";

const FIGMA_ASSETS =
  "https://www.figma.com/api/mcp/asset/287e1d5f-8c45-4898-a680-56df84efbc84";

export default function JoinNowCard() {
  return (
    <Link href="/login" className="mobile-hero__join" aria-label="Join CryptoPedea now">
      <img src={`${FIGMA_ASSETS}/6c7c0.png`} alt="" className="mobile-hero__join-background" />
      <img src={`${FIGMA_ASSETS}/ffe47.png`} alt="" className="mobile-hero__join-overlay" />
      <span className="mobile-hero__join-label">Join Now</span>
      <img src={`${FIGMA_ASSETS}/36078.svg`} alt="" aria-hidden="true" className="mobile-hero__join-arrow" />
    </Link>
  );
}
