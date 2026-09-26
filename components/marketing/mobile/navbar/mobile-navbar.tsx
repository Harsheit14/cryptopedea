import Image from "next/image";

export default function MobileNavbar() {
  return (
    <header className="mobile-navbar">
      <div className="mobile-navbar__bar">
        <Image
          src="/brand/cp-logo.svg"
          alt="CryptoPedea"
          width={44}
          height={30}
          priority
        />
        <button type="button" className="mobile-navbar__menu" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
