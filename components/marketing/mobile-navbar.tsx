import Image from "next/image";
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <div className="cp-mobile-navbar-shell md:hidden">
      <div className="cp-mobile-navbar">
        <Link href="/" aria-label="CryptoPedea Home"><Image src="/brand/cp-logo.svg" alt="CryptoPedea" width={44} height={30} priority /></Link>
      </div>
    </div>
  );
}
