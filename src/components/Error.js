import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const backToLogin = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Error Page</h1>
      <Button onClick={backToLogin}>Back to Sign up Page</Button>
    </div>
  );
};

export default Error;
