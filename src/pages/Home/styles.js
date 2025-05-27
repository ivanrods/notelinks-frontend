import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > div.sidebar {
    width: 250px;
    height: 100%;
  }
  > div.main {
    width: 100%;
    height: 100%;
  }

   > svg {
    color: white;
position: fixed;
top: 50%;
left: 10px;
transform: translateY(-50%);
  }
  @media (max-width: 768px) {
   

    > div.sidebar {
    
        display: none; /* ou transformar em drawer */
      }
    }

    > div.main {
     
    }
  
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 105px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Menu = styled.ul`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
height: calc(100% - 170px);
  padding-top: 64px;
  text-align: center;

  > li {
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    padding: 16px 0;

    > li {
      margin-bottom: 0;
    }
  }
`;

export const Search = styled.div`
  width: 100;
  padding: 64px 64px 0;

  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;

export const Content = styled.div`
  grid-area: Content;
  padding: 0 64px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const NewNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 14px;
  }
`;
