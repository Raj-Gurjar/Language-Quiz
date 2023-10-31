import React from "react";
import "./dashBoard.scss";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const redirectToPage1 = () => {
    navigate("/result", { state: { title: "spanish" } });
  };

  const redirectToPage2 = () => {
    navigate("/result", { state: { title: "german" } });
  };

  const redirectToPage3 = () => {
    navigate("/result", { state: { title: "japanes" } });
  };

  const redirectToPage4 = () => {
    navigate("/result", { state: { title: "chinese" } });
  };

  return (
    <div class="dashboardContainer">
      <div class="info-parent-container">
        <div class="info-container">
          <div class="image-container">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              width="100"
              class="rounded-circle"
              alt=""
              className="image"
            />
          </div>
          <div class="text-container">
            <span class="username">{user.email}</span>
            <span class="name">{user.name}</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Container className="buttons-container">
        <Row>
          <Col>
            <Button className="button" onClick={redirectToPage1}>
              Spanish
            </Button>
          </Col>
          <Col>
            <Button className="button" onClick={redirectToPage2}>
              German
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="button" onClick={redirectToPage3}>
              Japanes
            </Button>
          </Col>
          <Col>
            <Button className="button" onClick={redirectToPage4}>
              Chinese
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
