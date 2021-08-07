import { useEffect } from "react";

const useFilterProducts = ({
    filterChoice,
    setFilterChoice,
    prods,
    setProds,
}) => {
    const handleFilterChoice = (e) => {
        const { name, value } = e.target;

        setFilterChoice({ [name]: value });
    };

    // useEffect(() => {
    let sortedList = [];
    switch (filterChoice.filter) {
        case "aBottom":
            sortedList = prods.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
            break;
        case "priceLow":
            sortedList = prods.sort((a, b) => a.price - b.price);
            break;
        case "priceHigh":
            sortedList = prods.sort((a, b) => b.price - a.price);
            break;
        case "forWomen":
            sortedList = prods.filter((x) => {
                return x.gender !== "men";
            });
            break;
        case "forMen":
            sortedList = prods.filter((x) => {
                return x.gender !== "women";
            });
            break;
        default:
            //aTop A-Z
            sortedList = prods.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
    }
    // }, [filterChoice]);

    return { handleFilterChoice, sortedList };
};

export default useFilterProducts;
