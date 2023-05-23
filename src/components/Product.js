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
        <img src={imgSrc} className="product-image" alt={name} />
      </Link>
      <div className="product-text">
        <Link to={`/shop/${name}`}>
          <h3>{name}</h3>
        </Link>
        <strong className="dollar-sign">{parseFloat(price).toFixed(2)}</strong>
        {inStock ? (
          <div className="in-stock-container">
            <strong className="in-stock">IN STOCK</strong>
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
          <strong className="out-of-stock">OUT OF STOCK</strong>
        )}
      </div>
    </div>
  );
};

export default Product;
