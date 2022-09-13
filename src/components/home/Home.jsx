import React from "react";
import Laptop from "../../assets/laptop.jpg";
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

const Home = () => {
  return (
    <>
      <Container>
        <Image src={Laptop} fluid width="1450px" />
        <Button variant="warning">Review Pricing</Button>{" "}
        <Button variant="primary">Explore Other Programs</Button>{" "}
      </Container>
      <hr />
      <Container>
        <Row>
          <Col>
            <Image src={Earth} fluid width="500px" />
          </Col>
          <Col>
            <h3>Introduction To Hypercasual Game Development(HYP101)</h3>
            <p>
              [Featured Course]Learn the intricacies of hypercasual game
              development from scratch and go on to create several app, web,game
              development projects of your own through Codevita Live’s
              comprehensive HYP-101 Course. 8 weeks. 50 projects. Loads of fun.
            </p>
            <Button variant="primary">Apply Now</Button>{" "}
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <h3>Experience A Learning Ecosystem Like No Other!</h3>
        <h6>
          At Codevita Live, we celebrate the innate genius inside each and every
          student and believe in bringing out the best in each and every
          student.
        </h6>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col>
            <h3>Introducing Data Science FastTrack.</h3>
            <p>
              World’s most comprehensive, affordable and loaded data science
              programme is here. Learn the intricacies of data science and
              machine learning including data visualization, wrangling,
              clustering, algorithms and a lot more in 6 months and supercharge
              your resume with up to 10 capstone projects!
            </p>
            <Button variant="primary">Learn More</Button>{" "}
          </Col>
          <Col>
            <Image src={DSF} width="500px" />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col>
            <h3>
              The most comprehensive, affordable and philantrophic platform
              available out there!
            </h3>
            <p>
              From 15x cheaper pricing compared to all competitors to internship
              opportunities and comprehensive career training for our alumni, we
              have got everything covered for you.
            </p>
          </Col>
          <Col>
            <Image src={Stud} width="500px" />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h3>
              Join A Global Community Of Learners In Attaining The Prestigious
              Codevita Live Alumni Status.
            </h3>
            <Image src={Com1} width="480px" />
          </Col>
          <Col>
            <Image src={Com2} width="500px" />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={6} md={4}>
            <Image src={Quantum} height="200px" />
            <h3>Quantum Leap</h3>
            <p>
              Master the theory behind Quantum computing and learn the basics of
              Quantum programming using Qiskit with Codevita Live’s one of a
              kind Quantum Computing Certification!
            </p>
            <Button variant="primary">Learn More</Button>{" "}
          </Col>
          <Col xs={6} md={4}>
            <Image src={Voyage} height="200px" />
            <h3>Bon Voyage Series</h3>
            <p>
              Venture into the intricacies of a new programming language in a
              couple of weeks with our world-class pedagogy and build your
              resume with some great capstone projects for just Rs.450!
            </p>
            <Button variant="primary">Learn More</Button>{" "}
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
};

export default Home;
