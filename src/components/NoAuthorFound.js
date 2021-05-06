import React from 'react';
import styled from 'styled-components';

import { CardsContainer } from './Styling';

const SearchTitle = styled.h1`
  text-align: center;
  font-size: 28px;
  font-family: 'Lora';
`;

export const NoAuthorFound = () => { 
  return (
    <CardsContainer>
      <SearchTitle>Sorry, we could not find a book with that author.</SearchTitle>
    </CardsContainer>
  )
};