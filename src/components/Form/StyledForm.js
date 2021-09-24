import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    padding: 1rem;

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 20px;
    }

    label {
        font-size: 1.25rem;
        /* text-transform: uppercase; */
    }

    input {
        padding: 1.25em;
        margin: 20px 0;
        border-radius: 4px;
        background: linear-gradient(146.38deg, rgba(255, 255, 255, 0.35) 2.84%, rgba(171, 224, 227, 0.5) 100%, rgba(255, 255, 255, 0.05) 100%);
        color: #000;
        border: 1px solid rgba(255, 255, 255, .3);
        outline: 0;
        transition: .3s linear;

        &::placeholder{
            color: #000;  
        }

        &:focus,
        &:hover {
            background-color: #fff;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5em;
        border-radius: 4px;
        background: #fff;
        color: #000;
        border: 1px solid rgba(255, 255, 255, .3);
        cursor: pointer;
        transition: .3s linear;
        font-size: 1rem;
        font-weight: bold;

        span {
            margin-left: 8px;
        }

        &:hover,
        &:focus {
            border: 1px solid #000;
        }
    }
`;
