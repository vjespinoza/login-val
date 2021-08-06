import { useState, useEffect } from "react";
import Swal from "sweetalert";

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
    const [total, setTotal] = useState({ subTotal: 0, bigtotal: 0 });
    const [orderAddons, setOrderAddons] = useState({
        shipping: 0,
        promo: "",
        applyPromo: false,
    });

    const handleRadioSelect = (e) => {
        const { name, value } = e.target;

        setCartItem({ ...cartItem, [name]: value });
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
            let targetAction = e.currentTarget.dataset.action;
            let target = e.currentTarget.id;
            let index = cart.findIndex((x) => x.id === target);
            let counter = cart[index].quantity;

            if (targetAction === "increase") {
                cart[index] = { ...cart[index], quantity: counter + 1 };
                setCount(cart[index].quantity);
            } else if (targetAction === "decrease") {
                cart[index] = { ...cart[index], quantity: counter - 1 };
                setCount(cart[index].quantity);
            }
        }
    };

    const handleOrderAddons = (e) => {
        const { name, value } = e.target;

        setOrderAddons({
            ...orderAddons,
            [name]: value.toUpperCase(),
        });
    };

    const handleApplyPromo = () => {
        if (cart.length !== 0) {
            if (orderAddons.promo === "PROMO") {
                setOrderAddons({
                    ...orderAddons,
                    promo: "",
                    applyPromo: true,
                });
                Swal({
                    title: "Código aplicado con exito!",
                    text: "Tu orden tiene un descuento del 5%",
                    icon: "success",
                });
            } else {
                setOrderAddons({
                    ...orderAddons,
                    applyPromo: false,
                });
                Swal({
                    title: "Código invalido!",
                    text: "Verifica que tu código este correcto",
                    icon: "error",
                });
            }
        } else {
            Swal({
                title: "Carrito vacio!",
                text: "Agrega algunos productos al carrito para poder aplicar tu codigo",
                icon: "error",
            });
        }
    };

    const handleOrderTotal = () => {
        if (cart.length > 0) {
            //Sub total
            let sumArr = cart.map((z) => z.price * z.quantity);
            let sum = sumArr.reduce((x, y) => x + y);
            let discount = sum * 0.05;
            let applyDiscount = orderAddons.applyPromo && discount;

            // Big Total
            let bigTotal =
                sum + parseFloat(orderAddons.shipping) - applyDiscount;

            setTotal({
                subTotal: sum.toFixed(2),
                bigTotal: bigTotal.toFixed(2),
            });
        } else {
            setTotal({ subTotal: 0, bigTotal: 0 });
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
        handleApplyPromo,
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
