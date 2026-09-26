function ArrowIcon({ direction }: { direction: "left" | "down" | "right" }) {
  return (
    <span className={`mobile-arrow-icon mobile-arrow-icon--${direction}`} aria-hidden="true" />
  );
}

export default function ArrowNavigation() {
  return (
    <nav className="mobile-arrow-navigation" aria-label="Hero navigation">
      <button type="button" aria-label="Previous lesson">
        <ArrowIcon direction="left" />
      </button>
      <button type="button" aria-label="Explore">
        <ArrowIcon direction="down" />
      </button>
      <button type="button" aria-label="Next lesson">
        <ArrowIcon direction="right" />
      </button>
    </nav>
  );
}
