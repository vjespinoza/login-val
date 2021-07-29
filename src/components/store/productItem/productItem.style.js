import styled from "styled-components";

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    margin-bottom: 20px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);

    &:hover > div img {
        transform: scale(1.1);
        transition: all ease-in-out 200ms;
    }
`;

export const ProductInfo = styled.div`
    display: grid;
    grid-template-areas:
        "price price price price"
        "tags tags tags tags"
        "name name name name"
        "model model model model"
        "seller seller seller seller"
        "size size size size";
    grid-template-columns: repeat(4, 1fr);
    padding: 20px;
`;

export const ImageWrapper = styled.div`
    overflow: hidden;
`;

export const ProductImage = styled.img`
    grid-area: image;
    width: 100%;
    transition: all ease-in-out 200ms;
`;

export const ProductName = styled.h3`
    grid-area: name;
    text-transform: uppercase;
    margin: 20px 0 10px 0;
    color: ${(props) => props.theme.colors.secondary};
`;

export const ProductModel = styled.p`
    grid-area: model;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ProductPrice = styled.p`
    grid-area: price;
    font-size: 1.5rem;
    text-align: right;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 20px;
`;

export const ProductSeller = styled.span`
    grid-area: seller;
    font-size: 0.8rem;
    margin-bottom: 5px;
`;

export const SizeWrapper = styled.form`
    grid-area: size;
    display: flex;
    flex-direction: column;
    padding-top: 20px;

    & > label {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;

export const ProductSize = styled.fieldset`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    height: 60px;
    align-content: flex-start;
    outline: none;
    border: none;
    color: ${(props) => props.theme.colors.font};

    & input {
        display: none;
    }

    & input:checked + label {
        outline: 2px solid ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.secondary};
        font-weight: bold;
    }

    & label {
        display: block-size;
        cursor: pointer;
        outline: 1px solid ${(props) => props.theme.colors.font};
        padding: 5px 8px;
        width: 3rem;
        text-align: center;
        font-size: 0.8rem;
    }
`;

export const TagWrapper = styled.div`
    grid-area: tags;
`;

export const ProductTag = styled.span`
    border: 1px solid ${(props) => props.theme.colors.font};
    color: ${(props) => props.theme.colors.font};
    font-size: 0.6rem;
    padding: 3px 5px;
    margin-right: 5px;
`;
