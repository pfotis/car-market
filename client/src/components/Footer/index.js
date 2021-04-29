import React from "react";
import { Row } from  "../Grid";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer font-small mdb-color sticky grey pt-4">
        <div className="container-fluid text-center text-md-left">
            <Row>
                <div className="col-md-8 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer Content</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>

                </div>
                <hr className="clearfix w-100 d-md-none pb-3"/>
                <div className="col-md-4 mb-md-0 mb-3">
                    <h5 className="text-uppercase"></h5>
                    <ul className="list-unstyled">
                    <li>
                        <a href="https://www.linkedin.com/in/peter-fotis-6a740a11a/" target="_blank"><i className="fab fa-linkedin-in fa-2x"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/pfotis" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                    </li>
                    </ul>
                </div>
            </Row>
        </div>
        <div className="footer-copyright text-center py-3">© 2021 Copyright:
            <a href="https://pfotis.github.io/react-portofolio/" target="_blank"> Peter Fotis</a>
        </div>
    </footer>
    
  );
}

export default Footer;
