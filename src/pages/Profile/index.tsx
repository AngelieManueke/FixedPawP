import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PROFILE</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../assets/image/avatar.png')}
        />
        <View style={styles.cameraIcon}>
          {/* Add camera icon here */}
          {/* You can use an icon library or an image for the camera icon */}
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          {/* User icon */}
          <Text style={styles.infoLabel}>Username</Text>
        </View>
        <View style={styles.infoItem}>
          {/* Contact icon */}
          <Text style={styles.infoLabel}>Contact</Text>
        </View>
        <View style={styles.infoItem}>
          {/* Email icon */}
          <Text style={styles.infoLabel}>Email</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'pink',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'gray',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'lightgray',
    padding: 5,
    borderRadius: 15,
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default UserProfile;
