import styled from "styled-components";

export const AppContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        height: auto;
    }
`;
