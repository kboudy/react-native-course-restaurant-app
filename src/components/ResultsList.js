import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

function ResultsList({ results, title }) {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: { fontSize: 18, fontWeight: 'bold' }
});

export default ResultsList;
