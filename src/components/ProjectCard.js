import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, repo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-button">
          <span><a id="demo" onClick={link}>VIEW LIVE</a></span>
          <span><a id="code" onClick={repo}>VIEW CODE</a></span>
          </div>
        </div>
      </div>
    </Col>
  )
}