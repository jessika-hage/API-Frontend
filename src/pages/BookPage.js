import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import { Loading } from '../components/Loading';
import { 
  MainContainer,
  CardsContainer,
  BookCard,
  TextContainer,
  BookTitle,
  Authors,
  RatingBox,
  Rating } from '../components/Styling';


export const BookPage = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://jessikas-book-api.herokuapp.com/books?page=${pageNumber}`)
      .then((response) => response.json())
      .then((json) => {
        setBooks(json.books);
        setLoading(false);
      })
  }, [pageNumber]);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <MainContainer>
      {loading ? <Loading />
        :
        <>
          <Pagination count={20} page={pageNumber} onChange={handlePageChange}/>
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
        </>
      }
    </MainContainer>
  )
};
