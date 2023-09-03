import { Row, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import Product from "./Product/Product";

const ShopList = ({ productItems, addToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Change as needed
  const totalPages = Math.ceil(productItems.length / itemsPerPage);
  const displayedProducts = productItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {}, [productItems]);
  if (productItems.length === 0) {
    return <h1 className="not-found">Product Not Found !!</h1>;
  } else {
    return (
      <div>
        <Row className="justify-content-center">
          {displayedProducts.map((productItem) => {
            return (
              <Product
                key={productItem.id}
                title={null}
                productItem={productItem}
                addToCart={addToCart}
              />
            );
          })}
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Pagination>
          <Pagination.Prev
            onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item
              key={idx}
              active={idx + 1 === currentPage}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              setCurrentPage((old) => Math.min(old + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          />
        </Pagination>
        </div>
      </div>
    );
  }
};
export default ShopList;
