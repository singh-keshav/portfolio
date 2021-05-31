import styles from "./contact.module.css";
import contactImg from "./contactLeft.jpg";

const Contact = () => {
  return (
    <div>
      <div className={styles.containerBox_contact}>
        <div className={styles.leftDiv}>
          <img
            src={contactImg}
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.rightDiv}>
          <h2>CONTACT</h2>
          <ul style={{ paddingLeft: "0", borderBottom: "1px solid #f3f3f3" }}>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.listLeft}>Phone</div>
              <div className={styles.listRight}>96********</div>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.listLeft}>Email</div>
              <div className={styles.listRight}>keshavsingh1998@gmail.com</div>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.listLeft}>Address</div>
              <div className={styles.listRight}>Jhalawar, Rajasthan</div>
            </li>
        
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
