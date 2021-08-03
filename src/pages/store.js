import styled from "styled-components";
import ProductList from "../components/store/productList/productList";
import StoreActionBar from "../components/store/storeActionBar/storeActionBar";
import { AppContainer } from "../components/AppContainer";

const StorePageContainer = styled(AppContainer)`
    width: 100vw;

    @media (max-width: 360px) {
        padding-top: 65px;
    }
`;

const Store = ({ cart, setCart }) => {
    return (
        <StorePageContainer>
            <StoreActionBar />
            <ProductList cart={cart} setCart={setCart} />
        </StorePageContainer>
    );
};

export default Store;
