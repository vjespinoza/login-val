import products from "../../../data/products.json";
import ProductItem from "./../productItem/productItem";
import { StoreContainer } from "./productList.style";

const ProductList = () => {
    return (
        <StoreContainer>
            {products.map((shoe) => {
                return <ProductItem key={shoe.id} shoe={shoe} />;
            })}
        </StoreContainer>
    );
};

export default ProductList;
