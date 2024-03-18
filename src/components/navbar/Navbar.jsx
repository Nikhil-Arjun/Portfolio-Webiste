import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>Welcome to my portfolio</span>
        <div className="social">
          <a href="https://www.linkedin.com/in/nikhil-arjun/">
            <img src="/linkedin_dark.png" alt="" />
          </a>

          <a href="https://www.instagram.com/">
            <img src="/instagram.png" alt="" />
          </a>

          <a href="https://github.com/Nikhil-Arjun">
            <img src="/github_dark.png" alt="" />
          </a>

          <a href="#Contact">
            <img src="/email_dark.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
