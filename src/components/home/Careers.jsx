import React, { useState } from "react";
import Career from "../../assets/Career.jpeg";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import CareerForm from "../../store/actions/FormActions";

const Careers = (props) => {
  const Navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    college: "",
    appliedFor: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(data);
    console.log(data);
    Navigate("/");
  };

  return (
    <div>
      <h1>Careers @ CodeVita Live</h1>
      <div className="container d-flex justify-content-around my-3">
        <div className="container">
          <img
            src={Career}
            alt="..."
            style={{ width: "600px", height: "380px" }}
          />
          <div style={{ marginTop: "20px", textAlign: "justify" }}>
            If you are ambitious, astute, dynamic and willing to take your
            career to the next level by joining hands with an organization that
            believes in creating an impact and has philanthropy at the heart of
            everything it does, then you are at the right place ! <br />
            <br />
            Join us in our mission of disrupting the ed-tech industry and
            converting children into future STEM leaders and embark in an
            enthralling career trajectory with us!
            <br />
            <br />
            Fill this short interest form up and our officials will be in touch
            with you shortly with further instructions.
            <br />
            <br /> Please note that we are done hiring for non-technical
            profiles for the 2020-21 season.
          </div>
        </div>

        <div
          className="container d-flex justify-content-around"
          style={{ borderLeft: "5px solid #dce5ef", marginLeft: "50px" }}
        >
          <form
            style={{ width: "80%", marginTop: "70px" }}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="number"
                value={data.number}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                College
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="college"
                value={data.college}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Post You Are Applying For( Content Developer/SDE/BDA/Web
                Developer)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="appliedFor"
                value={data.appliedFor}
                onChange={handleChange}
                required
              />
            </div>

            <button id="btn__one" type="submit" className="btn btn-primary">
              Submit
            </button>
            <div id="emailHelp" className="form-text">
              We are based on Pune, India and all non-technical roles are WFH
              until further notice.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authState: state.authR,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    submitForm: (data) => dispatch(CareerForm(data)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Careers);
