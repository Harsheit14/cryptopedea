const FIGMA_ASSETS =
  "https://www.figma.com/api/mcp/asset/6debb5c9-c831-4895-86b7-f5d68e78526c";

const SOCIAL_ASSETS = [
  `${FIGMA_ASSETS}/4af5e.svg`,
  `${FIGMA_ASSETS}/24250.svg`,
  `${FIGMA_ASSETS}/58fac.svg`,
  `${FIGMA_ASSETS}/fb0af.svg`,
];

export default function SocialGrid() {
  return (
    <div className="mobile-social-grid" aria-label="Social links">
      {SOCIAL_ASSETS.map((src) => (
        <a href="#" key={src} aria-label="Social link">
          <img src={src} alt="" />
        </a>
      ))}
    </div>
  );
}
