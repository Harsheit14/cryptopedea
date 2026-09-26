import EmailCard from "./email-card";
import SocialGrid from "./social-grid";

export default function Community() {
  return (
    <section className="mobile-community" aria-labelledby="mobile-community-title">
      <div className="mobile-community__inner">
        <header className="mobile-community__heading">
          <h2 id="mobile-community-title">Join our<br />Community</h2>
          <p>Subscribe for latest updates</p>
        </header>
        <EmailCard />
        <SocialGrid />
      </div>
      <div className="mobile-email-card">
        <h3>Email Us</h3>
        <p>Have a question or need assistance? We&apos;d be happy to help.</p>
        <p>Email: Contact@cryptopedea.com</p>
      </div>
    </section>
  );
}
