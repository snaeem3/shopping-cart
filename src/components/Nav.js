/* eslint-disable react/prop-types */
const Nav = (props) => {
  const { homePath, shopPath } = props;

  return (
    <nav>
      <ul>
        <li>
          <a href={homePath}>Home</a>
        </li>
        <li>
          <a href={shopPath}>Shop</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
