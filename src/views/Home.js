import styles from "./home.module.css";
import background from "./homeBackground.jpg";

const Home = () => {
  return (
    // <div style={{  }}>
    //   <div className={styles.firstName}>Keshav</div>
    //   <div className={styles.lastName}> Singh</div>
    //   <div className={styles.position}>FullStack Developer</div>
    //   {/* <div className={styles.position}> FullStack Developer</div> */}
    //   <div className={styles.socialMedia}>
    //     <span class="material-icons">facebook</span>

    //   </div>
    // </div>

    <div className={styles.containerBox_Home}>
      <div className={styles.leftDiv}>
        <h1 className={styles.firstName}>Keshav</h1>
      </div>
      <h1 className={styles.position}>FullStack Developer</h1>
      <div className={styles.rightDiv}>
        <h1 className={styles.lastName}>Singh</h1>
        <h1 className={styles.position}>FullStack Developer</h1>

        <div className={styles.socialMedia}></div>
      </div>
    </div>
  );
};

export default Home;
