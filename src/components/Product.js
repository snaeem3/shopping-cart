/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import addIcon from '../images/add_FILL0_wght400_GRAD0_opsz48.svg';

const Product = (props) => {
  const { productId, name, price, category, inStock, imgSrc, addItemToCart } =
    props;
  const stockClassName = inStock ? 'inStock' : 'outOfStock';

  return (
    <div className={`product ${stockClassName} box-shadow`}>
      <Link to={`/shop/${name}`}>
        <h1>{name}</h1>
        <img src={imgSrc} className="product-image" alt={name} />
      </Link>
      <strong className="dollar-sign">{price.toFixed(2)}</strong>
      {inStock ? (
        <div className="in-stock-container">
          <p className="in-stock">IN STOCK</p>
          <button
            type="button"
            className="quick-add-btn"
            onClick={() => addItemToCart(name, 1)}
          >
            {/* + */}
            <img className="icon add" src={addIcon} alt="add icon" />
          </button>
        </div>
      ) : (
        <p className="out-of-stock">OUT OF STOCK</p>
      )}
    </div>
  );
};

export default Product;
