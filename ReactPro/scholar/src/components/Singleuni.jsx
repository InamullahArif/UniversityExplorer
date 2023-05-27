import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../src/components/top.css";
import { Redirect } from "react-router-dom";
import "../components/googleFonts.css";
import { isLoggedIn,getLoggedInUser,isAdmin } from "../../src/components/IsAdmin";
const Singleuni = ({ uni, onDelete }) => {
  const navigate = useNavigate();
  function handleDelete() {
    axios
      .delete("http://localhost:4000/api/uni/" + uni._id)
      .then((res) => {
        console.log(res.data);
        onDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  var link;
  function updateUni() {
    navigate("/edit/" + uni._id);
  }
  return (
  
    <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
      <Card style={{ width: "18rem" ,marginRight:"50px",height:"100%"}}>
        {isLoggedIn()? <a href={uni.apply}>
          <Card.Img
            variant="top" 
            src={uni.image}
            style={{ width: "50%", height: "80px" }}
          />
        </a>: (<Card.Img
            variant="top"
            src={uni.image}
            style={{ width: "50%", height: "80px" }}
          />)}
        
        <Card.Body>
          <Card.Title className="font6"> {uni.name}</Card.Title>
          <Card.Text className="font5">
            {uni.rating}
            <br />
            {uni.loc}
          </Card.Text>
          {isAdmin() && 
          <>
          <a
            href="#"
            class="btn slds-button"
            style={{ width: "100%",height:"20%", "marginTop": "10px" ,fontSize:"15px",fontFamily:"Times New Roman", fontStyle:"bold",paddingRight:"150px"}}
            onClick={updateUni}
          >
            <img
              src="https://img.icons8.com/color-glass/344/edit.png"
              width="25%"
              height="25%"
              className="img-fluid shadow-4"
              alt="..."
              style={{float:"left"}}
            />
            EDIT
          </a>
          <a
            href="#"
            class="btn slds-button"
            style={{ width: "100%",height:"20%", "marginTop": "10px" ,fontSize:"15px",fontFamily:"Times New Roman", fontStyle:"bold",paddingRight:"150px" }}
            onClick={handleDelete}
          >
             <img
              src="https://img.icons8.com/plasticine/344/filled-trash.png"
              width="25%"
              height="25%"
              className="img-fluid shadow-4"
              alt="..."
              style={{float:"left"}}
            />
            DELETE
          </a>
          </> }
         
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
  );
};

export default Singleuni;
