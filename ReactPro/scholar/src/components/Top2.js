import React from "react";
import "./top.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

import { useEffect } from "react";
import googleFonts from "../components/googleFonts.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Top2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  });
  return (
    <div>
      <img
        src={require("../../src/images/endpic.jpg")}
        className="img-fluid shadow-4 justify-content-center"
        alt="..."
        style={{ marginTop: "70px", height: "100%", width: "100%" }}
      />
      <hr />
      <Container>
        <div data-aos="fade-down">
          <h2
            style={{
              marginTop: "30px",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
            className="font2"
          >
            University Explorer
          </h2>
          <p
            style={{
              marginTop: "30px",
              fontSize: "18px",
              color: "grey",
            }}
            className="font5"
          >
            Universal Students’ Consultancy – Education and immigration
            Specialists Worldwide offers extensive educational and immigration
            consultancy services, who wish to study in the United Kingdom,
            Australia, United States of America, Canada, Ireland, Sweden,
            Netherlands, Germany, New Zealand, Russia, Poland, Cyprus, Portugal,
            Turkey, China and many more.
          </p>
          <p
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              fontSize: "18px",
              color: "grey",
            }}
            className="font5"
          >
            Universal Students’ Consultancy is committed to provide concrete and
            qualitative services.
          </p>
          <p
            style={{
              marginBottom: "50px",
              fontSize: "18px",
              color: "grey",
            }}
            className="font5"
          >
            Our objective is to offer professional guidance to students seeking
            educational opportunities worldwide and enable them to make the
            right choice with comfort and joy. Universal students’ Consultancy
            is a group of experienced consultants in Pakistan. USC Staff is
            honest, friendly, reliable, approachable and always treat their
            clients with courtesy and great smile. Being one of the pioneers in
            providing consultancy services in the parameters of overseas
            education.
          </p>
        </div>
      </Container>
      <Container>
        <div>
          <h1 className="text-center pad font2">Top Universities</h1>
          <hr />
          <Carousel fade className="caro">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/pic1.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/pic2.jpg")}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
          <h5
            className="text-center pad font4"
            style={{
              color: "grey",
              marginTop: "50px",
            }}
          >
            The Best Choice
          </h5>
          <h2 className="text-center font2" style={{ fontWeight: "bold" }}>
            What Our Clients Say
          </h2>
          <hr />
          <div className="text-center xyz">
            <div style={{ marginTop: "40px", marginBottom: "40px" }}>
              <img
                src={require("../../src/images/comma.jpg")}
                className="img-fluid shadow-4"
                alt="..."
              />
            </div>
            <p
              style={{
                color: "grey",
                fontSize: "18px",
              }}
              className="font5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              placerat ligula a mauris porttitor ultrices. Aliquam imperdiet
              auctor ipsum et tincidunt. Cras in lorem tempor, volutpat mauris
              pellentesque, placerat leo. Donec hendrerit augue mauris, id
              egestas tellus porta ac. Ut pellentesque maximus luctus. Duis
              rutrum turpis ac augue laoreet, eget imperdiet elit maximus. Nunc
              ut lorem sagittis, cursus tellus non, egestas justo. Vivamus
              bibendum faucibus arcu nec convallis. Etiam quis pulvinar felis.
              Proin finibus scelerisque diam ut congue. Nullam nec pellentesque
              dolor. In condimentum dolor sem. Nam eu dolor fringilla, accumsan
              massa a, ornare mi.
            </p>
            <p className="font4">Mr. Talha Latif</p>
            <p
              style={{
                color: "grey",
              }}
              className="font4"
            >
              Digital Trainer and Instructor
            </p>
            <img
              src={require("../images/personImage.jpg")}
              className="img-fluid shadow-4 justify-content-center"
              alt="..."
              style={{
                borderRadius: "50%",
                height: "8%",
                width: "8%",
                marginTop: "40px",
              }}
            />
            <h2
              className="text-center font2"
              style={{ fontWeight: "bold", marginTop: "50px" }}
            >
              What We Do
            </h2>
            <hr />
            <div
              style={{ marginTop: "50px", marginBottom: "70px" }}
              data-aos="fade-right"
            >
              <Container fluid>
                <Row className="cardss">
                  <Col lg={3} md={3} sm={12} xs={12}>
                    <Card style={{ width: "100%" }}>
                      <Card.Body>
                        <Card.Title>
                          <img
                            src={require("../images/card1.jpg")}
                            className="img-fluid shadow-4 justify-content-center"
                            alt="..."
                          />
                        </Card.Title>
                        <Card.Subtitle
                          className="mb-2 text-muted font4"
                          style={{ fontWeight: "bold" }}
                        >
                          ACADEMIC AND CAREER COUNSELING
                        </Card.Subtitle>
                        <Card.Text className="font5">
                          Universal Students` Consultancy helps students to
                          choose right program and course to study in right
                          country.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3} md={3} sm={12} xs={12}>
                    <Card style={{ width: "100%" }}>
                      <Card.Body>
                        <Card.Title>
                          <img
                            src={require("../images/card2.jpg")}
                            className="img-fluid shadow-4 justify-content-center"
                            alt="..."
                          />
                        </Card.Title>
                        <Card.Subtitle
                          className="mb-2 text-muted font4"
                          style={{ fontWeight: "bold" }}
                        >
                          COUNSELING FOR FORMATTING OF DOCUMENTS
                        </Card.Subtitle>
                        <Card.Text className="font5">
                          Formatting documents is next big thing to get success
                          for student immigration. In documentation we mainly
                          prepare our students according to requirements.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3} md={3} sm={12} xs={12}>
                    <Card style={{ width: "100%" }}>
                      <Card.Body>
                        <Card.Title>
                          <img
                            src={require("../images/card3.jpg")}
                            className="img-fluid shadow-4 justify-content-center"
                            alt="..."
                          />
                        </Card.Title>
                        <Card.Subtitle
                          className="mb-2 text-muted font4"
                          style={{ fontWeight: "bold" }}
                        >
                          COUNSELING ON ADMISSION LETTER
                        </Card.Subtitle>
                        <Card.Text className="font5">
                          Universal Students` Consultancy is authorized by
                          various reputed educational institutions across the
                          world
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </Container>
      <img
        src={require("../images/unipic.jpg")}
        className="img-fluid shadow-4 justify-content-center"
        alt="..."
      />
    </div>
  );
};

export default Top2;
