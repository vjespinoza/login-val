import styled from "styled-components";
import { Select } from "./../../shared/select";

export const ActionBar = styled.nav`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 320px;
    height: 3rem;
    margin: 115px 0 50px 0;

    & svg {
        position: absolute;
        top: 0.8rem;
        left: 0;
        pointer-events: none;
    }

    @media (max-width: 360px) {
        margin: 30px 0 40px 0;
    }
`;

export const ProductFilter = styled(Select)`
    padding-left: 25px;
    margin: 0;
    height: 100%;
    cursor: pointer;
    font-size: 1rem;
`;
