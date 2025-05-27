import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "Brand header"
    "Menu Search"
    "Menu Content"
    "NewNote Content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "header"
      "Brand"
      "Menu"
       "Search"
      "Content"
      "NewNote";
  }
`;

export const Brand = styled.div`
  grid-area: Brand;
  display: flex;
  justify-content: center;
  align-items: center;

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
  grid-area: Menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

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
  grid-area: Search;
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
  grid-area: NewNote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  
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
