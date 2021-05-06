import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";


function About() {
  
  return (
    <Container fluid>
      <div className="space">
        <Row>
          <Col size="lg-6 md-12 sm-12">
            <h2 className="font">Now Is a Good Time to Sell Your Extra Used Car</h2>
            <br/>
            <p className="font">You’ve heard the advice “buy low, sell high” when it 
            comes to your financial investments, but it also applies to that used car 
            sitting in your driveway. If you’ve been holding onto a car that isn’t seeing 
            much of the open road these days, there’s a good chance you’ll find generous 
            returns on it right now thanks to the <Link to="/home">Car Market</Link>. The chip 
            fiasco wreaked havoc on the auto industry causing sweeping production delays 
            and reduced inventory. In turn, dealers are willing to pony up more cash to buy 
            used cars and fill empty lots — good news for you. 
            </p>
            <br/>
            <h3 className="font">Why Is the Chip Shortage Driving Up Used-Car Prices?</h3>
            <br/>
            <p className="font">COVID-19 restrictions are easing up around the country, but 
            the pandemic is not easing up on the auto industry just yet. Several months after 
            the onset of the pandemic that forced factory shutdowns and dealership closures, 
            it appeared the odds were once again favoring the auto industry. Manufacturing 
            resumed, dealerships opened their doors and shoppers lined up to cash in their 
            stimulus checks. Then, the COVID-induced semiconductor shortage hit, causing more 
            disruption and significant inventory shortages. 
            </p>
            <p className="font">
            Cars.com data shows that new-car inventory dropped more than 15% between February 
            and April, but how does this translate to used vehicles? When new-vehicle prices 
            rise and inventory falls, shoppers go to plan B and opt for used cars. Consequently, 
            used-car inventory fell and prices skyrocketed as demand showed no signs of slowing 
            down. 
            </p>
            <br/>
            <h3 className="font">How to Sell Your Car for the Most Money</h3>
            <br/>
            <p className="font">If you’re looking to sell or trade in your extra car in the coming 
            weeks, you have an excellent opportunity to get more money for it because used inventory 
            is low and demand remains high. You can sell the vehicle privately throw the <Link to="/home">Car Market</Link> and 
            you can save the money the dealer could take as commission or profit. 
            </p>
          </Col>
          <Col size="lg-6 md-12 sm-12">
            <img className="img" src="./img/about/about.jpg" alt="about"/>
            <img className="img" src="./img/about/about2.png" alt="about"/>
          </Col>
        </Row>
      </div>
    </Container>
  );
}


export default About;