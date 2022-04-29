import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const reRoute = (page: string) => {
  console.log(page); // change this to re-route to some other page.
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Choose Teams</Text>

      <View style={styles.btn}>
        <Button title="Create Team" onPress={() => { reRoute("something") }} />
      </View>

      <View style={styles.team__tabs}>
        { /* Default team */}
        <View style={styles.team}>
          <Text style={styles.team__title}>Some team name</Text>
        </View>

        <View style={styles.team}>
          <Text style={styles.team__title}>Some team name</Text>
        </View>

      </View>
    </View>
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
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
