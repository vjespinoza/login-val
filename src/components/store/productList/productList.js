import { useState, useEffect } from "react";
import ProductItem from "./../productItem/productItem";
import { StoreContainer } from "./productList.style";
import useFilterProducts from "../../../hooks/useFilterProducts";

const ProductList = ({ cart, setCart }) => {
    const { filter, filterChoice } = useFilterProducts();
    const [list, setList] = useState([]);

    useEffect(() => {
        let dataCopy = filter;

        setList(dataCopy);
    }, [filter, filterChoice]);

    return (
        <StoreContainer>
            {list.map((shoe) => {
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
