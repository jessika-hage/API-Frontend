import React from 'react';

import { 
  CardsContainer, 
  BookCard, 
  TextContainer, 
  BookTitle, 
  Authors, 
  RatingBox, 
  Rating } from './Styling';


export const SearchAuthor = ({ books }) => { 
  return (
    <CardsContainer>
      {books.map((book) => (
        <BookCard key={book.bookID}>
          <TextContainer>
            <BookTitle>{book.title}</BookTitle>
            <Authors>{book.authors}</Authors>
          </TextContainer>
          <RatingBox><Rating>{book.average_rating}</Rating> / 5</RatingBox>
        </BookCard>
      ))}
    </CardsContainer>
  )
};