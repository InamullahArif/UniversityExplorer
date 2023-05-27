import React from 'react';
import { Form, Button } from "react-bootstrap";
import { Container ,Row,Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import axios from "axios";
const Adduni = () => {
  const [name,setName]=useState("");
  const [loc,setLoc] = useState("");
  const [rating,setRating] = useState("");
  const [image,setImage] = useState("");
  const [apply,setApply] = useState("");
    const navigate = useNavigate();
   useEffect(() => {
     Aos.init({ duration: 3000 });
   });
  return (
    <div data-aos="fade-down" className="font4">
    <Container style={{ "paddingTop": "60px" }} >
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
                ADD UNIVERSITY DETAILS
              </h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" value={name} onChange={e=>{
                    setName(e.target.value);
                  }}/>
                  <Form.Label>Address:</Form.Label>
                  <Form.Control type="address" placeholder="Enter Address" 
                  value={loc} onChange={e=>{
                    setLoc(e.target.value);
                  }}/>
                     <Form.Label>Rating:</Form.Label>
                  <Form.Control type="number" placeholder="Enter Rating"
                  value={rating} onChange={e=>{
                    setRating(e.target.value);
                  }}/>

                    <Form.Label>Image URL:</Form.Label>
                  <Form.Control type="text" placeholder="Enter image URL"
                  value={image} onChange={e=>{
                    setImage(e.target.value);
                  }}/>

                    <Form.Label>Apply Link:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Apply URL"
                  value={apply} onChange={e=>{
                    setApply(e.target.value);
                  }}/>
                </Form.Group>
                <Button variant="success" type="submit" onClick={e=>{
                  axios.post("http://localhost:4000/api/uni",{name,loc,rating,image,apply}).then(res=>{
                    console.log(res.data);
                     navigate("/uni");
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
              src="https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1655833492~exp=1655834092~hmac=f86f3fa75e40b9cb59025f6b4615dba4209202ca4ad91b781b62afa545f60ce9&w=826"
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

export default Adduni;
