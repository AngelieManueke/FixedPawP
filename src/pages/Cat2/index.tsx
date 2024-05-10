import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Gap} from '../../components/atoms';
import {BackButton} from '../../components/molecules';

const Cat2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage2')}>
          <BackButton/>
        </TouchableOpacity>
        <View>
          <Image
            source={require('../../assets/image/British1.png')}
            style={styles.dogImage}
          />
        </View>
        <Text style={styles.dogName}>PICIS</Text>
        <View style={styles.iconContainer}>
          <View style={styles.iconContainer1}>
            <Image source={require('../../assets/image/male.png')}/>
            <Text style={styles.iconText}>Sex</Text>
          </View>
          <View style={styles.iconContainer2}>
            <Text style={styles.textYears}>1 years </Text>
            <Text>Age</Text>
          </View>
          <View style={styles.iconContainer3}>
            <Text style={styles.textKg}>9 Kg </Text>
            <Text >Weight</Text>
          </View>
        </View>
        <Gap height={32}/>
        <Text style={styles.corgisText}>
        British Shorthair cats are known for their calm and easygoing demeanor. They're typically independent yet affectionate, enjoying lounging around the house and being near their owners without being overly demanding. They are also known for their round faces and dense, plush coats, which give them a distinctive appearance.
        </Text>
        <Gap height={24}/>
        <View>
          <TouchableOpacity style={styles.adoptButton} onPress={() => navigation.navigate('DataAdopter')}>
            <Text style={styles.adoptButtonText}>adopt now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9DADA', 
  },
  containerImage:{
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    height: 830,
    borderRadius: 50,
    top: 300,
  },
  dogImage: {
    width: 330,
    height: 415,
    bottom: 300,
    marginLeft: 25,
    marginRight: 14,
  },
  dogName: {
    fontSize: 35,
    fontFamily: 'Poppins-Bold',
    color: 'black',
    textAlign: 'center',
    bottom: 280,
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
    justifyContent: 'space-around',
    marginTop: -250,
  },
  iconContainer1: {
    backgroundColor: '#FFD0D0',
    height: 62,
    width: 68,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  iconContainer2: {
    backgroundColor: '#FFD0D0',
    height: 62,
    width: 68,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    marginTop: -25,
  },
  iconContainer3: {
    backgroundColor: '#FFD0D0',
    height: 62,
    width: 68,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  corgisText:{
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
  textYears:{
    color: 'black',
  },
  textKg:{
    color: 'black',
  },
  adoptButton: {
    backgroundColor: '#FFD0D0',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    width: 370,
    marginLeft: 20,
  },
  adoptButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Cat2;
