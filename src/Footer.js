import {Link} from "react-router-dom";

const Footer = () => {
    return (
      <div className="footer">
          <div className="footer-about">
              <Link to="/about">About Us</Link>
          </div>
          <p>Website Designed by Jessica Chen</p>
      </div>
    );
}

export default Footer;