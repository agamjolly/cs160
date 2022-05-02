import { useState, useEffect } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

import { RootStackScreenProps } from "types";
import { Text, View } from "components/Themed";
import ScreenContainer from "components/ScreenContainer";
import { Title } from 'components/StyledText';
import TextInput from "components/TextInput";

type Member = {
	name: string;
	email: string;
	role: string;
}

const MembersContainer = styled(View)`
	display: flex;
	flex-direction: row;
	gap: 40px;
	padding-bottom: 20px;
	margin-bottom: 30pt;
	overflow: scroll;
`;

const MemberInfoContainer = styled(View)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MemberInfo = ({ name, email, role }: Member) => (
	<MemberInfoContainer>
		<FontAwesome name="user" size={100} />
		<Text>{name}</Text>
		<Text>{email}</Text>
		<Text>{role}</Text>
	</MemberInfoContainer>
);

const TeamCreation = ({ navigation }: RootStackScreenProps<"TeamCreation">) => {
	const [teamName, setTeamName] = useState("");
	const [teamDescription, setTeamDescription] = useState("");
	const [currMemberName, setMemberName] = useState("");
	const [currMemberEmail, setMemberEmail] = useState("");
	const [currMemberRole, setMemberRole] = useState("");

	const [members, setMembers] = useState<Member[]>([]);

	const handleAddMember = () => {
		setMembers([{ name: currMemberName, email: currMemberEmail, role: currMemberRole }, ...members])
		setMemberName("")
		setMemberEmail("")
		setMemberRole("")
	}

	const handleCreateTeam = () => {
		navigation.navigate('Root', { teamCreated: true, createdTeamName: teamName });
	}

	useEffect(() => {
		console.log(members);
	}, [members]);

	return (
		<ScreenContainer scrollable>
			<Title>Team Details</Title>
			<TextInput

				placeholder="Team name"
				onChangeText={setTeamName}
			/>
			<TextInput
				placeholder="Team description"
				multiline
				numberOfLines={5}
				onChangeText={setTeamDescription}
			/>

			<Title underContent>Add Members</Title>
			<TextInput
				placeholder="Member name"
				value={currMemberName}
				onChangeText={setMemberName}
			/>
			<TextInput
				textContentType="emailAddress"
				keyboardType="email-address"
				placeholder="Member email"
				value={currMemberEmail}
				onChangeText={setMemberEmail}
			/>
			<TextInput
				placeholder="Member role"
				value={currMemberRole}
				onChangeText={setMemberRole}
			/>
			<Button
				title="Add Member"
				onPress={handleAddMember}
				disabled={currMemberName === "" || currMemberEmail === "" || currMemberRole === ""}
			/>

			<Title underContent>Members</Title>
			<MembersContainer>
				{members.length > 0 ?
					members.map((member: Member, i: number) => (
						<MemberInfo
							name={member.name}
							email={member.email}
							role={member.role}
							key={`member ${i}`}
						/>
					))
					:
					<Text>Add members to your team</Text>
				}
			</MembersContainer>

			<Button
				title="Done"
				onPress={handleCreateTeam}
				disabled={members.length === 0 || teamName === "" || teamDescription === ""}
			/>
		</ScreenContainer>
	);
}

export default TeamCreation;
