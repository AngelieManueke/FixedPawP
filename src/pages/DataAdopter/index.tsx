import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import {TextInput} from '../../components/atoms';

const DataAdopter = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.adoptText}> ADOPTER </Text>
        <Image
          source={require('../../assets/image/kakicat.png')}
          style={styles.kakicat}
        />
        <View style={styles.containerPH}>
          <Text style={styles.dcaText}> Data Calon Adopter </Text>
          <TextInput label="" placeholder="Nama Lengkap"/>
          <TextInput label="" placeholder="Alamat"/>
          <TextInput label="" placeholder="No Telp"/>
          <TextInput label="" placeholder="Email"/>
          <TextInput label="" placeholder="Umur"/>
          <TextInput label="" placeholder="Pekerjaan"/>
          <TextInput label="" placeholder="Hewan Apa yang diadopt"/>
          <TextInput label="" placeholder="Jenis Hewan"/>
          <TextInput label="" placeholder="Nama Hewan"/>
          <TextInput label="" placeholder="Jenis Kelamin Hewan"/>
          <TextInput label="" placeholder="Alasan Mengadopsi"/>
        </View>
        <Image
          source={require('../../assets/image/kakicat2.png')}
          style={styles.kakicat1}
        />
        <View style={styles.containerA}>
          <TouchableOpacity onPress={() => navigation.navigate('Ulasan')}>
            <Text style={styles.apply}>
              APPLY NOW
            </Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/image/kakipink.png')}
            style={styles.kakipink}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DataAdopter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  containerPH: {
    flex: 1,
  },
  containerA: {
    flex: 1,
    marginLeft: 200,
    bottom: 50,
    backgroundColor: '#F5B9B9',
    height: 43,
    width: 182,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.20,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  adoptText :{
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#DD7A7A',
    marginTop: 30,
  },
  dcaText :{
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: '#E29C9C',
    marginLeft: -10,
    marginTop: -40,
  },
  apply: {
    top: 14,
    marginLeft: 10,
    fontFamily: 'Poppins-Bold',
  },
  kakicat :{
    width: 95,
    height: 95,
    borderRadius: 5,
    marginBottom: 16,
    marginTop: -50,
    marginLeft: 300,
  },
  kakicat1 :{
    width: 95,
    height: 95,
    borderRadius: 5,
    marginRight: 300,
    top: 37,
  },
  kakipink :{
    width: 22.86,
    height: 25,
    borderRadius: 5,
    bottom: 10,
    marginRight: 125,
  },
})

