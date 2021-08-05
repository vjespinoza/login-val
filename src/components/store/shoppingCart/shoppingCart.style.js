import styled from "styled-components";

export const CartWrapper = styled.div`
    display: block;
    /* position: relative; */
    height: 100vh;
    width: 100vw;
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
    height: calc(100vh - 65px);
    grid-template-areas:
        "header header"
        "products-header products-header"
        "products products"
        "footer footer";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr 9fr 1fr;
    background: #fff;
    padding: 75px;
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

        & section + section > p {
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
    grid-template-rows: 1fr 9fr 1fr 1fr;
    background: #e9ecef;
    padding: 75px;
`;

export const SummaryDetails = styled.div`
    grid-area: summary;
    margin: 10px 0;
    padding-bottom: 50px;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const SummaryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
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
`;

export const Checkout = styled.div`
    grid-area: checkout;
`;
