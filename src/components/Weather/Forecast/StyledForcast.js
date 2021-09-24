import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px 10px 10px;
    align-items: center;
    grid-gap: 20px;

    @media screen and (max-width: 600px) {
        height: auto;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(138.19deg, rgba(255, 255, 255, 0.35) -100%, rgba(255, 255, 255, 0.05) 100%);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    width: 110px;
    height: 130px;
    padding: 12px;
    cursor: pointer;

    .weekday {
        font-size: 18px;
        text-transform: uppercase;
        margin: 10px 0;
    }

    &:hover {
        color: #000;
         background: rgba(255, 255, 255, 0.5);
    }
`;