import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ResultsDetail from './ResultsDetail';

function ResultsList({ results, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => <ResultsDetail result={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 15, marginBottom: 5 },
  container: { marginBottom: 10 }
});

export default ResultsList;
