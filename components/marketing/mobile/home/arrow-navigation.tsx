const FIGMA_ASSETS =
  "https://www.figma.com/api/mcp/asset/13493bb6-d024-49d9-95a1-b5dc020e9217";

const ARROWS = [
  { src: `${FIGMA_ASSETS}/23e07.svg`, className: "rotate-180 scale-y-[-1]" },
  { src: `${FIGMA_ASSETS}/8ce66.svg`, className: "rotate-90" },
  { src: `${FIGMA_ASSETS}/8aa22.svg`, className: "" },
];

export default function ArrowNavigation() {
  return (
    <nav className="mobile-arrow-navigation" aria-label="Hero navigation">
      {ARROWS.map(({ src, className }, index) => (
        <button
          type="button"
          key={src}
          aria-label={index === 0 ? "Previous lesson" : index === 2 ? "Next lesson" : "Explore"}
        >
          <span className={`mobile-arrow-navigation__icon ${className}`}>
            <img src={src} alt="" />
          </span>
        </button>
      ))}
    </nav>
  );
}
