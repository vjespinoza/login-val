import styled from "styled-components";
import { Button } from "../../shared/Button";
import { Select } from "../../shared/select";
import { Input } from "../../shared/Input";

export const ProductCard = styled.div`
    display: inline-block;
    flex-direction: column;
    width: 320px;
    height: 535px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;

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
        "size size qty qty";

    grid-template-columns: repeat(4, 1fr);
    padding: 20px 30px;
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
    visibility: ${(props) => (props.showAction ? "visible" : "hidden")};
    transform: ${(props) => (props.showAction ? "scaleY(1)" : "scaleY(0)")};
    transform-origin: top center;
    transition: all ease-in-out 200ms;
    position: relative;
    flex-direction: column;
    padding-top: 20px;
    margin-top: 20px;

    &::after {
        content: "Tallas:";
        position: absolute;
        width: 100%;
        top: 5px;
        left: 0;
    }
`;

export const ProductSize = styled(Select)`
    display: flex;
    width: 75px;
    padding: 0 8px;
    cursor: pointer;
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
    grid-area: qty;
    display: flex;
    visibility: ${(props) => (props.showAction ? "visible" : "hidden")};
    transform: ${(props) => (props.showAction ? "scaleY(1)" : "scaleY(0)")};
    transform-origin: top center;
    transition: all ease-in-out 200ms;
    justify-content: flex-end;
    width: 100%;
    padding-top: 20px;
    margin-top: 20px;
`;

export const Action = styled.div`
    display: flex;
    justify-content: center;
    position: relative;

    &:after {
        position: absolute;
        content: "Cantidad:";
        width: 100%;
        top: -15px;
        left: 0;
    }
`;

export const QtyInput = styled(Input)`
    text-align: center;
    width: 2rem;
    color: ${(props) => props.theme.colors.font};
    padding-right: 0rem;
    background-color: #fff;
    width: 2rem;
    height: 3rem;
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
    border-style: none none solid none;
    border-width: 2px;
    border-color: ${(props) =>
        props.ligth ? "white" : props.theme.colors.font};
    background-color: #fff;
    width: 2rem;
    height: 3rem;
    cursor: pointer;
    text-align: center;
`;

export const AddToCart = styled(Button)`
    display: ${(props) => (props.showAction ? "none" : "block")};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
    height: 2.5rem;
    padding: 0 0.8rem;
    box-shadow: none;
    transition: all ease-in-out 200ms;
    margin: 0 auto;
`;

export const AddConfirm = styled(Button)`
    display: ${(props) => (props.showAction ? "block" : "none")};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
    height: 2.5rem;
    padding: 0 0.8rem;
    box-shadow: none;
    transition: all ease-in-out 200ms;
    position: relative;
    margin: 0 auto;

    & svg {
        margin: 0 0 5px 2px;
    }
`;
