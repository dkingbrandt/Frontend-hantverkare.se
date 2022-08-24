import React from "react";
import { Link } from "react-router-dom";
import "../css/Category.css";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Categories() {
  return (
    <div className="mainCategoryContainer">
      <Link to="/">
        <p>Gå Tillbaka</p>
      </Link>
      <Row xs={1} s={3} md={6} lg={12} className="CategoryChoices">
        <Col className="mr-1 ">
          <img
            className="categoryImg"
            src="./images/hammer.ico"
            alt="carpenter"
          />

          <Button className="mt-2  mr-1 cat-btn" variant="dark">
            Snickare
          </Button>
        </Col>
        <Col className="mr-1 ">
          <img
            className="categoryImg"
            src="./images/paintbrush.png"
            alt="painter"
          />
          <Button className="mt-2 cat-btn mr-1 " variant="dark">
            Målare
          </Button>
        </Col>
        <Col className="mr-1 ">
          <img
            className="categoryImg"
            src="./images/Worker.png"
            alt="electrician"
          />
          <Button className="mt-2 cat-btn mr-1 " variant="dark">
            Elektriker
          </Button>
        </Col>
        <Col className="mr-1 ">
          <img
            className="categoryImg"
            src="./images/Worker.png"
            alt="plumber"
          />
          <Button className="mt-2 cat-btn mr-1 " variant="dark">
            Rörmokare
          </Button>
        </Col>
      </Row>
    </div>
  );
}
