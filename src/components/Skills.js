import html from "../assets/img/html.svg";
import colaborate from "../assets/img/colaborating.svg";
import css from "../assets/img/css.svg";
import github from "../assets/img/GitHub-Mark.svg";
import mySql from "../assets/img/mysql.svg";
import node from "../assets/img/node.png";
import javascript from "../assets/img/javascript.png";
import react from "../assets/img/react.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Already listed on my Resume but here are some visual representations </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <img src={react} alt="Imge" />
                                <h5>Hyper text Markup Language</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Imge" />
                                <h5>Hyper text Markup Language</h5>
                            </div>
                            <div className="">
                                <img src={html} alt="Imge" />
                                <h5>Hyper text Markup Language</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Imge" />
                                <h5>Cascading Style Sheets (CSS)</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Imge" />
                                <h5>Hyper text Markup Language</h5>
                            </div>
                            <div className="item">
                                <img src={mySql} alt="Imge" />
                                <h5>Hyper text Markup Language</h5>
                            </div>
                            <div className="item">
                            <img src={github} alt="Imge" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={colaborate} alt="Imge" />
                                <h5>Collaborative Problem Solving</h5>
                            </div>
                   
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}