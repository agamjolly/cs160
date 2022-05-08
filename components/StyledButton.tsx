import { TouchableOpacityProps } from 'react-native';
import styled from "styled-components/native";
import Colors from 'constants/Colors';
import { Text } from './Themed';

const Button = styled.TouchableOpacity<{ color?: string }>`
	padding: 8px 20px;
	border-radius: 3px;
	background: ${p => p.color || Colors.light.tint};
	text-align: center;
	align-self: center;
`;

const ButtonText = styled(Text)`
	color: white;
	text-transform: uppercase;
`;

type StyledButtonProps = TouchableOpacityProps & { title: string; color?: string };

const StyledButton = (props: StyledButtonProps) => (
	<Button color={props.color} {...props}>
		<ButtonText>{props.title}</ButtonText>
	</Button>
);

export default StyledButton;
