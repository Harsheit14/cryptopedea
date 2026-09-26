const FIGMA_LOGO =
  "https://www.figma.com/api/mcp/asset/287e1d5f-8c45-4898-a680-56df84efbc84/077fd.svg";

export default function MobileNavbar() {
  return (
    <header className="mobile-navbar">
      <div className="mobile-navbar__bar">
        <img src={FIGMA_LOGO} alt="CryptoPedea" />
      </div>
    </header>
  );
}
