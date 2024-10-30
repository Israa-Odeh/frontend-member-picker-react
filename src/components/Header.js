import "../css/header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Add members to Front-end development team
      </h1>
      <button
        className="header__close-btn header__close-btn--hover"
        aria-label="Close"
      >
        <span className="header__close-btn-icon">X</span>
        <span className="header__close-btn-text">ESC</span>
      </button>
    </header>
  );
}