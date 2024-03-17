import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>Welcome to my portfolio</span>
        <div className="social">
          <a href="#">
            <img src="/linkedin_dark.png" alt="" />
          </a>

          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>

          <a href="#">
            <img src="/github_dark.png" alt="" />
          </a>

          <a href="#">
            <img src="/email_dark.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
