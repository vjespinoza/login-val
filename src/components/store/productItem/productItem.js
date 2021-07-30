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
} from "./productItem.style";
import { Button } from "./../../shared/Button";
import { Plus, Dash } from "@styled-icons/bootstrap";

const ProductItem = ({ shoe }) => {
    const [showSize, setShowSize] = useState(false);

    const toggleSize = () => {
        setShowSize((showSize) => !showSize);
    };

    return (
        <ProductCard>
            <ImageWrapper>
                <ProductImage src={`./img/${shoe.image}`} />
            </ImageWrapper>
            <ProductInfo>
                <TagWrapper>
                    {shoe.tags.map((tag, i) => {
                        return <ProductTag key={`tag-${i}`}>{tag}</ProductTag>;
                    })}
                </TagWrapper>
                <ProductPrice>
                    <sup>$</sup>
                    {shoe.price}
                </ProductPrice>
                <ProductName>{shoe.name}</ProductName>
                <ProductModel>Modelo: {shoe.model}</ProductModel>
                <ProductSeller>Vendedor: {shoe.seller}</ProductSeller>
                <SizeWrapper>
                    <label onClick={toggleSize}>
                        <Plus size="22" /> Tallas:
                    </label>
                    <ProductSize showSize={showSize}>
                        {shoe.sizes.map((size, i) => {
                            return (
                                <div key={`item-${shoe.id}-${i}`}>
                                    <input
                                        id={`input-${shoe.id}-${i}`}
                                        key={`input-${shoe.id}-${i}`}
                                        type="radio"
                                        name={shoe.id}
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
            <ActionWrapper>
                {/* <Action>
                    <QtyButton left>
                        <Dash size="18" />
                    </QtyButton>
                    <QtyInput type="number" min="1" value="1" disabled />
                    <QtyButton>
                        <Plus size="18" />
                    </QtyButton>
                </Action> */}
                <Button noMargin sFont>
                    Agregar al carrito
                </Button>
            </ActionWrapper>
        </ProductCard>
    );
};

export default ProductItem;
