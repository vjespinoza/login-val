import { useState } from "react";
import {
    ProductCard,
    ProductInfo,
    ProductImage,
    ImageWrapper,
    ProductName,
    ProductModel,
    ProductPrice,
    TagWrapper,
    ProductSeller,
    SizeWrapper,
    ProductSize,
    ProductTag,
    ActionWrapper,
    Action,
    QtyInput,
    QtyButton,
    AddToCart,
    AddConfirm,
} from "./productItem.style";
import { Plus, Dash, ChevronRight, BagCheck } from "@styled-icons/bootstrap";
import Swal from "sweetalert";
import useCart from "./../../../hooks/useCart";

const ProductItem = ({ shoe, cart, setCart }) => {
    const [showSize, setShowSize] = useState(false);
    const [showAction, setShowAction] = useState(false);

    const {
        cartItem,
        handleNewItem,
        handleRadioSelect,
        handleQuantity,
        handleConfirmItem,
    } = useCart({ cart, setCart, setShowAction });

    const toggleSize = () => {
        setShowSize((showSize) => !showSize);
    };

    const toggleAction = () => {
        setShowAction((showAction) => !showAction);
    };

    const checkSize = (e) => {
        !cartItem.size
            ? Swal({
                  title: "Elige una talla",
                  text: "Por favor selecciona la talla de tu tenis",
                  icon: "warning",
              })
            : (() => {
                  toggleAction();
                  handleNewItem(e, cartItem.size);
              })();
    };

    // const rotateCard = () => {
    //     console.log(cartItem.name);
    // };

    return (
        // <ProductCard rotateCard={cartItem.inCart}>
        <ProductCard>
            <ImageWrapper>
                <ProductImage
                    data-item-image={`${shoe.image}`}
                    id={`image-${shoe.id}`}
                    src={`./img/${shoe.image}`}
                />
            </ImageWrapper>
            <ProductInfo>
                <TagWrapper>
                    {shoe.tags.map((tag, i) => {
                        return <ProductTag key={`tag-${i}`}>{tag}</ProductTag>;
                    })}
                </TagWrapper>
                <ProductPrice
                    id={`price-${shoe.id}`}
                    data-item-price={`${shoe.price}`}
                >
                    {shoe.price.toLocaleString("en", {
                        style: "currency",
                        currency: "USD",
                    })}
                </ProductPrice>
                <ProductName id={`name-${shoe.id}`}>{shoe.name}</ProductName>
                <ProductModel id={`model-${shoe.id}`}>
                    Modelo: {shoe.model}
                </ProductModel>
                <ProductSeller id={`seller-${shoe.id}`}>
                    Vendedor: {shoe.seller}
                </ProductSeller>
                <SizeWrapper showSize={showSize}>
                    <label onClick={toggleSize}>
                        Tallas: <ChevronRight size="14" />
                    </label>
                    <ProductSize showSize={showSize}>
                        {shoe.sizes.map((size, i) => {
                            return (
                                <div key={`item-${shoe.id}-${i}`}>
                                    <input
                                        id={`input-${shoe.id}-${i}`}
                                        key={`input-${shoe.id}-${i}`}
                                        type="radio"
                                        onChange={(e) => {
                                            handleRadioSelect(e);
                                            toggleSize();
                                        }}
                                        name="size"
                                        value={size}
                                    ></input>
                                    <label
                                        htmlFor={`input-${shoe.id}-${i}`}
                                        key={`label-${shoe.id}-${i}`}
                                        value={size}
                                    >
                                        {size}
                                    </label>
                                </div>
                            );
                        })}
                    </ProductSize>
                </SizeWrapper>
            </ProductInfo>
            <ActionWrapper showAction={showAction}>
                <Action showAction={showAction}>
                    <QtyButton
                        onClick={(e) => handleQuantity(e)}
                        left
                        data-action="decrease"
                        data-origin="new-item"
                    >
                        <Dash size="18" />
                    </QtyButton>
                    <QtyInput
                        id={`quantity-${shoe.id}`}
                        type="number"
                        value={cartItem.quantity}
                        disabled
                    />
                    <QtyButton
                        onClick={(e) => handleQuantity(e)}
                        data-action="increase"
                        data-origin="new-item"
                    >
                        <Plus size="18" />
                    </QtyButton>
                </Action>
                <AddToCart
                    showAction={showAction}
                    noMargin
                    sFont
                    onClick={(e) => checkSize(e)}
                    id={shoe.id}
                >
                    Agregar al carrito
                </AddToCart>
                <AddConfirm
                    onClick={handleConfirmItem}
                    showAction={showAction}
                    noMargin
                >
                    <BagCheck size="15" />
                </AddConfirm>
            </ActionWrapper>
        </ProductCard>
    );
};

export default ProductItem;
