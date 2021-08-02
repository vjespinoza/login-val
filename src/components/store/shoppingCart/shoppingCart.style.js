import styled from "styled-components";

export const CartWrapper = styled.div`
    display: block;
    /* position: relative; */
    height: 100vh;
    width: 100vw;
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

export const CartHeader = styled.div`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    margin-bottom: 20px;
    padding-bottom: 20px;
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

        & section span {
            cursor: pointer;
            margin-top: 20px;
        }
        & section span:hover {
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

    & h4 {
        cursor: pointer;

        &:hover {
            color: ${(props) => props.theme.colors.secondary};
        }
    }
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
        "sum-item-count sum-subtotal"
        "shipping shipping"
        "promo-code promo-code"
        "promo-action ."
        "total-title total-ammount"
        "checkout checkout";
    grid-template-columns: repeat(2, 1fr);
    background: ${(props) => props.theme.colors.border};
`;