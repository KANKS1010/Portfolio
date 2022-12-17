import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/project-img1.1.png";
import soon from "../assets/img/soon1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';  
import 'bootstrap/dist/css/bootstrap.min.css';

// for the Active Live 
const demo = () => {
  window.open("https://ecommerce-site-0.vercel.app/");
};
// code for each project
const code = () => {
  window.open("https://github.com/KANKS1010/ecommerce_site_0");
};


export const Projects = () => {

  const projects = [


    {
      title: "E-commerce Website",
      description: "Small e-commerce website that sells speakers and headphones made in next.js with a backend using stripe",
      imgUrl: projImg4,
      link: demo,
      repo: code,
    },
    {
      title: "Business Startup",
      description: "Soon To Come ",
      imgUrl: soon,
    },
    {
      title: "Live Streaming Services",
      description: "Soon To Come",
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