import styled from "styled-components";

export const AppContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 65px);

    @media (max-width: 768px) {
        height: auto;
    }
`;
