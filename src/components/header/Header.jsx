import React from 'react'
import PropTypes from 'prop-types'
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';


import './style.scss';
import ContentWrapper from '../content-wrapper/ContentWrapper';
import IfComponent from '../conditional-component/IfComponent';
import logo from '../../assets/images/logo.svg';
import { useHeader } from '../../hooks/header';

const Header = () => {
    const {  show, mobileMenu, navigate, navigationHandler, openSearch, setMobileMenu, openMobileMenu, showSearch, searchQueryHandler, setQuery, setShowSearch } = useHeader();
  return (
    <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
        <ContentWrapper>
            <div className='header__logo' onClick={() => navigate('/')}>
                <img src={logo} alt='logo' />
            </div>
            <ul className="header__menu">
                <li className="header__menu-item" onClick={() => navigationHandler('movie')}>Movies</li>
                <li className="header__menu-item" onClick={() => navigationHandler('tv')}>TV Shows</li>
                <li className="header__menu-item">
                    <HiOutlineSearch onClick={() => openSearch()} />
                </li>
            </ul>
            <div className="header__mobile-menu">
                <HiOutlineSearch onClick={() => openSearch()} />
                <IfComponent condition={mobileMenu} whenFalse={<SlMenu onClick={() => openMobileMenu()} />}>
                    <VscChromeClose onClick={() => setMobileMenu(false)} />
                </IfComponent>
            </div>
        </ContentWrapper>
        <IfComponent condition={showSearch}>
            <div className='header__search-bar'>
                <ContentWrapper>
                <div className="header__search-input">
                            <input
                                type="text"
                                placeholder="Search for a movie or tv show...."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={(e) => searchQueryHandler(e)}
                            />
                            <VscChromeClose
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                </ContentWrapper>
            </div>
        </IfComponent>
    </header>
  )
}

Header.propTypes = {}

export default Header