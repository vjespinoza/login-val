import {
    CartWrapper,
    CartHeader,
    CartDetails,
    OrderSummary,
    CartProductsHeader,
    CartProducts,
    CartProductsFooter,
} from "./shoppingCart.style";
import { Trash } from "@styled-icons/bootstrap";

const ShoppingCart = ({ cart }) => {
    return (
        <CartWrapper>
            <CartDetails>
                <CartHeader>
                    <h2>Carrito de Compras</h2>
                    <h2>{cart.length} artículos</h2>
                </CartHeader>
                <CartProductsHeader>
                    <h4>Detalles</h4>
                    <h4>Cantidad</h4>
                    <h4>Precio</h4>
                    <h4>Total</h4>
                </CartProductsHeader>
                <CartProducts>
                    {cart.map((item) => {
                        return (
                            <article>
                                <section>
                                    <img
                                        src={`./img/${item.image}`}
                                        alt={item.name}
                                    />
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.model}</p>
                                        <span>
                                            <Trash size="20" />
                                        </span>
                                    </div>
                                </section>
                                <section>{item.quantity}</section>
                                <section>{item.price}</section>
                                <section>
                                    {(item.quantity * item.price).toFixed(2)}
                                </section>
                            </article>
                        );
                    })}
                </CartProducts>
                <CartProductsFooter>
                    <h4>Seguir comprando</h4>
                    <h4>Vaciar carrito</h4>
                </CartProductsFooter>
            </CartDetails>
            <OrderSummary></OrderSummary>
        </CartWrapper>
    );
};

export default ShoppingCart;
