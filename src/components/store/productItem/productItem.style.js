import styled from "styled-components";
import { Button } from "../../shared/Button";

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    align-self: center;
    /* transform: ${(props) =>
        props.rotateCard ? "rotateY(180deg)" : "rotateY(0deg)"};
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform 1s; 
    transition: transform 1s; */

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
    font-size: 1rem;
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
        margin-bottom: 2px;
        transform: ${(props) =>
            props.showSize ? "rotate(90deg)" : "rotate(0deg)"};
        transition: transform ease-in-out 200ms;
    }
`;

export const ProductSize = styled.fieldset`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    outline: none;
    border: none;
    color: ${(props) => (props.showSize ? props.theme.colors.font : "#fff")};
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 20px;
    position: absolute;
    z-index: 10;
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
    width: 100%;
    justify-content: ${(props) =>
        props.showAction ? "space-between" : "center"};
    padding: 0 20px 20px 20px;
    margin-top: 20px;
`;

export const Action = styled.div`
    display: ${(props) => (props.showAction ? "flex" : "none")};
    position: relative;
    justify-content: ${(props) =>
        !props.showAction ? "space-between" : "center"};

    &:after {
        content: "Cantidad:";
        display: block;
        position: absolute;
        top: -70%;
        left: 0;
    }
`;

export const QtyInput = styled.input`
    text-align: center;
    width: 2rem;
    color: ${(props) => props.theme.colors.font};
    padding-right: 0rem;
    outline: none;
    border-top: 1px solid ${(props) => props.theme.colors.border};
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
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

export const AddToCart = styled(Button)`
    display: ${(props) => (props.showAction ? "none" : "block")};
    background-color: transparent;
    border-radius: 500px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
    padding: 0.5rem;
    box-shadow: none;
    transition: all ease-in-out 200ms;

    /* &:hover {
    } */
`;

export const AddConfirm = styled(Button)`
    display: ${(props) => (props.showAction ? "block" : "none")};
    background-color: transparent;
    border-radius: 500px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
    padding: 0.5rem;
    box-shadow: none;
    transition: all ease-in-out 200ms;
    position: relative;

    &:hover::after {
        content: "Confirmar";
        display: block;
        position: absolute;
        top: -100%;
        left: 50%;
        padding: 10px;
        border-radius: 4px;
        background: #050505;
        color: #fff;
        text-transform: capitalize;
        font-size: 0.7em;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    }
`;
