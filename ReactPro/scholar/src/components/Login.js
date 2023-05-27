import React from 'react';
import { Form, Button } from "react-bootstrap";
import { Container,Row,Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
const Login = () => {
  const navigate = useNavigate();
   useEffect(() => {
     Aos.init({ duration: 3000 });
   });
   const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
 
  return (
    <div data-aos="fade-left" style={{margin:"auto"}}>
      <Container style={{ paddingTop: "70px",paddingLeft:"100px" }} >
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div
              style={{
                margin: "auto",
                paddingBottom: "120px",
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
                  LOGIN
                </h1>
                <Form>
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
                    variant="success"
                    type="submit"
                    className="font4"
                    onClick={(e) => {
                      e.preventDefault();
                      axios
                        .post("http://localhost:4000/api/user/login", {
                          email,
                          password,
                        })
                        .then((token) => {
                          localStorage.setItem("token", token.data);
                          toast.success("Logged In Successfully!", {
                            position: toast.POSITION.TOP_CENTER,
                          });
                          navigate("/uni");
                        })
                        .catch((err) => {
                          console.log(err);
                          toast.error(err.response.data, {
                            position: toast.POSITION.TOP_LEFT,
                          });
                        });
                    }}
                  >
                    Login
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1655842724~exp=1655843324~hmac=898a7bf5fe1be3307a66948207c770da3f890e1925727951aa24a9f08b1b9459&w=740"
              width="80%"
              height="80%"
              className="img-fluid shadow-4 justify-content-center"
              alt="..."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
