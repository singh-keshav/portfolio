
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.box} style={{display:"flex"}}>
      <div className={styles.leftDiv}></div>
      <div className={styles.rightDiv}>
        <h1>CONTACT</h1>
        <ul style={{ listStyle: "none" }}>
          <li>
            <div className={styles.listLeft}>phone</div>
            <div className={styles.listRight}>1234567890</div>
          </li>
          <li>
            <div className={styles.listLeft}>phone</div>
            <div className={styles.listRight}>1234567890</div>
          </li>
          <li>
            <div className={styles.listLeft}>phone</div>
            <div className={styles.listRight}>1234567890</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
