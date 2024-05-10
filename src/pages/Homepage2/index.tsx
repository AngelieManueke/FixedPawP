import {Image, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Homepage = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.text1}>Hi Petpals,</Text>
        <Text style={styles.text2}>let’s choose a pet as</Text>
        <Text style={styles.text2}>your companion</Text>

        <View style={styles.contentWrapper} />

        <View style={styles.contentWrapper2}>
          <Text style={styles.text2}> Pet Category</Text>
          <View style={styles.horizontalWrapper}>
            <TouchableOpacity
              style={[styles.boxWrapper2, {marginLeft: 5}]}
              onPress={() => navigation.navigate('Homepage')}>
              <Image
                source={require('../../assets/image/dog.png')}
                style={styles.doglogo}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <Image
              source={require('../../assets/image/ragdoll.png')}
              style={styles.image1}
            />
            <TouchableOpacity
              style={[styles.boxWrapper, {marginTop: 10}]}
              onPress={() => navigation.navigate('Cat1')}>
              <Text style={styles.anjing1}>RAGDOLL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../../assets/image/british.png')}
              style={styles.image2}
            />
            <TouchableOpacity
              style={[styles.boxWrapper, {marginLeft: -20},{marginTop: 10}]}
              onPress={() => navigation.navigate('Cat2')}>
              <Text style={styles.anjing2}>BRITISH</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../../assets/image/american.png')}
              style={styles.image3}
            />
            <TouchableOpacity
              style={[styles.boxWrapper, {marginLeft: 15}, {marginTop: 10}]}
              onPress={() => navigation.navigate('Cat3')}>
              <Text style={styles.anjing3}>AMERICAN</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentWrapper3}>
          <View style={styles.horizontalWrapper2}>
            <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
              <Image
                source={require('../../assets/image/home.png')}
                style={[
                  styles.image,
                  {width: 45, height: 42, marginLeft: 51, marginTop: 5},
                ]}
              />
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Article')}>
                <Image
                  source={require('../../assets/image/article.png')}
                  style={[styles.image, {width: 45, height: 44, marginTop: 5}]}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('../../assets/image/profile.png')}
                style={[
                  styles.image,
                  {width: 45, height: 42, marginRight: 45, marginTop: 5},
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD0D0',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  text1: {
    padding: 20,
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#DD7A7A',
  },
  text2: {
    padding: 20,
    marginTop: -40,
    fontSize: 18,
    fontFamily: 'Poppins-regular',
    color: '#DD7A7A',
  },

  contentWrapper: {
    flex: -1,
  },
  contentWrapper2: {
    flex: 6,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 32,
    paddingLeft: 15,
  },
  horizontalWrapper: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    
  },
  box: {
    flexDirection: 'row',
    width: '70%',
    height: 150,
    backgroundColor: '#FFD0D0',
    borderRadius: 20,
    marginBottom: 30,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  boxWrapper: {
    width: '70%',
    height: 100,
    backgroundColor: '#F9DADA',
    borderRadius: 30,
    marginRight: 50,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  boxWrapper2: {
    width: '20%',
    height: 50,
    backgroundColor: '#F9DADA',
    borderRadius: 10,
    marginBottom: 25,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  anjing1: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    padding: 15,
  },
  anjing2: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    padding: 15,
  },
  anjing3: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    padding: 15,
  },

  contentWrapper3: {
    flex: 0.6,
  },
  horizontalWrapper2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image1: {
    marginTop: -7,
  },
  image2: {
    marginTop: -20,
  },
  image3: {
    marginTop: -11,
  },
  doglogo: {
    width: 32,
    height: 35,
    marginLeft: 22,
    marginTop: 9,
  }
});
