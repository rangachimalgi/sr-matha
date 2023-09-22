import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useContext, useEffect, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import { DataContainer } from "../App";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { addToCart, globalFilterList } = useContext(DataContainer);
  const { id } = useParams();
  const [filterList, setFilterList] = useState(globalFilterList);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilterList(globalFilterList);  // Whenever global filter list changes, update local list
}, [globalFilterList]);

  return (
    <Fragment>
      <section className="filter-bar">
        <Container className="filter-bar-container">
          <Row className="justify-content-center">
            <Col md={12}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} addToCart={addToCart} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
