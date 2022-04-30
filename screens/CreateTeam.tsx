import { useState } from "react";
import { RootStackScreenProps } from "types";
import ScreenContainer from "components/ScreenContainer";
import { Title } from 'components/StyledText';
import TextInput from "components/TextInput";
import { Button } from "react-native";
import { useEffect } from "react";

type Member = {
	name: string;
	email: string;
	role: string;
}

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

	useEffect(() => {
		console.log(members);
	}, [members]);

	return (
		<ScreenContainer>
			<Title>Team Details</Title>
			<TextInput
				placeholder="Team name"
				onChangeText={setTeamName}
			/>
			<TextInput
				placeholder="Team description"
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
			/>
		</ScreenContainer>
	);
}

export default TeamCreation;
