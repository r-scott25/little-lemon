import "./FooterNavigationStyles.css";

const FooterNavigation = () => {
  return (
    <nav className="footer-nav">
      <ul>
        <li>
          <a href="/" className="footer-nav-item">Home</a>
        </li>
        <li>
          <a href="/about" className="footer-nav-item">About</a>
        </li>
        <li>
          <a href="/menu" className="footer-nav-item">Menu</a>
        </li>
        <li>
          <a href="/reservations" className="footer-nav-item">Reservations</a>
        </li>
        <li>
          <a href="/order-online" className="footer-nav-item">Order Online</a>
        </li>
        <li>
          <a href="/login" className="footer-nav-item">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;