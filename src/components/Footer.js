import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const linkedin = () => {
  window.open("https://www.linkedin.com/in/ronnie-johnson-585aba212");
};
const github = () => {
  window.open("https://github.com/KANKS1010?tab=repositories");
};
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <h1>Portfolio</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a id="linkedin" onClick={linkedin}><FontAwesomeIcon href="" className="resume" icon={faLinkedin} /></a>
              <a id="linkedin" onClick={github}><FontAwesomeIcon className="resume" icon={faGithub} /></a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="pop"></div>
    </footer>
  )
}