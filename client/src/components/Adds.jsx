import React from "react";
import { useState, useEffect } from "react";
import { get, post, put, erase } from "./../utility/fetchHealper";
import "./../css/Adds.css";

import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavLink from "react-bootstrap/esm/NavLink";
export default function Adds() {
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    get("http://127.0.0.1:8080/myPage").then((response) =>
      setAdds(response.data)
    );
  }, []);

  return (
    <div className="mainContainer">
      <h2 className="mainHeading">Tillgängliga Tjänster</h2>
      <div className="mainCategoryContainer">
        <NavLink className="navlink" href="/">
          Gå tillbaka
        </NavLink>
        <Row xs={1} s={3} md={6} lg={12} className="CategoryChoices">
          <Col className="mr-1 ">
            <img
              className="categoryImg"
              src="./images/Worker.png"
              alt="carpenter"
            />

            <Button className="mt-2  mr-1 cat-btn" variant="dark">
              Snickare
            </Button>
          </Col>
          <Col className="mr-1 ">
            <img
              className="categoryImg"
              src="./images/Worker.png"
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

      {adds.map((add) => {
        return (
          <div className="addsContainer">
            <img className="addsImg" src={add.img}></img>

            <div className="textBox">
              <h3 className="addsHeading">{add.heading}</h3>
              <p className="addsDescription">{add.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
