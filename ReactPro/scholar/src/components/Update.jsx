import React from 'react';
import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Update = () => {
   useEffect(() => {
     Aos.init({ duration: 3000 });
   });
  return (
    <div data-aos="fade-in">
    <Container style={{ "padding-top": "100px" }} >
      
          <div 
            style={{
              width: "50%",
              height: "70%",
              margin: "auto",
              "padding-bottom": "50px",
              "padding-top": "50px",
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
                  "font-family": "Times New Roman",
                  "font-style": "italic",
                }}
              >
                UPDATE UNIVERSITY DETAILS
              </h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" />
                  <Form.Label>Address:</Form.Label>
                  <Form.Control type="address" placeholder="Enter Address" />
                     <Form.Label>Rating:</Form.Label>
                  <Form.Control type="number" placeholder="Enter Rating" />
                </Form.Group>
                <Button variant="success" type="submit">
                  UPDATE
                </Button>
              </Form>
            </div>
          </div>
    </Container>
    </div>
  );
};

export default Update;
