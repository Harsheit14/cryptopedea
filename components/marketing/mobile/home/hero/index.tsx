import InteractiveLessons from "./interactive-lessons";
import JoinNowCard from "./join-now-card";
import CryptoLabel from "./crypto-label";

export default function MobileHero() {
  return (
    <section className="mobile-hero" aria-label="CryptoPedea">
      <div className="mobile-hero__top">
        <InteractiveLessons />
        <CryptoLabel />
      </div>
      <JoinNowCard />
    </section>
  );
}
