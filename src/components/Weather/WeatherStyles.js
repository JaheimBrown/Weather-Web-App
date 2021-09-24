import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    width: 100%;
    min-height: 420px;

    @media screen and (max-width: 890px) {
        grid-template-columns: 1fr;
        grid-grid-template-rows: auto;
    }
`;

export const Data = styled.div`
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media screen and (max-width: 890px) {
        grid-row: 2;
    }
`;