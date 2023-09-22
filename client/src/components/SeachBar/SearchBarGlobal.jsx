import { useState } from "react";
import { products } from "../../utils/products";
import { useNavigate } from "react-router-dom";
import "./searchbarglobal.css";

const ProductSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const searchTerm = inputValue.toLowerCase();
    const filteredProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredProducts);
  };

  const handleChange = (input) => {
    setInputValue(input.target.value);
    handleSearch();
  };

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
    setInputValue((prev) => {
      setSearchResults([]);
      return "";
    });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
      <div className="search-dropdown">
        {inputValue &&
          searchResults.map((item) => (
            <div key={item.id} onClick={() => handleProductClick(item.id)}>
              {item.productName}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductSearchBar;
