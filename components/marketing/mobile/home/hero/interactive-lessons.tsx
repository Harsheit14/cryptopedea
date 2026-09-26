import Image from "next/image";

const FIGMA_ASSETS =
  "https://www.figma.com/api/mcp/asset/287e1d5f-8c45-4898-a680-56df84efbc84";

export default function InteractiveLessons() {
  return (
    <article className="mobile-hero__interactive">
      <Image
        src={`${FIGMA_ASSETS}/f848a.png`}
        alt="Interactive crypto lessons"
        fill
        priority
        sizes="315px"
        className="mobile-hero__interactive-image"
      />
      <div className="mobile-hero__interactive-content">
        <h1>Interactive Lesions</h1>
        <Image
          src={`${FIGMA_ASSETS}/3b3c7.svg`}
          alt=""
          width={32}
          height={10}
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
