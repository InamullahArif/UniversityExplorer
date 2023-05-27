import React from 'react';
import { Form, Button } from "react-bootstrap";
import { Container,Col,Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Student = () => {
   useEffect(() => {
     Aos.init({ duration: 3000 });
   });
       const navigate = useNavigate();
   const [name,setName]= useState("");
   const [fName,setfName]= useState("");
   const [phoneNo,setphoneNo]= useState("");
   const [instituteName,setinstituteName]= useState("");
   const [currentCGPA,setcurrentCGPA]= useState("");
  //  function addStudent()
  //  {
  //   axios.post("http://localhost:4000/api/stu",{name,fName,phoneNo,instituteName,currentCGPA}).then(res=>{
  //     console.log(res.data);
  //     navigate("/uni");
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  //  }
  return (
    <div data-aos="fade-right" className="font4">
    <Container style={{ "paddingTop": "50px" }} >
      <Row>
        <Col lg={4} md={6} sm={12}>
          <div 
            style={{
              width: "100%",
              height: "100%",
              margin: "auto",
              "paddingBottom": "50px",
              "paddingTop": "10px",
              backgroundColor: " rgb(223, 244, 226)",
            }}
          >
            <div 
              style={{
                width: "70%",
                margin: "auto",
              }}
            >
              <h1
                className="text-center"
                style={{
                  "fontFamily": "Times New Roman",
                  "fontStyle": "italic",
                }}
              >
                STUDENT'S INFORMATION
              </h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter name"  value={name} onChange={e=>{
                    setName(e.target.value);
                  }}/>

                   <Form.Label>Father's Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Father's name" value={fName} onChange={e=>{
                    setfName(e.target.value);
                  }}/>

                     <Form.Label>Phone Number:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Phone No"  value={phoneNo} onChange={e=>{
                    setphoneNo(e.target.value);
                  }} />

                  <Form.Label>Institute Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Institute's name"  value={instituteName} onChange={e=>{
                    setinstituteName(e.target.value);
                  }} />


                    <Form.Label>Current CGPA:</Form.Label>
                  <Form.Control type="number" placeholder="Enter CGPA"  value={currentCGPA} onChange={e=>{
                    setcurrentCGPA(e.target.value);
                  }}/>


                </Form.Group>
                <Button variant="success" type="submit" onClick={e=>{
                  e.preventDefault();
                  axios.post("http://localhost:4000/api/stu",{name,fName,phoneNo,instituteName,currentCGPA}).then(res=>{
                    console.log(res.data);
                     navigate("/studentD");
                  }).catch(err=>{
                    console.log(err);
                  });
                }}>
                 Add
                </Button>
              </Form>
            </div>
          </div>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img
              src="https://img.freepik.com/free-vector/teacher-student-concept-illustration_114360-7915.jpg?t=st=1655843367~exp=1655843967~hmac=dd89d9c9fdf997ab81df24421837060e501fe01344f46ee771cabdc16d2a7030&w=740"
              width="100%"
              height="100%"
              className="img-fluid shadow-4 justify-content-center"
              alt="..."
            />
          </Col>
          </Row>
    </Container>
    </div>
  );
};

export default Student;
