import chefClaude from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header-icon" src={chefClaude} alt="Chef Claude Icon" />
      <h1 className="header-title">Chef Claude</h1>
    </header>
  );
}
