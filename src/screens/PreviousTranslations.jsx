import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getTranslationsByUserId } from '../services/translationServices';
import { useRoute } from '@react-navigation/native';

export const PreviousTranslations = () => {
  const [prevTrans, setPrevTrans] = useState([]);
  const route = useRoute();
  const userId = route.params;

  const fetchPrevTrans = async () => {
    const response = await getTranslationsByUserId(userId);
    setPrevTrans(response);
  };

  useEffect(() => {
    fetchPrevTrans();
  }, []);

  return (
    <View>
      {prevTrans[0] &&
        prevTrans.map((translation) => (
          <>
            <Text>{translation.original}</Text>
            <Text>{translation.translated}</Text>
          </>
        ))}
    </View>
  );
};
