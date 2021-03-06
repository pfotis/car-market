import React from 'react';
// import components
import { Col, Row } from "../Grid";
// import css
import "./style.css";

const OurFeature = () => {
  
  return (
    <div className='mt-5 pt-5'>
      <section className='white-text'>
        <Row>
          <Col size="md-12">
            <div className='card z-depth-2'>
              <div className='card-body p-0'>
                <div className='row mx-0'>
                  <div className='col-md-6 mdb-color primary-color py-5 px-md-5'>
                    <h4 className='font-weight-bold text-white ml-3 mb-4 pb-2'>
                      Saves time for sellers
                    </h4>
                    <ul className='fa-ul mb-0'>
                      <li className='mb-2'>
                        <span className='fa-li'>
                          <i className='fas fa-check' />
                        </span>
                        Upload & sell your car within second
                      </li>
                      <li className='mb-2'>
                        <span className='fa-li'>
                          <i className='fas fa-check' />
                        </span>
                        Car files included
                      </li>
                      <li className='mb-2'>
                        <span className='fa-li'>
                          <i className='fas fa-check' />
                        </span>
                        High level security protection
                      </li>
                      <li>
                        <span className='fa-li'>
                          <i className='fas fa-check' />
                        </span>
                        User friendly customer care
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6 red success-color py-5 px-md-5'>
                    <h4 className='font-weight-bold text-white ml-3 mb-4 pb-2'>
                      Makes money for cars
                    </h4>
                    <ul className='fa-ul mb-0'>
                      <li className='mb-2'>
                        <span className='fa-li'>
                          <i className='fas fa-check' />
                        </span>
                        Easy &amp; Modern Way
                      </li>
                      <li className='mb-2'>
                        <span className='fa-li'>
                          <i className='fas fa-check' />
                        </span>
                        Visitors would love to buy more time
                      </li>
                      <li className='mb-2'>
                        <span className='fa-li'>
                          <i className='fas fa-check' />
                        </span>
                        High possibility of selling car
                      </li>
                      <li>
                        <span className='fa-li'>
                          <i className='fas fa-check' />
                        </span>
                        Includes protection for car selling
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <br/>
      <br/>
    </div>
  );
};

export default OurFeature;
