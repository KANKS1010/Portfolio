import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import soon from "../assets/img/soon1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';  

// for the Active Live 
const demo = () => {
  window.open("https://www.youtube.com/");
};
const demo1 = () => {
  window.open("https://www.w3schools.com");
};
const demo2 = () => {
  window.open("https://www.w3schools.com");
};
const demo3 = () => {
  window.open("https://www.w3schools.com");
};

// code for each project
const code = () => {
  window.open("https://www.w3schools.com");
};
const code1 = () => {
  window.open("https://www.w3schools.com");
};
const code2 = () => {
  window.open("https://www.w3schools.com");
};
const code3 = () => {
  window.open("https://www.w3schools.com");
};


export const Projects = () => {

  const projects = [


    {
      title: "Ecommerce Website",
      description: "Small multipurpose clothing website for customers to purchase my products",
      imgUrl: projImg1,
      link: demo,
      repo: code,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: demo1,
      repo: code1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: demo2,
      repo: code2,
    },
    {
      title: "More to be seen soon",
      description: "Nothing worth seeing yet",
      imgUrl: soon,
    },
    {
      title: "More to be seen soon",
      description: "Nothing worth seeing yet",
      imgUrl: soon,
    },
    {
      title: "More to be seen soon",
      description: "Nothing worth seeing yet",
      imgUrl: soon,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Displayed here are Projects I created that I believe to be best for recruitment when it come to working in react. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h1>I WILL ADD MORE SOON</h1>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h1>I WILL ADD MORE SOON</h1>                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}