import React from "react";
import { Link } from "react-router-dom";
import code from "../../assets/Code.png";
import cyber from "../../assets/Cyber.jpeg";

const Explore = () => {
  return (
    <div>
      <div className="container my-2">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to="/">
                <img src={code} className="d-block w-100 " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Start competitive coding from scratch</h2>
                  <h5>
                    Want to break into the competitive programming landscape but
                    don’t know where to start?
                  </h5>
                </div>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/">
                <img src={cyber} className="d-block w-100 " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>
                    <Link to="/">Cyber Security</Link>
                  </h2>
                  <h5>
                    Checkout Cybersecurity Evangelist Live- all you need to
                    kickstart your cybersecurity career. Like all our
                    programmes, it is supplemented with 24/7 doubt support and
                    checkpoint exams and boasts of the same prided Codevita Live
                    pedagogy.{" "}
                  </h5>
                </div>
              </Link>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* <div className="container d-flex justify-content-around text-dark my-5">
        <div style={{ borderRight: "5px solid black" }}>
          <div className="container" style={{ width: "80%" }}>
            <h1>
              Want to break into the competitive programming landscape but don’t
              know where to start?
            </h1>
            <img
              src={code}
              alt="..."
              style={{ width: "500px", height: "250px" }}
            />
            <h3 className="my-3">
              No problem. Codevita Live’s CC Conclave has got you covered.
            </h3>
            <p style={{ textAlign: "justify" }}>
              An introductory course covering everything that you need to know
              to make the transition into the competitive coding landscape with
              a 100% practical based approach.
            </p>
          </div>
        </div>
        <div>
          <div className="container" style={{ width: "80%" }}>
            <h1>
              Always wanted to become a cybersecurity tycoon but have no idea
              where to start?
            </h1>
            <img
              src={cyber}
              alt="..."
              style={{ width: "500px", height: "250px" }}
            />
            <h3 className="my-3">Let's start learning</h3>
            <br></br>
            <p style={{ textAlign: "justify" }}>
              Checkout Cybersecurity Evangelist Live- all you need to kickstart
              your cybersecurity career. Like all our programmes, it is
              supplemented with 24/7 doubt support and checkpoint exams and
              boasts of the same prided Codevita Live pedagogy.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Explore;
