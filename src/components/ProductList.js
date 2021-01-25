// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

const ProductList = (props) => {
  const [query, setQuery] = useState("");
  const { setproduct, handleView } = props;
  const productList = products
    .filter((product) => product.name.includes(query))
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        setproduct={setproduct}
        handleView={handleView}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
