import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    justify-content: space-between;
    align-content: center;
    padding: 0 5vw;
    height: 65px;
    background: #fff;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);

    & button {
        margin-top: 0;
        font-size: 65%;
    }
`;

export const NavbarList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const NavbarListItem = styled.li`
    list-style: none;
    font-weight: 500;
    font-size: 0.9rem;
    margin: ${(props) => (props.logo ? "0" : "0 0 5px 0")};
    line-height: 2;

    &:last-child {
        margin: 0 0 0 15px;
    }

    & span:first-child {
        margin: 0 10px;
    }

    & span {
        cursor: pointer;
        transition: color ease-in-out 200ms;
    }

    & span:hover {
        color: ${(props) => props.theme.colors.secondary};
        transition: color ease-in-out 200ms;
    }
`;

export const NavbarLogo = styled.img`
    width: 50%;
    height: 100%;
    cursor: pointer;
`;
