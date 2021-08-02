import products from "../../../data/products.json";
import ProductItem from "./../productItem/productItem";
import { StoreContainer } from "./productList.style";

const ProductList = ({ cart, setCart }) => {
    return (
        <StoreContainer>
            {products.map((shoe) => {
                return (
                    <ProductItem
                        key={shoe.id}
                        shoe={shoe}
                        cart={cart}
                        setCart={setCart}
                    />
                );
            })}
        </StoreContainer>
    );
};

export default ProductList;
