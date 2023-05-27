import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, getLoggedInUser } from "../components/IsAdmin";
import { toast } from "react-toastify";
import "../../src/Footerstyle.css";
import "./top.css";
const Top = () => {
  const navigate = useNavigate();
  function callme() {
    navigate("/");
  }
  function callStu() {
      isLoggedIn() ? navigate("/studentD") : navigate("/login");
  }
  function callInfo()
  {
      isLoggedIn() ? navigate("student") : navigate("/login");
  }
  return (
    <div className="pos">
      <Navbar
        expand="lg"
        className="abc"
      >
        <Container>
          <img
            src={require("../images/edu3.png")}
            onClick={callme}
            className="img-fluid shadow-4 justify-content-center"
            style={{ width: "5%", height: "100%" }}
            alt="..."
          />
          <Navbar.Brand
            href="/"
            style={{ paddingLeft: "50px", fontWeight: "bold" }}
            className="font3"
          >
            UNIVERSITY EXPLORER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto font2">
                <Nav.Link href="/uni">Universities</Nav.Link>
                <Nav.Link onClick={callStu}>Students</Nav.Link>
                <Nav.Link onClick={callInfo}>
                  Add Student's Information
                </Nav.Link>
              {isLoggedIn() ? (
                <Nav.Link href="/login">
                  <Button
                    variant="success"
                    style={{ borderRadius: "20px" }}
                    onClick={(e) => {
                      toast.success("Logged Out Successfully!", {
                        position: toast.POSITION.TOP_CENTER,
                      });
                      localStorage.removeItem("token");
                    }}
                  >
                    LOGOUT {getLoggedInUser().name}
                  </Button>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link href="/signup">
                    <Button variant="success" style={{ borderRadius: "20px" }}>
                      SIGN UP
                    </Button>
                  </Nav.Link>
                  <Nav.Link href="/login">
                    <Button variant="success" style={{ borderRadius: "20px" }}>
                      LOGIN
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Top;
