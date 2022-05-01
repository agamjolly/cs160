import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from 'components/Themed';
import { Title } from 'components/StyledText';
import ScreenContainer from 'components/ScreenContainer';
import { RootStackScreenProps } from 'types';
import StyledButton from 'components/StyledButton';

export default function LandingPage({ navigation }: RootStackScreenProps<'Root'>) {
  return (
    <ScreenContainer>
      <Title>Your Teams</Title>

      <StyledButton title='Create Team' onPress={() => {
        navigation.navigate('TeamCreation')
      }} />

      <View style={styles.team__tabs}>
        { /* Default team */}
        <TouchableOpacity
          style={styles.team}
          onPress={() => {
            navigation.navigate('TeamPage')
          }}
        >
          <Text style={styles.team__title}>Team A</Text>
        </TouchableOpacity>

        <View style={styles.team}>
          <Text style={styles.team__title}>Team B</Text>
        </View>

      </View>

      <View style={styles.separator} />

      <StyledButton title='Profile' onPress={() => {
        navigation.navigate('Profile')
      }} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  team__tabs: {
    display: 'flex',
    marginLeft: '20px',
    marginRight: '20px',
    justifyContent: 'space-between',
  },
  team: {
    width: '100%',
    height: 200,
    borderColor: '#a6a6a6',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: '30px',
  },
  team__title: {
    marginTop: '80px',
    marginLeft: '20px',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: {
    minWidth: '150px',
    maxWidth: '175px',
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: '#237aff',
    marginLeft: '20px',
    marginTop: '30px',
  },
  container: {
    justifyContent: 'center',
  },
  title: {
    marginTop: '20px',
    marginLeft: '15px',
    fontSize: 50,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});