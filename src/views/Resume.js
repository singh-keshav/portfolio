import styles from "./resume.module.css";
import profilePic from "./profilepic.jpeg";

const SkillBar = (props) => {
  const name = props.name;
  const percentage = props.percentage;
  return (
    <div
      style={{
        height: "40px",
        border: "1px solid #f3f3f3;",
        display: "flex",
        position: "relative",
        margin: "20px",
        border: "1px solid #b7b3b34a",
      }}
    >
      <div
        style={{
          width: percentage,
          height: "99%",
          background: "grey",
          //   opacity:"0.8"
        }}
      >
        <p style={{ color: "black", paddingLeft: "4px", paddingTop: "5px" }}>
          {name}
        </p>
      </div>
      <p
        style={{
          position: "absolute",
          right: "3px",
          top: "8px",
          margin: "0px",
        }}
      >
        {percentage}
      </p>
    </div>
  );
};

const Resume = () => {
  return (
    <div className={styles.containerBox_resume} >
      <div className={styles.leftDiv}>
        <img
          src={profilePic}
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.rightDiv}>
        <h2>EDUCATION</h2>
        <h3>MOTILAL NATIONAL INSTITUTE OF TECHNOLOGY</h3>
        {/* <p>2016-2020</p> */}
        <ul style={{ paddingLeft: "0", borderBottom: "1px solid #f3f3f3" }}>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.listLeft}>
              Bachelor of Technology Biotechnology
            </div>
            <div className={styles.listRight}>8.2 CPI</div>
          </li>
        </ul>
        <h3>JAWAHAR NAVODAYA VIDHYALAYA JAHALAWAR</h3>
        <ul style={{ paddingLeft: "0", borderBottom: "1px solid #f3f3f3" }}>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.listLeft}>
              Higher secondary Examination- Class X
            </div>
            <div className={styles.listRight}>9.6 CGPA</div>
          </li>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.listLeft}>
              Senior secondary Examination- Class XII
            </div>
            <div className={styles.listRight}>85.2%</div>
          </li>
        </ul>
        <h2>SKILLS</h2>
        <p>
          Currently I have done major projects on Web Development technologies.
        </p>
        <SkillBar name="HTML" percentage="80%" />
        <SkillBar name="CSS" percentage="70%" />
        <SkillBar name="JAVASCRIPT" percentage="70%" />
        <SkillBar name="REACT" percentage="70%" />
        <SkillBar name="NODE JS" percentage="60%" />
        <SkillBar name="MONGO DB" percentage="70%" />
        <SkillBar name="MY SQL" percentage="50%" />
        <SkillBar name="JQUERY" percentage="60%" />
        <SkillBar name="ANGULAR" percentage="30%" />
        <SkillBar name="PHOTOSHOP" percentage="70%" />
        <SkillBar name="TEAM LEADERSHIP" percentage="80%" />
      </div>
    </div>
  );
};

export default Resume;
