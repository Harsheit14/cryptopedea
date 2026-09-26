import Link from "next/link";

function NetworkIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="7" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="27" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="28" cy="27" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16.2 9.8 9.8 24.2M19.8 9.8l6.4 14.4M11.3 27h13.4" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true">
      <path d="M12 8v20l16-10z" fill="currentColor" />
    </svg>
  );
}

function ArticlesIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true">
      <rect x="7" y="6" width="22" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 12h12M12 18h12M12 24h8" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export default function BottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      <Link href="/learn" aria-label="Explore">
        <NetworkIcon />
      </Link>
      <Link href="/learn" aria-label="Learn">
        <PlayIcon />
      </Link>
      <Link href="/blogs" aria-label="Blogs">
        <ArticlesIcon />
      </Link>
    </nav>
  );
}
