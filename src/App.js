import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { BookPage } from './pages/BookPage';
import { TopRated } from './pages/TopRated';
import { Search } from './pages/Search';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <BookPage />
        </Route>
        <Route path="/books/top-rated" exact>
          <TopRated />
        </Route>
        <Route path="/books/search" exact>
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};
