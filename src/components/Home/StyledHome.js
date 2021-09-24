import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    padding: 1rem;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Header = styled.header `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    img {
        width: 70%;
        max-width: 350px;
    }
`;

export const Main = styled.div`
    position: relative;
    min-height: 405px;
    width: 70vw;
    max-width: 1000px;
    margin: 3rem auto;
    border-radius: 32px;
    align-self: center;
    border: 1px solid rgba(255,255,255, .3);

    background: radial-gradient(100% 455.66% at 0% 0%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.06) 100%);
    mix-blend-mode: normal;
    backdrop-filter: blur(12px);

    @media screen and (max-width: 890px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 40vh;
    }
`;

export const MainComp = styled.div`
    width: 100%;
    height: 100%;
`;