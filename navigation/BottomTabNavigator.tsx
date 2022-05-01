import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { RootStackScreenProps, RootTabParamList, RootTabScreenProps } from "types";
import Colors from "constants/Colors";
import useColorScheme from "hooks/useColorScheme";
import TabThreeScreen from "screens/TabThreeScreen";
import NotFoundScreen from "screens/NotFoundScreen";
import TeamTimeline from "screens/TeamTimeline";
import ProfileButton from "components/ProfileButton";

const HomeButton = styled.TouchableOpacity`
	margin-left: 10pt;
	margin-right: 5pt;
`;

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = ({ navigation }: RootStackScreenProps<'TeamPage'>) => {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Members"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
				headerLeft: () => (
					<HomeButton onPress={() => navigation.navigate('Root')}>
						<FontAwesome name='home' size={25} />
					</HomeButton>
				),
				headerRight: () => <ProfileButton onPress={() => navigation.navigate('Profile')} />
			}}>
			<BottomTab.Screen
				name="Members"
				component={NotFoundScreen}
				options={({ navigation }: RootTabScreenProps<'Members'>) => ({
					title: 'Members',
					headerTitle: 'Team Members',
					tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
				})}
			/>
			<BottomTab.Screen
				name="Timeline"
				component={TeamTimeline}
				options={{
					title: 'Timeline',
					tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Performance"
				component={TabThreeScreen}
				options={{
					title: 'Performance',
					headerTitle: 'Performance Statistics',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	);
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default BottomTabNavigator;
