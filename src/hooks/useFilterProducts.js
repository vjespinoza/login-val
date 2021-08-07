import { useState, useEffect } from "react";
import data from "./../data/products.json";

const useFilterProducts = () => {
    const [filterChoice, setFilterChoice] = useState({});

    const [filter, setFilter] = useState([]);

    const handleFilterChoice = (e) => {
        const { name, value } = e.target;

        setFilterChoice({ [name]: value });
    };

    useEffect(() => {
        let copyData = data;

        switch (filterChoice.filter) {
            case "aBottom":
                setFilter(
                    copyData.sort(function (a, b) {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0;
                    })
                );
                break;
            case "priceLow":
                setFilter(copyData.sort((a, b) => a.price - b.price));
                break;
            case "priceHigh":
                setFilter(copyData.sort((a, b) => b.price - a.price));
                break;
            case "forWomen":
                setFilter(
                    copyData.sort(function (a, b) {
                        if (a.gender < b.gender) {
                            return 1;
                        }
                        if (a.gender > b.gender) {
                            return -1;
                        }
                        return 0;
                    })
                );
                break;
            case "forMen":
                setFilter(
                    copyData.sort(function (a, b) {
                        if (a.gender < b.gender) {
                            return -1;
                        }
                        if (a.gender > b.gender) {
                            return 1;
                        }
                        return 0;
                    })
                );
                break;
            default:
                //aTop A-Z
                setFilter(
                    copyData.sort(function (a, b) {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    })
                );
        }
    }, [filterChoice]);

    return { filter, filterChoice, handleFilterChoice };
};

export default useFilterProducts;
