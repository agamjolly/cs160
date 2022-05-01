import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

const Btn = styled.TouchableOpacity`
	margin-right: 10pt;
	margin-left: 5pt;
`;

const ProfileButton = ({ onPress }: TouchableOpacityProps) => (
	<Btn onPress={onPress}>
		<FontAwesome name="user" size={25} />
	</Btn>
)

export default ProfileButton;
