import "./nav.css";
import reactLogo from "../images/logo.svg";
function Nav() {
  return (
    <div className="navBar">
      <img src={reactLogo} alt="reactlogo" className="logo" />

      <ul className="navList">
        <li>Home</li>
        <li>Pricing</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  );
}

export default Nav;
