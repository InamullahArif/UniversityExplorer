import React from "react";
import { Container, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import Singleuni from "./Singleuni";
import axios from "axios";
import {Row} from "react-bootstrap";
import { isAdmin } from "../../src/components/IsAdmin";
import { useEffect, useState } from "react";
const Universities = () => {
  const [uni, setUni] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:4000/api/uni")
      .then((res) => {
        setUni(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);
  console.log("Inside");
  console.log(uni.length);
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  function addUni() {
    navigate("/new");
  }
  return (                              
    <>
     <h2
        style={{
          color: "grey",
          fontStyle: "italic",
          fontWeight:"bold",                                     
          paddingTop:"100px"
        }}
        className="text-center font4"
      >
        List of Universities offering Scholarship to on-Merit Students
      </h2>
     
    <div
      style={{ display: "flex", flexDirection: "row",width:"100%" }}
      data-aos="fade-down"
    > 
    <Container fluid>
      <Row>
      <Col lg={4} md={4} sm={12}>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop:"15px",
          }}
        >
          {uni.length === 0 ? (
            <p style={{ fontFamily: "Times New Romen", color: "red" }}>
              There are no universities offering scholarship at the moment
            </p>
          ) : (
            <>
              {uni.map((uni, index) => (
                <Singleuni uni={uni} key={index} onDelete={getData} />
              ))}
            </>
          )}
        </ul>
      </Col>
      </Row>
      </Container>
    </div>
    {isAdmin() &&  <p
        style={{
          float: "right",
          color: "grey",
          fontFamily: "Times New Roman",
          fontStyle: "italic",
          marginTop: "10px",
          display: "block",
        }}
      >
          <AddCircleIcon
            style={{ color: "#4CAF50", fontSize: "40px", float: "right" }}
            onClick={addUni}
          />
        Click this button to add universities
      </p> }
    
     </>
  );
};

export default Universities;
