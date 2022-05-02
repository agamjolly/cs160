import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'components/Themed';
import React from 'react';
import ProfileContainer from 'components/ProfileContainer';
import ScreenContainer from 'components/ScreenContainer';
import { RootStackScreenProps } from 'types';
import { Heading } from 'components/StyledText';

export default function ProfileScreen({ route }: RootStackScreenProps<'Profile'>) {
  const { myProfile, name } = route.params;

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.title__container}>
          <View style={styles.img__container}>
            <FontAwesome name="user" size={100} style={{ marginLeft: 14, marginBottom: 2 }} />
          </View>
          <Heading>{name}</Heading>
          {/* <Text style={styles.email}>agamjolly@gmail.com</Text> */}
        </View>

        <ProfileContainer myProfile={myProfile} />

      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  fa__img: {
    marginLeft: 10,
  },
  img__container: {
    border: '0.1pt solid',
    borderRadius: 50,
    outline: 'solid',
    width: 100,
    marginBottom: '10px',
  },
  title__container: {
    position: 'absolute',
    marginTop: 200,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  email: {
    fontSize: 10,
    color: '#3C3C43',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
