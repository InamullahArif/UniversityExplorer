import React from "react";
import { Container, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import Singleuni from "./Singleuni";
import SingleStudent from "./SingleStudent";
import Addition from "../../src/components/Addition";
import axios from "axios";
import {Row} from "react-bootstrap";
import { isLoggedIn,getLoggedInUser,isAdmin } from "../../src/components/IsAdmin";
import { useEffect, useState } from "react";
const Students = () => {
  const [stu, setStu] = useState([]);
   var cgpa=0;
   var length=0;
  const getData = () => {
    axios
      .get("http://localhost:4000/api/stu")
      .then((res) => {
        setStu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
      stu.map((stu)=>{
        cgpa = cgpa + stu.currentCGPA;
        length++;
      })
        var abc = (cgpa/stu.length);
      console.log(cgpa);
      console.log(abc);


  React.useEffect(getData, []);
  console.log("Inside");
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  return (
    <>
     <h2
        style={{
          fontFamily: "Times New Roman",
          color: "grey",
          fontStyle: "italic",
          paddingTop:"100px"
        }}
        className="text-center"
      >
        Students selected for Scholarship
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
            paddingTop:"50px",
          }}
        >
          {stu.length == 0 ? (
            <p style={{ fontFamily: "Times New Romen", color: "red" }}>
              No student available
            </p>
          ) : 
              stu.map((stu, index) => ( <>
                {stu.currentCGPA>abc && (<SingleStudent stu={stu} key={index} onDelete={getData}/>)}
             </> ))
          }
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
            onClick={e=>{
                e.preventDefault();
                 navigate("/student");
            }}
          />
        Click this button to add Student
      </p> }
    
     </>
  );
};
export default Students;
