import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    width: 100%;
    height: 100%;

    @media screen and (max-width: 890px) {
        grid-template-columns: 1fr;
        grid-grid-template-rows: auto;
    }
`;

export const Data = styled.div`
    grid-column: span 2;

    @media screen and (max-width: 890px) {
        grid-row: 2;
    }
`;