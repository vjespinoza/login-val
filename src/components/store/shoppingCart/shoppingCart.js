import { useState, useEffect } from "react";

import {
    CartWrapper,
    CartHeader,
    CartDetails,
    OrderSummary,
    CartProductsHeader,
    CartProducts,
    CartProductsFooter,
    EmptyCart,
    Action,
    QtyInput,
    QtyButton,
} from "./shoppingCart.style";
import { Trash, Dash, Plus } from "@styled-icons/bootstrap";
import { Link } from "react-router-dom";
import useCart from "./../../../hooks/useCart";

const ShoppingCart = ({ cart, setCart }) => {
    const { handleEmptyCart, handleRemoveItem, handleQuantity } = useCart({
        cart,
        setCart,
    });

    return (
        <CartWrapper>
            <CartDetails>
                {cart.length === 0 ? (
                    <EmptyCart>
                        <h2>
                            Tu carrito está vacio <span>&#128557;</span>{" "}
                        </h2>
                        <Link to="/store">
                            <h3>Vuelve a la tienda</h3>
                        </Link>
                    </EmptyCart>
                ) : (
                    <>
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
                            {cart.map((item, i) => {
                                return (
                                    <article key={i}>
                                        <section>
                                            <img
                                                src={`./img/${item.image}`}
                                                alt={item.name}
                                            />
                                            <div>
                                                <h4>{item.name}</h4>
                                                <p>{item.model}</p>
                                                <span>
                                                    <Trash
                                                        onClick={(e) =>
                                                            handleRemoveItem(e)
                                                        }
                                                        data-id={item.id}
                                                        size="20"
                                                    />
                                                </span>
                                            </div>
                                        </section>
                                        {/* <section>{item.quantity}</section> */}
                                        <section>
                                            <Action>
                                                <QtyButton
                                                    onClick={(e) =>
                                                        handleQuantity(e)
                                                    }
                                                    left
                                                    data-action="minus"
                                                    data-origin="cart-item"
                                                    id={item.id}
                                                >
                                                    <Dash size="18" />
                                                </QtyButton>
                                                <QtyInput
                                                    id={`quantity-${item.id}`}
                                                    type="number"
                                                    value={item.quantity}
                                                    disabled
                                                />
                                                <QtyButton
                                                    onClick={(e) =>
                                                        handleQuantity(e)
                                                    }
                                                    data-action="plus"
                                                    data-origin="cart-item"
                                                    id={item.id}
                                                >
                                                    <Plus size="18" />
                                                </QtyButton>
                                            </Action>
                                        </section>
                                        <section>
                                            <p>
                                                <sup>$</sup>
                                                {item.price}
                                            </p>
                                        </section>
                                        <section>
                                            <p>
                                                <sup>$</sup>
                                                {(
                                                    item.quantity * item.price
                                                ).toFixed(2)}
                                            </p>
                                        </section>
                                    </article>
                                );
                            })}
                        </CartProducts>
                        <CartProductsFooter>
                            <Link to="/store">
                                <h4>Seguir comprando</h4>
                            </Link>
                            <h4 onClick={handleEmptyCart}>Vaciar carrito</h4>
                        </CartProductsFooter>
                    </>
                )}
            </CartDetails>
            <OrderSummary></OrderSummary>
        </CartWrapper>
    );
};

export default ShoppingCart;
