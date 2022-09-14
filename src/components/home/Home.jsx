import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Com1 from "../../assets/our-community.png";
import Com2 from "../../assets/new-content.webp";
import DSF from "../../assets/dsf.gif";
import Earth from "../../assets/earth.webp";
import Stud from "../../assets/stud.png";
import Quantum from "../../assets/quantum.webp";
import Voyage from "../../assets/bon-voyage-1.jpg";
import "../../css/style.css";

const Home = () => {
  return (
    <>
      <Container id="section__one">
        <h2
          style={{
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            padding: "140px 80px 30px 80px",
          }}
        >
          At Codevita Live, we introduce future STEM leaders into the
          intellectual premises of computer science.
        </h2>
        {/* <Image src={Laptop} fluid width="1450px" /> */}
        <Button id="btn__one" variant="warning">
          Review Pricing
        </Button>{" "}
        <br /> <br />
        <Button id="btn__one" variant="primary">
          Explore Other Programs
        </Button>{" "}
      </Container>
      <hr />

      <Container id="section__two">
        <Row>
          <Col>
            <Image src={Earth} fluid width="500px" />
          </Col>
          <Col style={{ paddingLeft: "40px" }}>
            <h3>Introduction To Hypercasual Game Development(HYP101)</h3>
            <p style={{ textAlign: "justify" }}>
              [Featured Course]Learn the intricacies of hypercasual game
              development from scratch and go on to create several app, web,game
              development projects of your own through Codevita Live’s
              comprehensive HYP-101 Course. 8 weeks. 50 projects. Loads of fun.
            </p>
            <Button id="btn__one" variant="primary">
              Apply Now
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <Container
        id="section__three"
        style={{ marginTop: "40px", textAlign: "center" }}
      >
        <h3
          style={{
            fontWeight: "bold",
            color: "ThreeDDarkShadow",
            fontSize: "40px",
          }}
        >
          Experience A Learning Ecosystem Like No Other!
        </h3>
        <h6 style={{ fontWeight: "30px" }}>
          At Codevita Live, we celebrate the innate genius <br /> inside each
          and every student and believe in bringing out the best in each and
          every student.
        </h6>
      </Container>
      <Container id="section__four">
        <Row>
          <Col style={{ paddingLeft: "40px", paddingRight: "40px" }}>
            <h3>Introducing Data Science FastTrack.</h3>
            <p style={{ textAlign: "justify" }}>
              World’s most comprehensive, affordable and loaded data science
              programme is here. Learn the intricacies of data science and
              machine learning including data visualization, wrangling,
              clustering, algorithms and a lot more in 6 months and supercharge
              your resume with up to 10 capstone projects!
            </p>
            <Button id="btn__one" variant="primary">
              Learn More
            </Button>{" "}
          </Col>
          <Col>
            <Image src={DSF} width="500px" />
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Row>
          <Col style={{ paddingLeft: "50px", paddingRight: "40px" }}>
            <h3 style={{ marginTop: "40px", textAlign: "initial" }}>
              The most comprehensive, affordable and philantrophic platform
              available out there!
            </h3>
            <p style={{ textAlign: "justify" }}>
              From 15x cheaper pricing compared to all competitors to internship
              opportunities and comprehensive career training for our alumni, we
              have got everything covered for you.
            </p>
          </Col>
          <Col>
            <Image src={Stud} height="300px" width="550px" />
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingLeft: "100px" }}>
        <Image src={Com2} width="900px" />
      </Container>
      <Container>
        <Row className="justify-content-md-center" style={{ padding: "60px" }}>
          <Col>
            <h3 style={{ textAlign: "center" }}>
              Join A Global Community Of Learners In Attaining The Prestigious
              Codevita Live Alumni Status.
            </h3>
            <Image src={Com1} width="580px" style={{ marginLeft: "190px" }} />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col id="col__last">
            <Image src={Quantum} height="200px" />
            <h3 style={{ textAlign: "center", marginTop: "10px" }}>
              Quantum Leap
            </h3>
            <p style={{ textAlign: "justify", padding: "7px" }}>
              Master the theory behind Quantum computing and learn the basics of
              Quantum programming using Qiskit with Codevita Live’s one of a
              kind Quantum Computing Certification!
            </p>
            <Button id="btn__one" variant="primary">
              Learn More
            </Button>{" "}
          </Col>
          <Col id="col__last">
            <Image src={Voyage} height="200px" />
            <h3 style={{ textAlign: "center", marginTop: "14px" }}>
              Bon Voyage Series
            </h3>
            <p style={{ textAlign: "justify", padding: "7px" }}>
              Venture into the intricacies of a new programming language in a
              couple of weeks with our world-class pedagogy and build your
              resume with some great capstone projects for just Rs.450!
            </p>
            <Button id="btn__one" variant="primary">
              Learn More
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
};

export default Home;
