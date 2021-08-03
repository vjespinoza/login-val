import { useState, useEffect } from "react";

const useCart = ({ cart, setCart, setShowAction }) => {
    const [cartItem, setCartItem] = useState({
        id: "",
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
            id: `cart-item-${cart.length}`,
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

    const handleConfirmItem = () => {
        setCart([...cart, cartItem]);
        setCartItem({
            id: "",
            image: "",
            name: "",
            model: "",
            seller: "",
            size: "",
            price: 0,
            quantity: 1,
        });
        setShowAction(false);
    };

    useEffect(() => {
        if (cartItem.quantity < 1) {
            setShowAction(false);
            setCartItem({
                ...cartItem,
                quantity: 1,
            });
        }
    }, [cartItem]);

    return {
        cartItem,
        handleNewItem,
        handleRadioSelect,
        handleQuantity,
        handleConfirmItem,
    };
};

export default useCart;

//validate if item is already in the cart
// const handleConfirmItem = () => {
//     if (cart.length === 0) {
//         setCart([...cart, cartItem]);
//     } else {
//         cart.map((item) => {
//             if (!Object.values(item).includes(`${cartItem.model}`)) {
//                 setCart([...cart, cartItem]);
//             } else {
//                 console.log("Item already in the cart");
//             }
//         });
//     }
// };
