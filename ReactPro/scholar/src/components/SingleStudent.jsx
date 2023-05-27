import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../src/components/top.css";
import {
  isAdmin,
} from "../../src/components/IsAdmin";
const SingleStudent = ({ stu, onDelete }) => {
  const navigate = useNavigate();
  function handleDelete() {
    axios
      .delete("http://localhost:4000/api/stu/" + stu._id)
      .then((res) => {
        console.log(res.data);
        onDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  var cgpa = 0;
  cgpa = stu.currentCGPA;
  return (
    <Container>
      <Card style={{ width: "18rem"}}>
        <Card.Body>
          <Card.Title
            style={{ fontFamily: "Times New Roman", fontWeight: "bold", color:"#4CAF50" }}
          >
            {stu.name} {stu.fName}
          </Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontFamily: "Times New Roman" }}
          >
            {stu.phoneNo}
            <br />
            {stu.instituteName}
          </Card.Subtitle>
          <Card.Text style={{ fontFamily: "Times New Roman" }}>
            {stu.currentCGPA}
          </Card.Text>
        </Card.Body>
          {isAdmin() &&
          <>
          <a
            href="#"
            class="btn slds-button"
            style={{
              width: "100%",
              height: "20%",
              marginTop: "10px",
              fontSize: "15px",
              fontFamily: "Times New Roman",
              fontStyle: "bold",
              paddingRight: "150px",
            }}
            onClick={handleDelete}
          >
            <img
              src="https://img.icons8.com/plasticine/344/filled-trash.png"
              width="25%"
              height="25%"
              className="img-fluid shadow-4"
              alt="..."
              style={{ float: "left" }}
            />
            DELETE
          </a></>}
      </Card>
      <hr/>
      </Container>
  );
};

export default SingleStudent;
