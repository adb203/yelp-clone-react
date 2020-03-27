import React from 'react';
import {TopNav} from './TopNav/TopNav.js';
import logo from '../assets/logo.png'
import styles from './LandingPage.module.css'
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchSuggestions} from './SearchSuggestions/SearchSuggestions.js'

export function LandingPage() {
  return (
    <div>
      <TopNav/>
      <img src={logo} className={styles.logo} alt='logo'/>
      <SearchBar/>
      <SearchSuggestions/>
    </div>
  );
}
