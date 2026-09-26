import Image from "next/image";

export default function InteractiveLessons() {
  return (
    <article className="mobile-hero__interactive">
      <Image
        src="/hero/interactive-lessons.png"
        alt="Interactive crypto lessons"
        fill
        priority
        sizes="315px"
        className="mobile-hero__interactive-image"
      />
      <div className="mobile-hero__interactive-content">
        <h1>Interactive Lesions</h1>
        <Image
          src="/hero/interactive-lessons-dots.svg"
          alt=""
          width={32}
          height={10}
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
