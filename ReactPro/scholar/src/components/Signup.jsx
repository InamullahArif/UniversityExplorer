import React from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import {toast } from "react-toastify";
const Signup = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <div data-aos="fade-down" style={{width:"80%",height:"80%", margin:"auto"}}>
      <Container style={{ paddingTop: "100px" }}>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div
              style={{
                margin: "auto",
                paddingBottom: "50px",
                paddingTop: "50px",
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
                  className="text-center font4"
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  SIGNUP
                </h1>
                <Form>
                  <Form.Group className="mb-3 font4">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 font4" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />

                    <Form.Text
                      className="text-muted font4"
                      style={{ fontStyle: "italic" }}
                    >
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3 font4" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button
                  className="font4"
                    variant="success"
                    type="submit"
                    style={{ width: "100%" }}
                    onClick={(e) => {
                      e.preventDefault();

                      axios
                        .post("http://localhost:4000/api/user/register", {
                          name,
                          email,
                          password,
                        })
                        .then((data) => {
                          console.log(data);
                          toast.success("Registered Successfully!", {
                            position: toast.POSITION.TOP_CENTER,
                          });
                          navigate("/login");
                        })
                        .catch((err) => {
                          console.log(err);
                          toast.error(err.response.data, {
                            position: toast.POSITION.TOP_LEFT,
                          });
                        });
                    }}
                  >
                    REGISTER
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img
              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7895.jpg?t=st=1655843092~exp=1655843692~hmac=b1a6e51c22f3f9d430be160b1e2c78948619934da2f7d0173c3ec2cbc4a9ea61&w=740"
              width="70%"
              height="70%"
              className="img-fluid shadow-4 justify-content-center"
              alt="..."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
