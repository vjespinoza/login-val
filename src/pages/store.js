import ProductList from "../components/store/productList/productList";
import StoreActionBar from "../components/store/storeActionBar/storeActionBar";

const Store = ({ cart, setCart }) => {
    return (
        <>
            <StoreActionBar />
            <ProductList cart={cart} setCart={setCart} />
        </>
    );
};

export default Store;
