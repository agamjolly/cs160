import { TextInputProps } from "react-native";
import styled from "styled-components/native";

const Input = styled.TextInput`
	padding: 10px;
	borderRadius: 5px;
	background: #ebebeb;
	marginBottom: 20px;
`;

const TextInput = (props: TextInputProps) => (
	<Input {...props} />
);

export default TextInput;
