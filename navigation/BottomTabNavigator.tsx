import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { RootStackScreenProps, RootTabParamList } from "types";
import Colors from "constants/Colors";
import useColorScheme from "hooks/useColorScheme";
import PerformanceScreen from "screens/PerformanceScreen";
import TeamTimeline from "screens/TeamTimeline";
import ProfileButton from "components/ProfileButton";
import MembersScreen from "screens/MembersScreen";

const HomeButton = styled.TouchableOpacity`
	margin-left: 10pt;
	margin-right: 5pt;
`;

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = ({ navigation, route }: RootStackScreenProps<'TeamPage'>) => {
	const colorScheme = useColorScheme();
	const teamName = route.params.teamName;

	return (
		<BottomTab.Navigator
			initialRouteName="Members"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
				tabBarLabelPosition: 'below-icon',
				headerLeft: () => (
					<HomeButton onPress={() => navigation.navigate({ name: 'Root', merge: true })}>
						<FontAwesome name='home' size={25} />
					</HomeButton>
				),
				headerRight: () => <ProfileButton onPress={() => navigation.navigate('Profile', { myProfile: true, name: "Agam Jolly" })} />
			}}
		>
			<BottomTab.Screen
				name="Members"
				component={MembersScreen}
				options={{
					title: 'Members',
					headerTitle: teamName,
					tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Timeline"
				component={TeamTimeline}
				options={{
					title: 'Timeline',
					headerTitle: teamName,
					tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Performance"
				component={PerformanceScreen}
				options={{
					title: 'Performance',
					headerTitle: teamName,
					tabBarIcon: ({ color }) => <TabBarIcon name="area-chart" color={color} />,
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
