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
            Computer Science student at Northeastern University, currently based
            in Boston, MA. Originally from Venezuela and completing my studies
            in Panama, my unique journey has been fueled by a passion for tech,
            problem-solving, and innovation.
            <br />
            <br />
            Since I was young, I became entranced with the impact technology had
            in the world, and became fascinated with its ability to bring forth
            social change and improve the lives of others.
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
            I'm dedicated to using my skills to create tangible, positive
            change. Whether it's through coding, leading or collaborating with
            others, I'm determined to push the boundaries of innovation and
            create sustainable, ethical solutions to the problems of today and
            tomorrow.
            <br />
            <br />
            When I'm not buried in code, you might find me exploring the vibrant
            tech scene in Boston, travelling abroad or brainstorming new ideas
            for my next project. I'm excited about the future and eager to see
            where my journey in tech will take me next.
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
