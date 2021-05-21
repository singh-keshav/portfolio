import styles from "./about.module.css";
import codeOnce from "./thinkTwice.jpg";

const About = () => {
  return (
    <div className={styles.box} style={{ display: "flex" }}>
      <div className={styles.leftDiv}>
        <img
          src={codeOnce}
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.rightDiv}>
        <h2>ABOUT ME</h2>
        <p>
          I am a Full Stack Developer. I prefer Backend Development. I always
          take care of following thing while writing code:
          <ul>
            <li>Human readable with proper code documentation</li>
            <li>Has no code redundancies</li>
            <li>Lesser time complexity</li>
            <li>Modular code</li>
            <li>Naming conventions</li>
          </ul>
        </p>
        <ul style={{ paddingLeft: "0", borderBottom: "1px solid #f3f3f3" }}>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.listLeft}>Age</div>
            <div className={styles.listRight}>23</div>
          </li>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.listLeft}>Language</div>
            <div className={styles.listRight}>Hindi, English</div>
          </li>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.listLeft}>HObbies</div>
            <div className={styles.listRight}>Coidng, Music</div>
          </li>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.listLeft}>website</div>
            <div className={styles.listRight}>www.keshavwesite.com</div>
          </li>
        </ul>
        <p>
          I am a fast & self learner. New technologies are always my attraction
          point. I believe in becoming <b>Jack of all, King of one</b>
        </p>

        <div style={{ display: "flex", margin: "55px 0px" }}>
          <button className={styles.leftButton}>Hire Me</button>
          <button className={styles.rightButton}>Download Resume</button>
        </div>

        <h2>WHAT CAN I DO</h2>

        <div style={{ display: "flex" }}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <span class="material-icons" style={{fontSize:"60px"}}>brush</span>
            </div>
            <h3>Web Development</h3>
            <p>
              I am Front-End as well as Back-End developer. I prefer developing
              websites in JavaScript based frameworks like ReactJs, NodeJs.
            </p>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <span class="material-icons" style={{fontSize:"60px"}}>public</span>
            </div>
            <h3>RESTful API development</h3>
            <p>
              I have developed RESTful APIs using NodeJs. Used SailsJs framework
              for creating it, used token based authentication like JWT.
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <span class="material-icons" style={{fontSize:"60px"}}>cloud</span>
            </div>
            <h3>AWS</h3>
            <p>Used some of the services of AWS like EC2, S3, Route53, RDS.</p>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <span class="material-icons" style={{fontSize:"60px"}}>android</span>
            </div>
            <h3>Application</h3>
            <p>I have done some basic work in Android app development also.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
