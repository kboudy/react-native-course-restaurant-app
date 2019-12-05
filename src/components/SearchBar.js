import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

function SearchBar(props) {
  const { term, onTermChange, onTermSubmit } = props;
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  inputStyle: { flex: 1, fontSize: 18 }, // default = 14
  iconStyle: { fontSize: 35, alignSelf: 'center', marginHorizontal: 15 }
});

export default SearchBar;
