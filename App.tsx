import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from './src/Utils/translation/index'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): JSX.Element {
  const [lan, setLan] = useState<string>('');


  const changeLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem('lan');
    
    if (currentLanguage === 'en') {
      i18n.changeLanguage('ta');
      setLan('ta');
      await AsyncStorage.setItem('lan', 'ta');
    } else {
      i18n.changeLanguage('en');
      setLan('en');
      await AsyncStorage.setItem('lan', 'en');
    }
  };

  const { t } = useTranslation(); // Move useTranslation outside the conditional block

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('greeting')}</Text>
      <Text>{t('welcome')}</Text>
      <TouchableOpacity onPress={changeLanguage}>
        <Text>{t('changeLanguage')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;

