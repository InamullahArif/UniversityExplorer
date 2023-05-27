import React from "react";
import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Edituni = () => {
  const [name, setName] = useState("");
  const [loc, setLoc] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [apply, setApply] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("http://localhost:4000/api/uni/" + id)
      .then((res) => {
        setName(res.data.name);
        setLoc(res.data.loc);
        setRating(res.data.rating);
        setImage(res.data.image);
        setApply(res.data.apply);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  // const goBack = () => {};
  return (
    <div data-aos="fade-down">
      <Container style={{ "padding-top": "100px" }}>
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
              EDIT UNIVERSITY DETAILS
            </h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  type="address"
                  placeholder="Enter Address"
                  value={loc}
                  onChange={(e) => {
                    setLoc(e.target.value);
                  }}
                />
                <Form.Label>Rating:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Rating"
                  value={rating}
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                />

                <Form.Label>Image Link:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter link"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />

                <Form.Label>Apply Link:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Link"
                  value={apply}
                  onChange={(e) => {
                    setApply(e.target.value);
                  }}
                />
              </Form.Group>
              <Button
                variant="success"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  axios
                    .put("http://localhost:4000/api/uni/" + id, {
                      name,
                      loc,
                      rating,
                      image,
                      apply,
                    })
                    .then((response) => {
                      console.log("Everything is awesome.");
                      navigate("/uni");
                    })
                    .catch((error) => {
                      console.warn("Not good man :(");
                    });
                }}
              >
                UPDATE
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Edituni;
