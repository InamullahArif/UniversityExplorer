import { requirePropFactory } from "@mui/material";
import React from "react";
import "../../src/Footerstyle.css";
import googleFonts from "../components/googleFonts.css";
import "./top.css";
const Footer = () => {
  return (
    <div id="footerdivision">
      <div className="container" id="footerdiv">
        <div className="row">
          <div className="col-md-3">
            <h3 className="font2">University Scholarships</h3>
            <p className="font5">
              Study abroad with great scholarship opportunities. Get yourself registered and apply now!
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="font2">Quick Links</h3>
            <nav className="footerdivlist">
              <ul>
                <li>
                  <a
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}
                    className="font5"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="/student"
                    style={{ color: "white", textDecoration: "none" }}
                    className="font5"
                  >
                    ADD MY INFO
                  </a>
                </li>
                <li>
                  <a
                    href="/uni"
                    style={{ color: "white", textDecoration: "none" }}
                    className="font5"
                  >
                    UNIVERSITIES
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3">
            <h3 className="font2">Contact Us</h3>

            <div>
              <p className="font5">
                <img
                  src="https://img.icons8.com/dusk/344/callback.png"
                  width="10%"
                  height="10%"
                  className="img-fluid shadow-4 justify-content-center"
                  alt="..."
                />
                +92 333 2345678
              </p>
            </div>

            <div>
                <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" style={{color:"white",textDecoration:"none"}}>
              <p className="font5">
                <img
                  src="https://img.icons8.com/office/344/send-mass-email.png"
                  width="10%"
                  height="10%"
                  className="img-fluid shadow-4 justify-content-center"
                  alt="..."
                />
                universityexplorer@gmail.com
              </p>
              </a>
            </div>
            
              <div>
               
                <p className="font5">
                    
                  <img
                    src="https://img.icons8.com/office/344/address.png"
                    width="10%"
                    height="10%"
                    className="img-fluid shadow-4 justify-content-center"
                    alt="..."
                  />
                  22-H Sector F, Islamabad,Pakistan
                </p>
              </div>
          </div>
          <div className="col-md-3" id="innderfooter">
            <h3 className="font2">Follow Us</h3>
            <a>
              <div className="font5">
                 <a href="https://www.facebook.com/" style={{color:"white",textDecoration:"none"}}>
                <p>
                  <img
                    src="https://img.icons8.com/color/344/facebook.png"
                    width="15%"
                    height="15%"
                    className="img-fluid shadow-4 justify-content-center"
                    alt="..."
                  />
                  Facebook
                </p>
                </a>
              </div>
            </a>
            <a>
              <div className="font5">
                <a href="https://www.instagram.com/accounts/login/" style={{color:"white",textDecoration:"none"}}>
                <p>
                  <img
                    src="https://img.icons8.com/fluency/344/instagram-new.png"
                    width="15%"
                    height="15%"
                    className="img-fluid shadow-4 justify-content-center"
                    alt="..."
                  />{" "}
                  Instagram
                </p>
                </a>
              </div>
            </a>

            <div className="font5">
                <a href="https://twitter.com/i/flow/login" style={{color:"white",textDecoration:"none"}}>
              <p>
                <img
                  src="https://img.icons8.com/color/344/twitter--v1.png"
                  width="15%"
                  height="15%"
                  className="img-fluid shadow-4 justify-content-center"
                  alt="..."
                />{" "}
                Twitter
              </p>
              </a>
            </div>
          </div>
        </div>
        {/* <hr style={{  "margin-bottom": "1rem",
            "border": "1.5px solid white","width": "80%","margin": "auto",
             "margin-top": "50px","height":"1px","border":"0.5px"}}/>
             <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook-square" />aa</a> */}
      </div>
    </div>
  );
};

export default Footer;
