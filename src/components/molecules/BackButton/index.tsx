import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import {BackButton} from '..';

const back = ({navigation}) => {
  return (
    <View>
      <Image 
          source={require('../../../assets/image/Back.png')}
          style={styles.BackButton}
      />
    </View>
  )
}

export default back;

const styles = StyleSheet.create({
  BackButton: {
    marginTop: -280,
    marginLeft: 15,
  }
})
