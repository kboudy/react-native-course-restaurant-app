import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

function SearchScreen() {
  const [term, setTerm] = useState('');
  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SearchScreen;
