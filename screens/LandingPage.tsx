import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from 'components/Themed';
import { Title } from 'components/StyledText';
import ScreenContainer from 'components/ScreenContainer';
import { RootStackScreenProps } from 'types';
import StyledButton from 'components/StyledButton';
import styled from 'styled-components/native';

const CreatedTeam = styled.TouchableOpacity<{ visible: boolean }>`
  ${p => !p.visible && `display: none;`}
`;

export default function LandingPage({ navigation, route }: RootStackScreenProps<'Root'>) {
  const teamCreated = route.params.teamCreated;
  const createdTeamName = route.params.createdTeamName;

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
            navigation.navigate('TeamPage', { teamName: 'Team A' })
          }}
        >
          <Text style={styles.team__title}>Team A</Text>
        </TouchableOpacity>


        <CreatedTeam
          visible={teamCreated}
          style={styles.team}
          onPress={() => {
            navigation.navigate('TeamPage', { teamName: createdTeamName })
          }}
        >
          <Text style={styles.team__title}>{createdTeamName}</Text>
        </CreatedTeam>

      </View>

      <View style={styles.separator} />

      <StyledButton title='Profile' onPress={() => {
        navigation.navigate('Profile', { myProfile: true, name: "Agam Jolly" })
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
