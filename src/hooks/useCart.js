import { useState, useEffect } from "react";

const useCart = () => {
    const [cartItem, setCartItem] = useState({
        image: "",
        name: "",
        model: "",
        seller: "",
        size: "",
        price: 0,
        quantity: 1,
    });

    const handleRadioSelect = (e) => {
        const { name, value } = e.target;

        setCartItem({ ...cartItem, [name]: value });
    };

    const handleQuantity = (e) => {
        const targetButton = e.currentTarget.id;
        let counter = cartItem.quantity;

        if (targetButton === "increase") {
            setCartItem({
                ...cartItem,
                quantity: counter + 1,
            });
        } else {
            setCartItem({
                ...cartItem,
                quantity: counter - 1,
            });
        }
    };

    const handleNewItem = (e) => {
        const prodID = e.currentTarget.id;

        setCartItem({
            ...cartItem,
            image: document.getElementById(`image-${prodID}`).dataset.itemImage,
            name: document.getElementById(`name-${prodID}`).innerHTML,
            model: document.getElementById(`model-${prodID}`).innerHTML,
            seller: document.getElementById(`seller-${prodID}`).innerHTML,
            size: "",
            price: parseFloat(
                document.getElementById(`price-${prodID}`).dataset.itemPrice
            ),
            quantity: parseInt(
                document.getElementById(`quantity-${prodID}`).value
            ),
        });
    };

    useEffect(() => {
        console.log(cartItem);
    }, [cartItem]);

    return { cartItem, handleNewItem, handleRadioSelect, handleQuantity };
};

export default useCart;
