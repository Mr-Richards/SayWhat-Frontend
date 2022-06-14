import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
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
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView style={styles.scrollConatainer}>
        {prevTrans[0] &&
          prevTrans.map((translation) => (
            <View style={styles.individual} key={translation.id}>
              <Text>{translation.original}</Text>
              <Text>
                {translation.translated} {'\n'}
              </Text>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
  scrollConatainer: {
    padding: 20,
  },
  individual: {
    marginTop: 5,
    borderBottomWidth: '1',
    borderColor: 'grey',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
});
