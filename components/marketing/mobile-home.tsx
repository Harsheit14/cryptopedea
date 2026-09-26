import Image from "next/image";
import Link from "next/link";

const socialItems = [
  { label: "X", icon: "𝕏" },
  { label: "Discord", icon: "◉" },
  { label: "Instagram", icon: "◎" },
  { label: "Telegram", icon: "➤" },
];

export default function MobileHome() {
  return (
    <main className="cp-mobile-home md:hidden">
      <div className="cp-mobile-topbar" aria-hidden="true">
        <Image src="/brand/cp-logo.svg" alt="" width={44} height={30} priority />
      </div>
      <section className="cp-mobile-hero" aria-label="CryptoPedea">
        <div className="cp-mobile-hero-card">
          <Image src="/what-we-offer/main-illustration.png" alt="" fill sizes="(max-width: 767px) calc(100vw - 125px), 315px" className="object-cover" priority />
          <div className="cp-mobile-hero-card-overlay" />
          <div className="cp-mobile-hero-caption"><span>Interactive Lesions</span><span className="cp-mobile-dash" aria-hidden="true" /></div>
        </div>
        <div className="cp-mobile-hero-label">Cryptopedea</div>
      </section>
      <div className="cp-mobile-join-card"><span>Join Now</span><span className="cp-mobile-join-arrow" aria-hidden="true">↗</span></div>
      <nav className="cp-mobile-circle-nav" aria-label="Hero navigation">
        <button type="button" aria-label="Previous">←</button>
        <button type="button" aria-label="Next">→</button>
        <button type="button" aria-label="Open">↗</button>
      </nav>
      <nav className="cp-mobile-bottom-nav" aria-label="Mobile navigation">
        <Link href="/" aria-label="Home">⌂</Link><Link href="/learn" aria-label="Learn">◒</Link><Link href="/blogs" aria-label="Blogs">▤</Link>
      </nav>
      <section className="cp-mobile-community" aria-labelledby="mobile-community-title">
        <div className="cp-mobile-section-heading"><h2 id="mobile-community-title">JOIN OUR<br />COMMUNITY</h2><p>Subscribe for latest updates</p></div>
        <form className="cp-mobile-subscribe" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="mobile-email">Email</label><input id="mobile-email" name="email" type="email" autoComplete="email" /><button type="submit">Submit</button>
        </form>
        <div className="cp-mobile-social-grid">{socialItems.map((item) => <a href="#" key={item.label} aria-label={item.label}>{item.icon}</a>)}</div>
      </section>
      <section className="cp-mobile-email-us" aria-labelledby="mobile-email-us-title">
        <div><h2 id="mobile-email-us-title">Email Us</h2><p>Have a question or need assistance? We&apos;d be happy to help.</p><p>Email: Contact@cryptopedea.com</p></div>
      </section>
    </main>
  );
}
