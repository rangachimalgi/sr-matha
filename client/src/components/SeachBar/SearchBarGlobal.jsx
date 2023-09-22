import { useState } from "react";
import { products } from "../../utils/products";
import { healthPackagesArray } from "../../pages/HealthPackages";
import { useNavigate } from "react-router-dom";
import "./searchbarglobal.css";

const ProductSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const searchTerm = inputValue.toLowerCase();

    const filteredProducts = products.filter((item) =>
      item.productName
        ? item.productName.toLowerCase().includes(searchTerm)
        : false
    );

    const filteredPackages = healthPackagesArray.filter((item) =>
      item.productName
        ? item.productName.toLowerCase().includes(searchTerm)
        : false
    );

    const combinedResults = [...filteredProducts, ...filteredPackages];
    setSearchResults(combinedResults);
    console.log("Filtered Products:", filteredProducts);
    console.log("Filtered Packages:", filteredPackages);
    console.log("Combined Results:", combinedResults);
  };

  const handleChange = (input) => {
    setInputValue(input.target.value);
    handleSearch();
  };

  const navigate = useNavigate();

  const handleProductClick = (item) => {
    if (item.type === "package") {
      navigate(`/health/${item.id}`);
    } else {
      navigate(`/shop/${item.id}`);
    }

    setInputValue("");
    setSearchResults([]);
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
          searchResults.map((item, index) => (
            <div
              key={index} // temporary solution
              onClick={() => handleProductClick(item)}
            >
              {item.productName || item.packageName}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductSearchBar;
