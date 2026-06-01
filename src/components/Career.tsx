import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer & Web Development</h4>
                <h5>Houze Of ABz</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              • Lead the design process for digital products, ensuring a seamless user journey and modern aesthetic.
              <br />
              • Collaborate with development teams to translate wireframes and prototypes into functional interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Degree</h4>
                <h5>Swami Keshvanand Institute of Technology (SKIT)</h5>
              </div>
              <h3>2024-28</h3>
            </div>
            <p>
              Bachelor of Technology (B.Tech) candidate, actively contributing to real-world projects, startups, and technical clubs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Club Coordinator</h4>
                <h5>Dynamic Club, SKIT</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              • Organize and manage club activities, fostering a collaborative environment for technical and creative growth.
              <br />
              • Represent the club in inter-college hackathons and tech competitions.
              <br />
              • Managing departmental design projects, ensuring all club assets align with the official SKIT brand guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
