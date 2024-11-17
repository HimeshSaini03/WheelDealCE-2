import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortBy, setSortBy] = useState(""); // State variable to hold sorting option
  const [sortedCars, setSortedCars] = useState(carData); // State variable to hold sorted car data

  // Function to handle sorting logic
  const handleSort = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);

    let sortedCarsCopy = [...sortedCars];

    if (selectedSortBy === "low") {
      sortedCarsCopy.sort((a, b) => a.price - b.price);
    } else if (selectedSortBy === "high") {
      sortedCarsCopy.sort((a, b) => b.price - a.price);
    }

    setSortedCars(sortedCarsCopy);
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select value={sortBy} onChange={handleSort}>
                  <option value="">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {sortedCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
