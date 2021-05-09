import React, { useState, useEffect } from 'react';

import { Loading } from '../components/Loading';
import {
  MainContainer,
  CardsContainer,
  BookCard,
  TopRatedTitle,
  TextContainer,
  NumberText,
  BookTitle,
  Authors,
  RatingBox,
  Rating } from '../components/Styling';


export const TopRated = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  let topNumber = 1;

  useEffect(() => {
    setLoading(true);
    fetch(`https://jessikas-book-api.herokuapp.com/books/top-rated?top=20`)
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
        setLoading(false);
      })
  }, []);

  return (
    <MainContainer>
      {loading 
        ? <Loading />
        :
        <>
          <TopRatedTitle>Top Twenty Books</TopRatedTitle>
          <CardsContainer>
            {books.map((book) => (
              <BookCard key={book.bookID}>
                <TextContainer>
                  <NumberText>{topNumber ++}.</NumberText>
                  <BookTitle>{book.title}</BookTitle>
                  <Authors>{book.authors}</Authors>
                </TextContainer>
                <RatingBox><Rating>{book.average_rating}</Rating> / 5</RatingBox>
              </BookCard>
            ))}
          </CardsContainer>
        </>
      }
    </MainContainer>
  )
};
