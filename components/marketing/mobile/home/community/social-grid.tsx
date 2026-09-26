const socialItems = [
  { label: "X", className: "mobile-social--dark" },
  { label: "X", className: "mobile-social--blue" },
  { label: "X", className: "mobile-social--coral" },
  { label: "X", className: "mobile-social--purple" },
];

export default function SocialGrid() {
  return (
    <div className="mobile-social-grid" aria-label="Social links">
      {socialItems.map((item) => (
        <a href="#" className={`mobile-social ${item.className}`} aria-label={item.label} key={item.className}>
          𝕏
        </a>
      ))}
    </div>
  );
}
