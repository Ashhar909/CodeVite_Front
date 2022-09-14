import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../../css/style.css";
import One from "../../assets/one.webp";
import Two from "../../assets/two.webp";
import Three from "../../assets/three.webp";
import Four from "../../assets/four.webp";
import Five from "../../assets/five.webp";

const Pricing = () => {
  return (
    <>
      <h1>Pricing</h1>
      <div>
        <h3>
          Well, when we say that our futuristic courses are 15x cheaper than any
          other market competitor we really mean it.
        </h3>
      </div>
      <Container fluid id="col__pricing">
        <Row>
          <Col>
            <Row>
              <h4>Introduction To Hypercasual Game Development</h4>
            </Row>
            <Row>
              <Image src={Three} width="200px"></Image>
            </Row>
            <Row>
              <a href="/">Rs.6000(10000),exclusive of scholarships</a>
            </Row>
          </Col>
          <Col>
            <Row>
              <h4>Data Science FastTrack</h4>
            </Row>
            <Row>
              {" "}
              <Image src={Two} width="200px"></Image>
            </Row>
            <Row>
              <a href="/">Rs.4000 (6000)</a>
            </Row>
          </Col>
          <Col>
            <Row>
              <h4>Cybersecurity Evangelist Live</h4>
            </Row>
            <Row>
              {" "}
              <Image src={One} width="200px"></Image>
            </Row>
            <Row>
              <a href="/">Rs.6000(Rs.8000),exclusive of scholarships</a>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <h4>Quantum Leap</h4>
            </Row>
            <Row>
              <Image src={Four} width="200px"></Image>
            </Row>
            <Row>
              <a href="/">Rs.5000(10,000), exclusive of scholarships</a>
            </Row>
          </Col>
          <Col>
            <Row>
              <h4>CC Conclave</h4>
            </Row>
            <Row>
              <Image src={Five} width="200px"></Image>
            </Row>
            <Row>
              <a href="/">Rs.2000(3500),exclusive of scholarships</a>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
