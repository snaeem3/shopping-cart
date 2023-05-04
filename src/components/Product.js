/* eslint-disable react/prop-types */
const Product = (props) => {
  const { name, price, category, inStock, imgUrl } = props;

  return (
    <div className="product">
      <h1>{name}</h1>
      <img src={imgUrl} className="product-image" alt={name} />
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
