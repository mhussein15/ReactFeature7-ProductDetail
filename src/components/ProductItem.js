// Styling
import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  const changeViewAndProduct = (product) => {
    props.setproduct(product);
    props.handleView(product);
  };
  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
        onClick={() => changeViewAndProduct(product)}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </ProductWrapper>
  );
};

export default ProductItem;
