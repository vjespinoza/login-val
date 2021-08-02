import styled from "styled-components";

export const ActionBar = styled.nav`
    display: flex;
    width: 90%;
    min-width: 300px;
    max-width: 1060px;
    height: 3.5rem;
    margin: 115px 0 50px 0;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 360px) {
        display: none;
    }
`;

export const MobileFilter = styled.nav`
    display: none;

    @media (max-width: 360px) {
        display: block;
        margin: 20px 0 20px 80%;
        padding: 5px;
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.colors.font};
    }
`;
