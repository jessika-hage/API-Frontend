import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Loading } from '../components/Loading';
import { SearchAuthor } from '../components/SearchAuthor';
import { NoAuthorFound } from '../components/NoAuthorFound';
import { 
  MainContainer, 
  Form, 
  SearchInput, 
  SearchInputButton } from '../components/Styling';


export const Search = () => {
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(`https://jessikas-book-api.herokuapp.com/books/search?author=${author}`)
      .then((response) => response.json())
      .then((json) => {
        setBooks(json)
        setAuthor('');
        setLoading(false);
      })
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Search for author" />
        <SearchInputButton type="submit">
          <FaSearch />
        </SearchInputButton>
      </Form>
      {loading && <Loading />}
      {typeof books === 'string' 
        ? <NoAuthorFound /> 
        : <SearchAuthor books={books} />
      }
    </MainContainer>
  )
};