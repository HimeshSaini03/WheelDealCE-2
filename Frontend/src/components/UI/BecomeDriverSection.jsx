import React from "react";

import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/cars-img/slider-images.jpg";




const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Detailing And Modification Work On Your Car
            </h2>
            
            <a href="@" className="btn become__driver-btn mt-4" >
              See More
            </a>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
