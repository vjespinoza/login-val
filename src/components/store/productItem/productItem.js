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
import { Plus, Dash, BagCheck } from "@styled-icons/bootstrap";
import useCart from "./../../../hooks/useCart";

const ProductItem = ({ shoe, cart, setCart }) => {
    const [showAction, setShowAction] = useState(false);

    const {
        cartItem,
        handleNewItem,
        handleSizeSelect,
        handleQuantity,
        handleConfirmItem,
    } = useCart({ cart, setCart, setShowAction });

    const toggleAction = () => {
        setShowAction((showAction) => !showAction);
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
                <SizeWrapper showAction={showAction}>
                    <ProductSize
                        onChange={(e) => {
                            handleSizeSelect(e);
                        }}
                        id={`input-${shoe.id}`}
                        name="size"
                        defaultValue={shoe.sizes[0]}
                    >
                        {shoe.sizes.map((size, i) => {
                            return (
                                <option
                                    key={`item-${shoe.id}-${i}`}
                                    value={size}
                                >
                                    {size}
                                </option>
                            );
                        })}
                    </ProductSize>
                </SizeWrapper>
                <ActionWrapper showAction={showAction}>
                    <Action>
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
                </ActionWrapper>
            </ProductInfo>
            <AddToCart
                showAction={showAction}
                noMargin
                sFont
                onClick={(e) => {
                    handleNewItem(e);
                    toggleAction();
                }}
                id={shoe.id}
            >
                Agregar al carrito
            </AddToCart>
            <AddConfirm
                onClick={handleConfirmItem}
                showAction={showAction}
                sFont
                noMargin
            >
                Confirmar <BagCheck size="15" />
            </AddConfirm>
        </ProductCard>
    );
};

export default ProductItem;
