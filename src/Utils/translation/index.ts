import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './eng.json';
import taTranslation from './tamil.json';
import AsyncStorage from '@react-native-async-storage/async-storage';


AsyncStorage.getItem('lan').then((res) => {
    const userPreferredLanguage = res || 'en'; 
    i18n.changeLanguage(userPreferredLanguage);
  });
  
  i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      fallbackLng: 'en',
      lng: 'en',
      debug: false,
      resources: {
        en: {
          translation: enTranslation,
        },
        ta: {
          translation: taTranslation,
        },
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: true,
      },
    });
  
  export default i18n;
