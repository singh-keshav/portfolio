import styles from "./home.module.css";

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

    <div style={{ display: "flex" }}>
      <div className={styles.leftDiv}>
        <h1 className={styles.firstName}>Keshav</h1>
      </div>
      <div className={styles.rightDiv}>
        <h1 className={styles.lastName}>Singh</h1>
        <h1 className={styles.position}>FullStack Developer</h1>
      </div>
    </div>
  );
};

export default Home;
