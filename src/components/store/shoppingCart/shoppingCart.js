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
    SummaryDetails,
    SummaryHeader,
    OrderShipping,
    OrderPromo,
    SummaryTotal,
    Checkout,
} from "./shoppingCart.style";
import { Input } from "./../../shared/Input";
import { Select } from "./../../shared/select";
import { Button } from "./../../shared/Button";
import { Trash, Dash, Plus } from "@styled-icons/bootstrap";
import { Link } from "react-router-dom";
import useCart from "./../../../hooks/useCart";

const ShoppingCart = ({ cart, setCart }) => {
    const {
        total,
        handleEmptyCart,
        handleRemoveItem,
        handleQuantity,
        orderAddons,
        handleOrderAddons,
        handleApplyPromo,
    } = useCart({
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
                        <CartHeader details>
                            <h2>Carrito de Compras</h2>
                            <h2>{cart.length} artículos</h2>
                        </CartHeader>
                        <CartProductsHeader>
                            <h4>Detalles</h4>
                            <h4>Cantidad</h4>
                            <h4>Precio</h4>
                            <h4>Total</h4>
                        </CartProductsHeader>
                        <CartProducts id="container">
                            {cart.map((item, i) => {
                                return (
                                    <article key={i}>
                                        <section className="productInfo">
                                            <img
                                                src={`./img/${item.image}`}
                                                alt={item.name}
                                            />
                                            <div className="productInfoText">
                                                <h4>{item.name}</h4>
                                                <p>{item.model}</p>
                                                <p>Talla: {item.size}</p>
                                                <span className="trashIcon">
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
                                        <section>
                                            <Action>
                                                <QtyButton
                                                    onClick={(e) =>
                                                        handleQuantity(e)
                                                    }
                                                    left
                                                    data-action="decrease"
                                                    data-origin="cart-item"
                                                    id={item.id}
                                                    disabled={
                                                        item.quantity <= 1
                                                            ? true
                                                            : false
                                                    }
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
                                                    data-action="increase"
                                                    data-origin="cart-item"
                                                    id={item.id}
                                                >
                                                    <Plus size="18" />
                                                </QtyButton>
                                            </Action>
                                        </section>
                                        <section className="price">
                                            <p>
                                                {item.price.toLocaleString(
                                                    "en",
                                                    {
                                                        style: "currency",
                                                        currency: "USD",
                                                    }
                                                )}
                                            </p>
                                        </section>
                                        <section className="total">
                                            <p>
                                                {(
                                                    item.quantity * item.price
                                                ).toLocaleString("en", {
                                                    style: "currency",
                                                    currency: "USD",
                                                })}
                                            </p>
                                            <span className="total-mobile">
                                                Total:{" "}
                                            </span>
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
            <OrderSummary>
                <CartHeader>
                    <h2>Resumen de la orden</h2>
                </CartHeader>
                <SummaryDetails>
                    <SummaryHeader>
                        <h4>{cart.length} artículos</h4>
                        <h4>{total.subTotal}</h4>
                    </SummaryHeader>
                    <OrderShipping>
                        <h4>Envío:</h4>
                        <Select
                            id="shipping"
                            name="shipping"
                            onChange={(e) => handleOrderAddons(e)}
                        >
                            <option value={0}>
                                Gratis (7 - 10 días) ** $0
                            </option>
                            <option value={5}>
                                Standard (3 - 5 días) ** $5
                            </option>
                            <option value={10}>Premium (1 día) ** $10</option>
                        </Select>
                    </OrderShipping>
                    <OrderPromo>
                        <h4>Promo: (-5%)</h4>
                        <Input
                            bgColor
                            promo
                            type="text"
                            placeholder="Ingresa tu código"
                            onChange={(e) => handleOrderAddons(e)}
                            name="promo"
                            value={orderAddons.promo}
                        />
                        <Button onClick={handleApplyPromo} primary>
                            Aplicar Promo
                        </Button>
                    </OrderPromo>
                </SummaryDetails>
                <SummaryTotal>
                    <h4>Total:</h4>
                    <h4>{total.bigTotal}</h4>
                </SummaryTotal>
                <Checkout>
                    <Button>Checkout</Button>
                </Checkout>
            </OrderSummary>
        </CartWrapper>
    );
};

export default ShoppingCart;
