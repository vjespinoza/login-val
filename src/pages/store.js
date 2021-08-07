import { useState } from "react";
import styled from "styled-components";
import ProductList from "../components/store/productList/productList";
import StoreActionBar from "../components/store/storeActionBar/storeActionBar";
import { AppContainer } from "../components/AppContainer";
import data from "./../data/products.json";

const StorePageContainer = styled(AppContainer)`
    width: 100vw;

    @media (max-width: 360px) {
        padding-top: 65px;
    }
`;

const Store = ({ cart, setCart }) => {
    const [prods, setProds] = useState(data);
    const [filterChoice, setFilterChoice] = useState({});

    return (
        <StorePageContainer>
            <StoreActionBar
                prods={prods}
                setProds={setProds}
                filterChoice={filterChoice}
                setFilterChoice={setFilterChoice}
                cart={cart}
            />
            <ProductList
                prods={prods}
                setProds={setProds}
                filterChoice={filterChoice}
                setFilterChoice={setFilterChoice}
                cart={cart}
                setCart={setCart}
            />
        </StorePageContainer>
    );
};

export default Store;
