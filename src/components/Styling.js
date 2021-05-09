import styled, { keyframes } from 'styled-components';

// Loading Spinner
const spin = keyframes`
 from { transform: rotate(0deg) }
 to { transform: rotate(360deg) }
`;

export const LoadingSpinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 50px;
  border-left: 4px solid #DBDBDB;
  border-right: 4px solid #DBDBDB;
  border-bottom: 4px solid #DBDBDB;
  border-top: 4px solid #557571;
  animation: ${spin} 2s linear infinite;
`;

// For Header 
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #557571;
  border-bottom: 2px solid white;
  padding: 7px 10px;
  @media (min-width: 768px) {
    padding: 7px 20px;
}
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #c6ffc1;
  margin: 0;
`;

export const Title = styled.h1`
  font-size: 34px;
  font-family: 'Lora';
  margin: 0 0 0 10px;
`;

export const MenuButton = styled.button`
  color: #c6ffc1;
  font-size: 28px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  :hover {
      color: #fffbdf;
  }
`;
  
export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #557571;
  padding: 10px 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const DrawerButton = styled.button`
  font-size: 16px;
  color: #557571;
  border: none;
  font-weight: bold;
  background-color: #c6ffc1;
  outline: none;
  font-family: 'Lora';
  border-radius: 4px;
  margin: 4px;
  padding: 6px 8px;
  cursor: pointer;
  :hover {
    background-color: #fffbdf;
  }
  :focus {
    background-color: #fffbdf;
  }
`;

export const SearchButton = styled(DrawerButton)`
  padding: 5px 10px 3px 10px;
  font-size: 18px;
`;

// For BookPage
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 160px;
  margin: 5px;
  padding: 5px 10px;
  color: #2b2b28;
  border: 1px solid #557571;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-family: 'Lora';
  background-color: #f4f4f4;
  word-break: break-all;
  @media (min-width: 768px) {
      min-height: 209px;
      width: 45%;
  }
`;

export const TextContainer = styled.div`
`;

export const BookTitle = styled.h1`
  font-size: 16px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 18px;
}
`;

export const Authors = styled.h2`
  font-size: 14px;
  margin-top: 5px;
  @media (min-width: 768px) {
    font-size: 16px;
}
`;

export const RatingBox = styled.div`
  width: 100%;
  justify-content: flex-end;
  padding: 0 5px;
  margin: 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    font-size: 16px;
}

`;

export const Rating = styled.p`
  font-size: 16px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 18px;
}
`;

// For SearchPage
export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  padding: 9px 9px 9px 15px;
  font-size: 16px;
  border: none;
  width: 90%;
  height: 60px;
  outline: none;
  margin-bottom: 20px;
  background-color: #DBDBDB;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-family: 'Lora';
  :focus {
    border-bottom: 4px solid #557571;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const SearchInputButton = styled.button`
  padding: 5px 10px;
  font-size: 18px;
  height: 60px;
  background-color: #557571;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #c6ffc1;
  border: none;
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 0.7;
  }
  :focus {
    opacity: 0.7;
  }
`;

// For TopRated Page
export const TopRatedTitle = styled.h1`
  font-size: 28px;
  text-align: center;
  border-bottom: 1px solid #557571;
  font-family: 'Lora';
`;

export const NumberText = styled.h2`
  font-size: 20px;
  margin: 2px;
  color: #557571;
`;