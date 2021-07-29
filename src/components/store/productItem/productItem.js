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
} from "./productItem.style";

const ProductItem = ({ shoe }) => {
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
                    <label>Tallas:</label>
                    <ProductSize>
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
        </ProductCard>
    );
};

export default ProductItem;
