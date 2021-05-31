import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerBox_navbar}>
      <ul className={styles.containerBox_navbar}>
        <li className={styles.homeLink}>
          <Link to="/" >
            <span className="material-icons" style={{ fontSize: "36px",color:"white",padding:"15px 0px", margin:"0px" }}>
              home
            </span>
            
          </Link>
          <div className={styles.linkName}>
            <div className={styles.linkNameTriangle}></div>
            <div>HOME</div>
          </div>
        </li>
        <li className={styles.homeLink}> 
          <Link to="/resume">
            <span className="material-icons" style={{ fontSize: "36px",color:"white",padding:"15px 0px", margin:"0px"}}>
              school
            </span>
          </Link>
          <div className={styles.linkName}>
            <div className={styles.linkNameTriangle}></div>
            <div>RESUME</div>
          </div>
        </li>
        <li className={styles.homeLink}> 
          <Link to="/about">
            <span className="material-icons" style={{ fontSize: "36px",color:"white",padding:"15px 0px", margin:"0px"}}>
              perm_identity
            </span>
          </Link>
          <div className={styles.linkName}>
            <div className={styles.linkNameTriangle}></div>
            <div>ABOUT</div>
          </div>
        </li>
        <li className={styles.homeLink}> 
          <Link to="/contact">
            <span class="material-icons" style={{ fontSize: "36px",color:"white",padding:"15px 0px", margin:"0px"}}>
              perm_phone_msg
            </span>
          </Link>
          <div className={styles.linkName}>
            <div className={styles.linkNameTriangle}></div>
            <div>CONTACT</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
