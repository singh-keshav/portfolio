import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navlinksContainer}>
        <li>
          <Link to="/">
            <span className="material-icons" style={{ fontSize: "36px",color:"white",padding:"15px 0px" }}>
              home
            </span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className="material-icons" style={{ fontSize: "36px",color:"white",padding:"15px 0px"}}>
              perm_identity
            </span>
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <span className="material-icons" style={{ fontSize: "36px",color:"white",padding:"15px 0px"}}>
              school
            </span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span class="material-icons" style={{ fontSize: "36px",color:"white",padding:"15px 0px"}}>
              perm_phone_msg
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
