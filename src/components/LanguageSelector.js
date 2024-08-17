import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('np')}>नेपाली</button>
      <button onClick={() => changeLanguage('tb')}>བོད་ཡིག</button> {}
    </div>
  );
}

export default LanguageSelector;
