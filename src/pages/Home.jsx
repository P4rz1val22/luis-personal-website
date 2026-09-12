import Tv from "../components/TV/TV";
import Printer from "../components/Printer/Printer.jsx";
import Intercom from "../components/Intercom/Intercom.jsx";
import "./Pages.css";

// The Home page .
const Home = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <Tv />
      <div className="hoz-container heading bottom">
        <div className="sideLines Blue" />
        <div className="hiddenElement title">ABOUT ME</div>
        <div className="sideLines Reverse Blue" />
      </div>
      <div className="img-section">
        <div className="hoz-container">
          <div className={`text-box " ${isMobile ? "big" : ""}`}>
            <h2>Hello there!</h2> My name is <b>Luis Enrique Sarmiento</b>, a
            senior Computer Science student at Northeastern University,
            concentrating in Artificial Intelligence and minoring in Game
            Design, currently based in Boston, MA. Originally from Venezuela and
            completing my studies in Panama, my unique journey has been fueled
            by a passion for tech, problem-solving, and innovation.
            <br />
            <br />
            I’m always looking for opportunities to collaborate with others
            and learn about the growing world of tech. As a member of the
            Northeastern Student Government, I’m committed to helping voice
            the concerns of my fellow peers and engineer solutions wherever I
            can.
          </div>
          <img
            className={` ${!isMobile ? "box" : "hide"}`}
            src="./assets/Images/IMG_1543.jpeg"
            loading="lazy"
          />
        </div>
        <div className="hoz-container">
          <img
            className={` ${!isMobile ? "box" : "hide"}`}
            src="./assets/Images/IMG_9476.jpeg"
            loading="lazy"
          />
          <div className={`text-box " ${isMobile ? "big" : ""}`}>
            Throughout my academic journey so far I’ve worked with a lot of
            languages and frameworks, and used each one to sharpen what I
            actually want to do within software development. That has given me
            experience at both ends of the stack — Rails and Go on the back
            end, React and TypeScript on the front — along with a genuine
            interest in machine learning and its applications in everyday life.
            <br />
            <br />
            I want to keep growing through professional experience and projects,
            and to stay involved around campus while I do it. I love making
            connections and helping people out wherever I can, so feel free to
            reach out.
          </div>
        </div>
      </div>
      <div className="hoz-container heading">
        <div className="sideLines Left Orange" />
        <div className="title"> DOCUMENTS</div>
        <div className="sideLines Reverse Orange" />
      </div>
      <Printer />

      <div className="hoz-container heading">
        <div className="sideLines Orange" />
        <div className="title"> CONTACT ME</div>
        <div className="sideLines Reverse Orange" />
      </div>
      <Intercom />
      <br />
    </div>
  );
};

export default Home;
