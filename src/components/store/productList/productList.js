import { useState, useEffect } from "react";
import ProductItem from "./../productItem/productItem";
import { StoreContainer } from "./productList.style";
import useFilterProducts from "../../../hooks/useFilterProducts";
import MagicGrid from "magic-grid";

const ProductList = ({
    prods,
    setProds,
    cart,
    setCart,
    filterChoice,
    setFilterChoice,
}) => {
    const [sorted, setSorted] = useState([]);

    const { sortedList } = useFilterProducts({
        filterChoice,
        setFilterChoice,
        prods,
        setProds,
    });

    useEffect(() => {
        setSorted(sortedList);
        console.log("load");
        if (sorted.length > 0) {
            let items = sorted.length;
            let magicGrid = new MagicGrid({
                container: "#container",
                static: true,
                items: items,
                gutter: 15,
                maxColumns: 4,
                useMin: true,
                useTransform: true,
                animate: true,
            });
            magicGrid.listen();
            magicGrid.positionItems();
        }
    }, [sorted, filterChoice]);

    return (
        <StoreContainer id="container">
            {sorted.map((shoe) => {
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
