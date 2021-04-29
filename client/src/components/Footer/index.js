import React from "react";
import { Row } from  "../Grid";

function Footer() {
  return (
    <footer className="page-footer font-small mdb-color grey pt-4">
        <div className="container-fluid text-center text-md-left">
            <Row>
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer Content</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>

                </div>
                <hr className="clearfix w-100 d-md-none pb-3"/>
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                    <li>
                    <a className='gplus-ic'>
                <i className='fab fa-github-g fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {' '}
                </i>
              </a>
                    </li>
                    <li>
                        <a href="#!">Link 2</a>
                    </li>
                    <li>
                        <a href="#!">Link 3</a>
                    </li>
                    <li>
                        <a href="#!">Link 4</a>
                    </li>
                    </ul>
                </div>
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                    <li>
                        <a href="#!">Link 1</a>
                    </li>
                    <li>
                        <a href="#!">Link 2</a>
                    </li>
                    <li>
                        <a href="#!">Link 3</a>
                    </li>
                    <li>
                        <a href="#!">Link 4</a>
                    </li>
                    </ul>
                </div>
            </Row>
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
    </footer>
    
  );
}

export default Footer;
