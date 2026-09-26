import Image from "next/image";
import Link from "next/link";

export default function JoinNowCard() {
  return (
    <Link href="/login" className="mobile-hero__join" aria-label="Join CryptoPedea now">
      <Image
        src="/hero/join-now-background.png"
        alt=""
        fill
        sizes="408px"
        className="mobile-hero__join-background"
      />
      <Image
        src="/hero/join-now-overlay.png"
        alt=""
        fill
        sizes="408px"
        className="mobile-hero__join-overlay"
      />
      <span className="mobile-hero__join-label">Join Now</span>
      <Image
        src="/hero/join-now-arrow.svg"
        alt=""
        width={30}
        height={30}
        aria-hidden="true"
      />
    </Link>
  );
}
