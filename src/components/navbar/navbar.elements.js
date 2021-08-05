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

    @media (max-width: 768px) {
        display: none;
    }
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

export const MobileMenuIcon = styled.span`
    display: none;
    line-height: 4;

    & svg {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        display: block;
    }
`;

export const NavBarMobile = styled.nav`
    padding: 40px;
    position: absolute;
    top: 50%;
    right: 8%;
    background: #fff;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    width: ${(props) => (props.toggleMobile ? "auto" : "0px")};
    height: ${(props) => (props.toggleMobile ? "auto" : "0px")};
    transform: ${(props) => (props.toggleMobile ? "scale(1)" : "scale(0)")};
    transform-origin: top right;
    transition: all ease-in-out 200ms;

    & div div h4 {
        margin-bottom: 40px;
    }

    & div div a + a {
        display: block;
        margin: 40px 0;
    }

    & div a + a {
        display: block;
        margin: 40px 0 0 0;
    }
`;
