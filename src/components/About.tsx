import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Creative and detail-oriented UI/UX Designer and Front-End Developer with a focus on building intuitive, user-centric digital experiences. Currently pursuing a B.Tech degree while actively contributing to real-world projects and startups. Proven track record in leading design initiatives for large-scale campus events and technical clubs.
        </p>
        <div className="about-info-grid">
          <div className="about-info-col">
            <h4>Core Skills</h4>
            <ul>
              <li>Front End Development</li>
              <li>UI/UX Designing</li>
              <li>Wordpress Website Development</li>
              <li>Graphic Design</li>
              <li>Branding & strategy</li>
            </ul>
          </div>
          <div className="about-info-col">
            <h4>Languages</h4>
            <ul>
              <li>English (Professional)</li>
              <li>Hindi (Native)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
