import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: 768px) {
    padding: 40px 20px;

    > h1 {
      font-size: 36px;
    }

    > h2 {
      font-size: 20px;
      margin: 24px 0;
    }

    > p {
      font-size: 12px;
    }

    > a {
      margin-top: 64px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    height: 200px;
    flex: none;
  }
`;
