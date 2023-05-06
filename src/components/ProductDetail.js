/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  const { productId } = useParams();
  const { addItemToCart } = props;
  // Use the productId to fetch and display the appropriate product
  return (
    <div className="product-detail">
      {productId}
      <button
        className="add-to-cart-btn"
        type="button"
        onClick={() => addItemToCart(productId, 1)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetail;
