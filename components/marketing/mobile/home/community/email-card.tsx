export default function EmailCard() {
  return (
    <form className="mobile-community__email-card" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="mobile-community-email">Email</label>
      <input id="mobile-community-email" name="email" type="email" autoComplete="email" />
      <button type="submit">Submit</button>
    </form>
  );
}
