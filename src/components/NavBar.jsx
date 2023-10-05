import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>DormsDeal</div>
      <div className="navlinks">
        <Link to={'/home'}>Home</Link>
        <Link to={'/Agent'}>Become an Agent</Link>
        <Link to={'/about'}>About Us</Link>
        <Link to={'/contact'}>Contact Us</Link>
      </div>
      <div className="btns">
        <Link to={'/signup'} className="primary">Sign Up</Link>
        <Link to={'/login'} className="secondary">Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;
