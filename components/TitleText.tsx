import { Text } from "components/Themed";
import styled from 'styled-components/native';

const Title = styled(Text)`
	fontSize: 50;
	fontWeight: bold;
`;

const TitleText = ({ children }: { children: any }) => (
	<Title>{children}</Title>
);

export default TitleText;
