import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    date: "",
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const getData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inputValue;

    if (name === "") {
      alert("Name field Require");
    } else if (date === "") {
      alert("Date field require");
    } else if (email === "") {
      alert("email field require");
    } else if (!email.includes("@")) {
      alert("Please Enter Valid Email");
    } else if (password === "") {
      alert("Please Enter Password");
    } else if (password.length < 5) {
      alert("Password length more then 5 letter");
    } else {
      // If we dont write "JSON.stringify", we got object object in local storage.
      localStorage.setItem(
        "useryoutube",
        JSON.stringify([...data, inputValue])
      );

      navigate("/login");
    }
  };

  return (
    <div className="container mt-4">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Sign Up</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Control
                onChange={getData}
                type="text"
                name="name"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Control name="date" onChange={getData} type="date" />
            </Form.Group>

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
          <p className="mt-3">
            Already have an Account <NavLink to="/login">Sign In </NavLink>
          </p>
        </div>
        <Sign_img />
      </section>
    </div>
  );
};

export default Home;
