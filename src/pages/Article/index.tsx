import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const Article = ({ navigation }) => {

  const openWebsite = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>ARTICLE</Text>
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/image/cat1.jpg')}
          style={styles.photo1}
        />
      </View>
      <View style={styles.contentContainer2}>
        <View style={styles.containerBox2}>
          <View style={styles.textPlaceholder1}>
            <Text style={styles.placeholderText1}>Memilih Hewan Peliharaan yang</Text>
            <Text style={styles.placeholderText1}>Tepat : Kucing atau Anjing</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => openWebsite('https://www.purina.co.id/kucing/mendapatkan-kucing-baru/menemukan-kucing-yang-tepat/mengadopsi-anjing-atau-kucing')}>
            <Image
              source={require('../../assets/image/dog1.jpg')}
              style={styles.photo2}
            />
          </TouchableOpacity>
          <View style={styles.textPlaceholder3} />
        </View>
      </View>
      <View style={styles.contentContainer3}>
        <View style={styles.containerBox3}>
          <View style={styles.textPlaceholder2}>
            <Text style={styles.placeholderText2}>Memelihara Kucing atau </Text>
            <Text style={styles.placeholderText2}>Anjing baik bagi</Text>
            <Text style={styles.placeholderText2}>Kesehatan Otak</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => openWebsite('https://www.kompas.id/baca/ilmiah-populer/2022/02/24/memelihara-kucing-atau-anjing-baik-bagi-kesehatan-otak')}>
          <Image
            source={require('../../assets/image/cat2.jpg')}
            style={styles.photo3}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper3}>
        <View style={styles.horizontalWrapper2}>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
            <Image
              source={require('../../assets/image/home.png')}
              style={[
                styles.image,
                { width: 40, height: 35, marginLeft: 51, marginTop: 12 },
              ]}
            />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Article')}>
              <Image
                source={require('../../assets/image/article.png')}
                style={[styles.image, { width: 45, height: 35, marginTop: 15 }]}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../assets/image/profile.png')}
              style={[
                styles.image,
                { width: 46, height: 42, marginRight: 45, marginTop: 10 },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: 'black',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  contentContainer2: {
    flex: 1,
    marginBottom: 16,
  },
  contentContainer3: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  containerBox2: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 70,
    width: 360,
  },
  containerBox3: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 42,
    width: 360,
  },
  photo1: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 43,
  },
  photo2: {
    width: 130,
    height: 130,
    borderRadius: 5,
    marginBottom: 16,
    marginTop: -150,
  },
  photo3: {
    width: 130,
    height: 130,
    borderRadius: 5,
    marginTop: -150,
  },
  textPlaceholder1: {
    flex: 1,
    backgroundColor: 'pink',
    height: 170,
    borderRadius: 10,
    paddingBottom: 50,
    marginLeft: 40,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textPlaceholder2: {
    flex: 1,
    backgroundColor: 'pink',
    height: 170,
    borderRadius: 10,
    paddingBottom: 50,
    marginRight: 40,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textPlaceholder3: {
    backgroundColor: 'pink',
    height: 132,
    width: 343,
    borderRadius: 10,
    marginTop: -370,
    alignSelf: 'center',
    justifyContent: 'center', 
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  placeholderText1: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 92,
  },
  placeholderText2: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    marginRight: 90,
  },
});

export default Article;
