import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const getData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");

    const { email, password } = inputValue;

    if (email === "") {
      alert("email field require");
    } else if (!email.includes("@")) {
      alert("Please Enter Valid Email");
    } else if (password === "") {
      alert("Please Enter Password");
    } else if (password.length < 5) {
      alert("Password length more then 5 letter");
    } else {
      if (getuserArr && getuserArr) {
        const userData = JSON.parse(getuserArr);
        const userLogin = userData.filter(
          (obj, i) => obj.email === email && obj.password === password
        );

        if (userLogin.length === 0) {
          alert("Invalid Detail");
        } else {
          localStorage.setItem("user_login", JSON.stringify(userLogin));
          navigate("/details");
        }
      }
    }
  };
  return (
    <div>
      <div className="container mt-4">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Control
                  onChange={getData}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6">
                <Form.Control
                  onChange={getData}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={addData}
                className="col-lg-6"
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">Already have an Account SignIn </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </div>
  );
};

export default Login;
