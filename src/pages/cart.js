const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div>
            <h1>Cart</h1>
            {cart.map((item, i) => {
                return <h3 key={i}>{item.name}</h3>;
            })}
        </div>
    );
};

export default Cart;
