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
    margin: 10px 0 10px 0;
    color: ${(props) => props.theme.colors.secondary};
`;

export const ProductModel = styled.p`
    grid-area: model;
    font-size: 0.8rem;
    margin-bottom: 5px;
`;

export const ProductPrice = styled.p`
    grid-area: price;
    font-size: 1.5rem;
    text-align: right;
    color: ${(props) => props.theme.colors.secondary};
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
    position: relative;

    & > label {
        font-size: 1rem;
        margin-bottom: 10px;
        cursor: pointer;
        width: fit-content;
    }

    & > label > svg {
        margin-bottom: 4px;
    }
`;

export const ProductSize = styled.fieldset`
    /* display: ${(props) => (props.showSize ? "flex" : "none")}; */
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-content: flex-start;
    outline: none;
    border: none;
    color: ${(props) => (props.showSize ? props.theme.colors.font : "#fff")};
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 20px;
    position: absolute;
    top: 50px;
    left: 0;
    transform: ${(props) => (props.showSize ? "scale(1)" : "scale(0)")};
    transform-origin: top left;
    transition: all ease-in-out 200ms;

    & input {
        display: none;
    }

    & input:checked + label {
        outline: 2px solid ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.secondary};
        font-weight: bold;
    }

    & label {
        display: block;
        cursor: pointer;
        outline: 1px solid
            ${(props) => (props.showSize ? props.theme.colors.font : "#fff")};
        padding: 5px 8px;
        width: 2.5rem;
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

export const ActionWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;

export const Action = styled.div`
    display: flex;
    justify-content: center;
`;

export const QtyInput = styled.input`
    text-align: center;
    width: 2rem;
    color: ${(props) => props.theme.colors.font};
    padding-right: 0rem;
    outline: none;
    border-top: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
    border-left: none;
    border-right: none;
    background-color: transparent;
    width: 2rem;
    height: 2rem;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus {
        outline: none;
        border: none;
    }
`;

export const QtyButton = styled.button`
    outline: none;
    border: 1px solid #ced4da;
    border-radius: ${(props) =>
        props.left ? "500px 0 0 500px" : "0 500px 500px 0"};
    padding: ${(props) => (props.left ? "0 0 0 5px" : "0 5px 0 0")};
    background-color: transparent;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    text-align: center;
`;
