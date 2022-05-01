import { View, ViewProps } from 'components/Themed';
import { Button } from 'react-native';
import styled from "styled-components/native";

const ButtonContainer = styled(View)`
  minWidth: 150px;
  maxWidth: 175px;
	align-self: center;
`;

type StyledButtonProps = Button['props'] & ViewProps;

const StyledButton = (props: StyledButtonProps) => (
	<ButtonContainer {...props}>
		<Button title={props.title} onPress={props.onPress} />
	</ButtonContainer>
);

export default StyledButton;
