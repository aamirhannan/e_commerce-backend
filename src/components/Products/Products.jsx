import { myProduct } from "../data/product";

// mapping product data
const Products = () => {
  return (
    <div className="products-container">
      {myProduct?.map((product, index) => (
        <div key={index} className="product">
          <img src={product?.image} alt={product?.image} />
          <div className="product-name">{product?.name}</div>
          <button className="yellow-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
