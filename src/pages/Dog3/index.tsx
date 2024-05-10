import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Gap} from '../../components/atoms';
import {BackButton} from '../../components/molecules';

const Dog3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <BackButton/>
        </TouchableOpacity>
        <View>
          <Image
            source={require('../../assets/image/golden1.png')}
            style={styles.dogImage}
          />
        </View>
        <Text style={styles.dogName}>ARCHI</Text>
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
        <Gap height={28}/>
        <Text style={styles.corgisText}>
        Golden Retrievers are beloved for their gentle and friendly nature. They're known for being loyal, affectionate, and eager to please, which makes them excellent family pets and therapy dogs. They also tend to be good with children and other pets, making them popular choices for households with multiple animals.
        </Text>
        <Gap height={20}/>
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
    marginTop: -30,
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
    marginTop: -20,
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
    marginTop: -20,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  iconContainer3: {
    backgroundColor: '#FFD0D0',
    height: 62,
    width: 68,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
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

export default Dog3;
