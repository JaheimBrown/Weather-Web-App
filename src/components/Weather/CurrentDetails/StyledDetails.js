import styled from "styled-components";

export const DetailsContainer = styled.div`
  @media screen and (max-width: 554px) {
        padding: 20px 10px;
    }`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .desName {
        color: #f2f2f2;
        font-size: 20px;
        text-transform: uppercase;
    }

    p{
        color: #f2f2f2;
        font-size: 18px;
        font-weight: 300;
    }
`;