/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import cartIcon from '../images/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';

const Nav = (props) => {
  const { homePath, shopPath, numCartProducts, toggleCartView } = props;

  return (
    <nav>
      <Link to={homePath} className="logo-container" />
      <ul>
        <li>
          <Link to={homePath}>Home</Link>
        </li>
        <li>
          <Link to={shopPath}>Shop</Link>
        </li>
        <li>
          <button
            type="button"
            className="cart-btn cart-toggle"
            onClick={() => toggleCartView()}
          >
            <img src={cartIcon} className=".icon" alt="cart icon" />
            <p className="num-products">({numCartProducts})</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
