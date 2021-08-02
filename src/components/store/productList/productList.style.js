import styled from "styled-components";

export const StoreContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 90%;
    min-width: 300px;
    max-width: 1060px;
    gap: 20px;
    margin: 0 auto 50px auto;
    justify-items: center;
`;
