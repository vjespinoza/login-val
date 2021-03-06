import styled from "styled-components";

export const Input = styled.input`
    font-weight: bold;
    font-size: 0.9rem;
    height: 3rem;
    width: 100%;
    padding: ${(props) => (props.promo ? "0 0.5rem" : "0")};
    padding-right: 35px;
    border-style: none none solid none;
    border-width: 2px;
    border-color: ${(props) =>
        props.ligth ? "white" : props.theme.colors.font};
    margin-bottom: 1.5rem;
    background-color: ${(props) => (props.bgColor ? "#fff" : "transparent")};
    color: ${(props) => (props.ligth ? "white" : props.theme.colors.font)};

    &::placeholder {
        visibility: ${(props) => (props.promo ? "visible" : "hidden")};
    }

    &:focus {
        outline: none;
        border-color: ${(props) =>
            props.primary
                ? props.theme.colors.primary
                : props.theme.colors.secondary};
        transition: all ease-in-out 200ms;
    }

    &:focus-within ~ label,
    &:not(:placeholder-shown) ~ label {
        transform: translate(-5px, -22px) scale(0.7);
        transition: transform ease-in-out 200ms;
        transform-origin: left;
    }
`;
