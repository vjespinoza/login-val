import styled from "styled-components";

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    width: 100vw;

    @media (max-width: 960px) {
        position: relative;
    }
`;

export const CartHeader = styled.div`
    grid-area: ${(props) => (props.details ? "header" : "sum-title")};
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    margin-bottom: 20px;
    padding-bottom: 20px;
`;

/**** CART DETAILS ****/
export const CartDetails = styled.div`
    display: grid;
    position: absolute;
    top: 65px;
    left: 0;
    width: 70vw;
    grid-template-areas:
        "header header"
        "products-header products-header"
        "products products"
        "footer footer";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    background: #fff;
    padding: 75px;

    @media (max-width: 1060px) {
        padding: 40px;
    }

    @media (max-width: 960px) {
        position: static;
        width: 100vw;
        height: unset;
        margin-top: 65px;
    }

    @media (max-width: 768px) {
        grid-template-areas:
            "header header"
            "products products"
            "footer footer";
        grid-template-rows: 1fr auto 1fr;
    }
`;

export const CartProductsHeader = styled.div`
    grid-area: products-header;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin: 20px 0 40px 0;

    & h4 + h4 {
        text-align: center;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const CartProducts = styled.div`
    grid-area: products;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};

    & article + article {
        margin-top: 30px;
    }

    & article {
        display: grid;
        height: 150px;
        grid-template-columns: 3fr 1fr 1fr 1fr;

        & :nth-child(1) {
            display: flex;

            & div {
                display: flex;
                flex-direction: column;
                margin-left: 20px;
            }

            & div > h4 {
                text-transform: uppercase;
            }
        }

        & section + section {
            text-align: center;
        }

        & section + section p {
            justify-content: center;
        }

        & section span svg {
            cursor: pointer;
            margin-top: 20px;
        }
        & section span svg:hover {
            color: red;
        }

        & section > img {
            width: 150px;
            height: 150px;
            object-fit: contain;
            object-position: top;
        }

        & section > .total-mobile {
            display: none;

            @media (max-width: 768px) {
                display: block;
            }
        }
    }

    @media (max-width: 768px) {
        & article {
            display: flex;
            flex-direction: column;
            height: fit-content;
            border: 1px solid ${(props) => props.theme.colors.border};
        }

        & article > .productInfo {
            display: flex;
            flex-direction: column;

            & img {
                width: 100%;
                margin-bottom: 10px;
            }

            & .productInfoText {
                padding: 20px 0;
                position: relative;

                & .trashIcon {
                    position: absolute;
                    top: 0;
                    right: 20px;
                }
            }
        }

        & .price {
            display: none;
        }

        & .total {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            width: 100%;
            padding: 20px;
            position: relative;
            font-weight: bold;
        }
    }
`;

export const CartProductsFooter = styled.div`
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding-bottom: 30px;

    & h4,
    & a {
        cursor: pointer;
        color: ${(props) => props.theme.colors.font};

        &:hover {
            color: ${(props) => props.theme.colors.secondary};
        }
    }
`;

export const EmptyCart = styled.div`
    & h2 {
        margin-bottom: 20px;
    }

    & a {
        cursor: pointer;
        color: ${(props) => props.theme.colors.font};

        &:hover {
            color: ${(props) => props.theme.colors.secondary};
        }
    }
`;

export const Action = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 20px 0;
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
    padding: 5px;
    background-color: transparent;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    text-align: center;
`;

/**** ORDER SUMMARY ****/
export const OrderSummary = styled.div`
    display: grid;
    position: fixed;
    width: 30vw;
    height: calc(100vh - 65px);
    top: 65px;
    right: 0;
    grid-template-areas:
        "sum-title sum-title"
        "summary summary"
        "sum-total sum-total"
        "checkout checkout";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: fit-content(100%);
    background: #e9ecef;
    padding: 75px;

    @media (max-width: 1060px) {
        display: flex;
        flex-direction: column;
        padding: 40px;
    }

    @media (max-width: 960px) {
        position: static;
        width: 100vw;
        height: fit-content;
        margin-top: 0;
    }
`;

export const SummaryDetails = styled.div`
    grid-area: summary;
    margin: 10px 0;
    padding-bottom: 50px;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const SummaryHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-transform: uppercase;

    @media (max-width: 1060px) {
        flex-direction: column;

        & h4 {
            margin-bottom: 10px;
        }
    }

    @media (max-width: 960px) {
    }
`;

export const OrderShipping = styled.div`
    & h4 {
        text-transform: uppercase;
        font-size: 0.9rem;
        margin: 30px 0 10px 0;
    }
`;

export const OrderPromo = styled.div`
    & h4 {
        text-transform: uppercase;
        font-size: 0.9rem;
        margin: 30px 0 10px 0;
    }
`;

export const SummaryTotal = styled.div`
    grid-area: sum-total;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const Checkout = styled.div`
    grid-area: checkout;
`;
