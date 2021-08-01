import styled from "styled-components";

export const StoreContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    width: 100%;
    min-width: 20rem;
    max-width: 70rem;
    gap: 1.5rem;
    margin: 0 auto;
    justify-items: center;
`;
