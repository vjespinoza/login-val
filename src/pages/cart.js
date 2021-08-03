import ShoppingCart from "../components/store/shoppingCart/shoppingCart";

const Cart = ({ cart, setCart }) => {
    return <ShoppingCart cart={cart} setCart={setCart} />;
};

export default Cart;
