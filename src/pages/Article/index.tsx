import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Article = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ARTIKEL</Text>
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/image/cat1.jpg')}
          style={styles.photo}
        />
        <View style={styles.textPlaceholder} />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/image/dog1.jpg')}
          style={styles.photo}
        />
        <View style={styles.textPlaceholder} />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/image/cat2.jpg')}
          style={styles.photo}
        />
        <View style={styles.textPlaceholder} />
      </View>

      <View style={styles.contentWrapper3}>
        <View style={styles.horizontalWrapper2}>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
            <Image
              source={require('../../assets/image/home.png')}
              style={[
                styles.image,
                {width: 40, height: 35, marginLeft: 51, marginTop: 12},
              ]}
            />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Article')}>
              <Image
                source={require('../../assets/image/article.png')}
                style={[styles.image, {width: 45, height: 35, marginTop: 15}]}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../assets/image/profile.png')}
              style={[
                styles.image,
                {width: 46, height: 42, marginRight: 45, marginTop: 10},
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  textPlaceholder: {
    flex: 1,
    backgroundColor: 'pink',
    height: 100,
    borderRadius: 10,
  },
});

export default Article;
