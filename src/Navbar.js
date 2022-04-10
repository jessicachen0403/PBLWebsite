import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Lincoln's Resale</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/about">About Us</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;