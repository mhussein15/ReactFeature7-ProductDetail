import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const { name, price, image, description } = props.product;
  return (
    <DetailWrapper>
      <button onClick={props.reloadData}>Go Back</button>
      <h1>{name}</h1>
      <img src={image} alt="I should be a product name" />
      <p>{description}</p>
      <p>{price}</p>
    </DetailWrapper>
  );
};

export default ProductDetail;
