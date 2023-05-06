/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const { homePath, shopPath, numCartProducts } = props;

  return (
    <nav>
      <ul>
        <li>
          <Link to={homePath}>Home</Link>
        </li>
        <li>
          <Link to={shopPath}>Shop</Link>
        </li>
        <li>Cart {numCartProducts}</li>
      </ul>
    </nav>
  );
};

export default Nav;
