import {
    ProductCard,
    ProductImage,
    ProductName,
    ProductModel,
    ProductPrice,
    ProductDescription,
    ProductSeller,
    ProductSize,
    ProductTag,
} from "./productItem.style";

const ProductItem = ({ shoe }) => {
    return (
        <ProductCard>
            <ProductImage src={`./img/${shoe.image}`} />
            {shoe.tags.map((tag, i) => {
                return <ProductTag key={`tag-${i}`}>{tag}</ProductTag>;
            })}
            <ProductPrice>
                <sup>$</sup>
                {shoe.price}
            </ProductPrice>
            <ProductName>{shoe.name}</ProductName>
            <ProductModel>{shoe.model}</ProductModel>
            <ProductSeller>{shoe.seller}</ProductSeller>
            <ProductDescription>
                {shoe.description.map((item, i) => {
                    return <li key={`item-${i}`}>{item}</li>;
                })}
            </ProductDescription>
            <ProductSize>
                {shoe.sizes.map((size, i) => {
                    return (
                        <option key={`opt-${i}`} value={size}>
                            {size}
                        </option>
                    );
                })}
            </ProductSize>
        </ProductCard>
    );
};

export default ProductItem;
