import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([]);

  const [show, setShow] = useState(false);

  let todayDate = new Date().toISOString().slice(0, 10);
  const Birthday = () => {
    const getUser = localStorage.getItem("user_login");

    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);

      const userBirth = loginData.map((obj, i) => obj.date === todayDate);

      if (userBirth) {
        setTimeout(() => {
          handleShow();
        }, 3000);
      }
    }
  };

  useEffect(() => {
    Birthday();
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user_login");
    navigate("/");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {loginData.length === 0 ? (
        "Error"
      ) : (
        <>
          <h2>Detail See</h2>
          <h2>{loginData[0].name}</h2>
          <Button onClick={logoutHandler}> LogOut</Button>
          {loginData[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{loginData[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Wish You Happy Birthday</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Thank You
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Details;
