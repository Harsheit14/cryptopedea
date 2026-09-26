const FIGMA_ASSETS =
  "https://www.figma.com/api/mcp/asset/c58ba1cc-997c-4494-826f-8f51d94721dc";

const ITEMS = [
  `${FIGMA_ASSETS}/c6d3d.svg`,
  `${FIGMA_ASSETS}/980b9.svg`,
  `${FIGMA_ASSETS}/ce408.svg`,
];

export default function BottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {ITEMS.map((src) => (
        <button type="button" key={src} aria-label="Navigate">
          <img src={src} alt="" />
        </button>
      ))}
    </nav>
  );
}
