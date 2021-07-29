import products from "../../../data/products.json";
import ProductItem from "./../productItem/productItem";

const ProductList = () => {
    return (
        <div>
            {products.map((shoe) => {
                return <ProductItem key={shoe.id} shoe={shoe} />;
            })}
        </div>
    );
};

export default ProductList;
