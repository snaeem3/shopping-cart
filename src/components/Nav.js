/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const { homePath, shopPath, numCartProducts, toggleCartView } = props;

  return (
    <nav>
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
            Cart ({numCartProducts})
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
