import './Header.css';

function Header(props) {
  return (
    <header className="app-header">
      <h1 className="store-name">ComponentCorner</h1>
      <nav className="nav-menu">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Shop</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
        <div className="cart-container"> 
          <span className="cart-icon">🛒</span>
          <span>{props.cartCount}</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
