/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { productId, name, price, category, inStock, imgUrl } = props;
  const stockClassName = inStock ? 'inStock' : 'outOfStock';

  return (
    <div className={`product ${stockClassName}`}>
      <Link to={`/shop/${name}`}>
        <h1>{name}</h1>
        <img src={imgUrl} className="product-image" alt={name} />
      </Link>
      <strong>{price}</strong>
      {inStock ? (
        <span className="in-stock">IN STOCK</span>
      ) : (
        <span className="out-of-stock">OUT OF STOCK</span>
      )}
    </div>
  );
};

export default Product;
