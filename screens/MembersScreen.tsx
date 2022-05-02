import { useState } from "react";
import { SearchBar } from "react-native-elements";
import { RootTabScreenProps } from "types";
import useColorScheme from "hooks/useColorScheme";
import { Title } from "components/StyledText";
import ScreenContainer from "components/ScreenContainer";
import styled from "styled-components/native";
import { View, Text } from "components/Themed";
import { FontAwesome } from "@expo/vector-icons";

const MembersContainer = styled(View)`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	border-radius: 10px;
	border: 1px lightgray;
`;

const MemberLine = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 15px 20px;
`;

const MemberName = styled(Text)`
	font-size: 15pt;
`;

const MembersScreen = ({ navigation }: RootTabScreenProps<'Members'>) => {
	const theme = useColorScheme();

	const [searchText, setSearchText] = useState('');

	const Member = ({ children, name }: any) =>
		<MemberLine onPress={() => navigation.navigate('Profile', { myProfile: false, name })}>
			<MemberName>{children}</MemberName>
			<FontAwesome name='arrow-right' size={15} />
		</MemberLine>

	return (
		<ScreenContainer>
			<Title>Team Members</Title>
			<SearchBar
				platform="default"
				placeholder="Search"
				lightTheme={theme === 'light'}
				value={searchText}
				onChangeText={(text) => { setSearchText(text) }}
			/>

			<MembersContainer>
				<Member name="Benjamin Belfus">Benjamin Belfus</Member>
				<Member name="Agam Jolly">Agam Jolly</Member>
				<Member name="Jordan Moossazadeh">Jordan Moossazadeh</Member>
				<Member name="Shiv Sethi">Shiv Sethi</Member>
				<Member name="Anthony Zhang">Anthony Zhang</Member>
			</MembersContainer>
		</ScreenContainer>
	)
}

export default MembersScreen;
