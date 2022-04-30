import { View } from "components/Themed";
import styled from 'styled-components/native';

const Container = styled(View)`
	padding: 20px;
`;

const ScreenContainer = ({ children }: { children: any }) => (
	<Container>{children}</Container>
);

export default ScreenContainer;