import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-content: center;
    padding: 0 5vw;
    height: 65px;
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
    list-style: none;
    height: 100%;
`;

export const NavbarListItem = styled.li`
    font-weight: 500;
    font-size: 0.9rem;
    margin-right: 40px;
    line-height: 2;

    &:last-child {
        margin-right: 0;
    }
`;
