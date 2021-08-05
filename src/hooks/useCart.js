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
    const [count, setCount] = useState();
    const [total, setTotal] = useState(0);
    const [orderAddons, setOrderAddons] = useState({ shipping: 0, promo: 0 });

    const handleRadioSelect = (e) => {
        const { name, value } = e.target;

        setCartItem({ ...cartItem, [name]: value });
    };

    const handleQuantity = (e) => {
        const targetButton = e.currentTarget.dataset.action;
        const dataOrigin = e.currentTarget.dataset.origin;

        //Edit new item quantity before adding it to cart
        if (dataOrigin === "new-item") {
            let newCount = cartItem.quantity;
            if (targetButton === "increase") {
                setCartItem({
                    ...cartItem,
                    quantity: newCount + 1,
                });
            } else if (targetButton === "decrease") {
                setCartItem({
                    ...cartItem,
                    quantity: newCount - 1,
                });
            }
        }

        //Edit quantity of items already added to the cart
        if (dataOrigin === "cart-item") {
            let id = parseInt(e.currentTarget.id.slice(-2)) * -1;
            let cartCount = cart[id].quantity;
            let copy = cart;

            if (targetButton === "plus") {
                copy[id] = { ...copy[id], quantity: cartCount + 1 };
                setCount(copy[id].quantity);
            } else if (targetButton === "minus") {
                copy[id] = { ...copy[id], quantity: cartCount - 1 };
                setCount(copy[id].quantity);
            }

            setCart(copy);

            sessionStorage.setItem("CART", JSON.stringify(cart));
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

    const handleEmptyCart = () => {
        let cartCopy = cart;

        cartCopy = [];

        setCart(cartCopy);
    };

    const handleRemoveItem = (e) => {
        let targetID = e.currentTarget.dataset.id;

        let cartCopy = cart;

        let filterItem = cartCopy.filter((item) => {
            return item.id !== targetID;
        });

        setCart(filterItem);
    };

    const handleOrderAddons = (e) => {
        const { name, value } = e.target;

        setOrderAddons({
            ...orderAddons,
            [name]: value,
        });
    };

    const handleOrderTotal = () => {
        if (cart.length > 0) {
            //Sub total
            let sumArr = cart.map((z) => z.price * z.quantity);
            let sum = sumArr.reduce((x, y) => x + y);

            if (orderAddons.shipping > 0) {
                return sum + orderAddons.shipping;
            }

            if (orderAddons.promo === "promo") {
                return sum - sum * 0.05;
            }

            setTotal(sum.toFixed(2));
        } else {
            setTotal(0);
        }
    };

    useEffect(() => {
        handleOrderTotal();
    }, [count, cart, orderAddons]);

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
        total,
        setCartItem,
        handleNewItem,
        handleRadioSelect,
        handleQuantity,
        handleConfirmItem,
        handleEmptyCart,
        handleRemoveItem,
        orderAddons,
        handleOrderAddons,
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
