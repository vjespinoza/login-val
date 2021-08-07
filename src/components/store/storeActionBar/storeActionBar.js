import { ActionBar, ProductFilter } from "./storeActionBar.style";
import { FunnelFill } from "@styled-icons/bootstrap/FunnelFill";
import useFilterProducts from "./../../../hooks/useFilterProducts";

const StoreActionBar = ({ prods, setProds, filterChoice, setFilterChoice }) => {
    const { handleFilterChoice } = useFilterProducts({
        filterChoice,
        setFilterChoice,
        prods,
        setProds,
    });

    return (
        <>
            <ActionBar>
                <FunnelFill size="18" />
                <ProductFilter
                    defaultValue={0}
                    id="filter-products"
                    name="filter"
                    onChange={(e) => handleFilterChoice(e)}
                >
                    <option value={0} disabled>
                        Filtrar por:
                    </option>
                    <option value="aTop">A-Z</option>
                    <option value="aBottom">Z-A</option>
                    <option value="priceLow">Menor precio</option>
                    <option value="priceHigh">Mayor precio</option>
                    <option value="forWomen">Tenis para damas</option>
                    <option value="forMen">Tenis para caballeros</option>
                </ProductFilter>
            </ActionBar>
        </>
    );
};

export default StoreActionBar;
