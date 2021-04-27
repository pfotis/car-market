import React from 'react';
import { Col, Row, Container } from "./Grid";

const Footer = () => {
  return (
    <footer className='page-footer font-small unique-color-dark'>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div className='flex-center'>
              <a className='fb-ic'>
                <i className='fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {' '}
                </i>
              </a>
              <a className='li-ic'>
                <i className='fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x'>
                  {' '}
                </i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <div className='footer-copyright text-center'>
        © 2021 Copyright: Peter Fotis
        <a href='#'>&nbsp;Car Market</a>
      </div>
    </footer>
  );
};

export default Footer;
