import "./index.css";
import { skills } from "../../data/skills/index";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <div className="row d-flex justify-content-center">
        {/* About Section */}
        <div className="about col-md-6 col-12 d-flex flex-column">
          <h1 className="section-title" style={{ color: "#4db6ac" }}>
            Get to know me!
          </h1>
          <p>
            My full name is Euclides Manuel João. I am a Software engineer,
            Video Director, Artist, Thinker, and Chess Player. I have a great
            passion for software development, and art. This passion has driven
            me to build the front-end of websites, web applications, mobile
            applications, and backend APIs, contributing to the success of the
            overall product. Check out some of my works in the{" "}
            <NavLink to="/projects">projects</NavLink> section. <br />
            <br />
            I'm open to job opportunities where I can contribute, learn, and
            grow. If you have an opportunity that matches my skills and
            experience, feel free to{" "}
            <NavLink to="/contacts">contact me.</NavLink>
          </p>
        </div>

        {/* Skills Section */}
        <div className="skills col-md-6 col-12 d-flex flex-column">
          <h1 className="section-title" style={{ color: "#4db6ac" }}>
            My skills
          </h1>
          <ul>
            {skills.map((skill) => (
              <li className="tip" key={skill.id}>
                {skill.icon}
                <span className="tiptext">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
