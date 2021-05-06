import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '@material-ui/core/';

import { 
  FaSearch, 
  FaBars, 
  FaBookReader, 
} from 'react-icons/fa';

import { 
  Navigation, 
  TitleContainer, 
  Title, 
  MenuButton, 
  MenuContainer, 
  ButtonContainer, 
  DrawerButton,
  SearchButton } from './Styling';


export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navigation>
      <TitleContainer>
        <FaBookReader />
        <Title>bookly</Title>
      </TitleContainer>
      <MenuButton
        onClick={() => setOpenMenu(true)}>
        <FaBars />
      </MenuButton>
      <Drawer
        anchor="top"
        open={openMenu}
        onClose={() => setOpenMenu(false)}>
        <MenuContainer>
          <TitleContainer>
            <FaBookReader />
          </TitleContainer>
          <ButtonContainer>
            <Link to='/'><DrawerButton onClick={() => setOpenMenu(false)}>All Books </DrawerButton></Link>
            <Link to='/books/top-rated'><DrawerButton onClick={() => setOpenMenu(false)}>Top Books</DrawerButton></Link>
            <Link to='/books/search'><SearchButton onClick={() => setOpenMenu(false)}><FaSearch /></SearchButton></Link>
          </ButtonContainer>
        </MenuContainer>
      </Drawer>
    </Navigation>
  )
};