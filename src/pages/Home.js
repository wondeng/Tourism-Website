import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import LanguageSelector from '../components/LanguageSelector'; // I Imported the LanguageSelector component

function Home() {
  const { t } = useTranslation();

  return (
    <div className="homepage">
      <LanguageSelector /> {}
      <div className="intro-section">
        <h1>{t('welcome_message')}</h1>
        <p>{t('intro_text')}</p>
      </div>
      <div className="start-button-section">
        <Link to="/mindfulness">
          <button className="start-button">{t('enter_button')}</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
