import "./About.css";
import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          Full Stack Java Developer
        </h2>
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-border">
              <img
                src={HeroImg}
                className="about-image"
                alt="payments illustration"
              />
            </div>
          </div>
          <div className="about-content">
            <p className="about-text">
              Hello! I'm Sham Johari, I love solving problems and creating useful applications that can help people. I'm starting my career as a Full Stack Java Developer and I'm really excited to learn more and grow in this field. Building things from scratch and seeing them work gives me a lot of joy and motivation.
            </p>
            <p className="about-text">
              I have knowledge of web development tools like HTML, CSS, JavaScript, and React for the front end, and Java with Spring Boot for the back end. I’m also comfortable working with databases like Oracle SQL. During my learning journey, I’ve built some interesting projects and improved my skills by practicing regularly.
            </p>
            <div className="about-quote-wrapper">
              <blockquote className="about-quote">
                <p className="about-text">
                  Now, I’m looking for a good opportunity where I can work with a team, learn from others, and also share what I know. I believe that being part of a positive and supportive team will help me grow both personally and professionally. I’m ready to give my best and make a meaningful contribution.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}