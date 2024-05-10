import { StyleSheet, Text, View, TextInput as Input } from 'react-native';
import React from 'react';

const TextInput = ({ label, placeholder }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000',
  },
  input: {
    fontFamily: 'Poppins-SemiRegular',
    fontSize: 12.5,
    borderRadius: 5.5,
    padding: 12.5,
    borderColor: 'black',
    height: 37,
    width: 365,
    borderRadius: 10,
    borderWidth: 1,
    
  },
});

export default TextInput;