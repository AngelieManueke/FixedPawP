import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Dog1 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/muick.png')}
        style={styles.petImage}
      />
      <Text style={styles.petName}>MUICK</Text>
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          {/* Gender icon */}
          {/* Replace with your actual gender icon */}
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>1 years Age</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>9 Kg weight</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.adoptButton}>
        <Text style={styles.adoptButtonText}>Adopt Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FEEEF7', // Light pink background
  },
  petImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 16,
  },
  petName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 8,
    color: 'black',
  },
  adoptButton: {
    backgroundColor: 'pink',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  adoptButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Dog1;
