import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 405px;
    overflow: hidden;
    border-radius: 32px;
    padding: 1rem;
    background: linear-gradient(146.38deg, #FFFFFF 0%, #D7E0F1 49.2%, rgba(255, 255, 255, 0.5) 100%);
`;

export const Top = styled.div`

  h1 {
      font-size: 36px;
      margin-bottom: 10px;
      letter-spacing: 4%;
   }  

  p{
      font-size: 18px;
  }

  span {
      margin-right: 3px;
  }
`;

export const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 175px;
`;

export const Bottom = styled.div`
    h2 {
        font-size: 28px;
    }

    img {
        width: 25px;
        margin-left: 10px;
        fill: #000;
    }
`;