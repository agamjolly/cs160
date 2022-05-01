import { View, ViewProps } from "components/Themed";
import styled from 'styled-components/native';

const Container = styled(View) <{ fitHeight?: boolean }>`
	padding: 20px;
	${p => p.fitHeight ? `max-height:` : `min-height:`} 100vh;
`;

type ScreenContainerProps = {
	fitHeight?: boolean;
}

const ScreenContainer = ({ children, fitHeight }: ViewProps & ScreenContainerProps) => (
	<Container fitHeight={fitHeight}>{children}</Container>
);

export default ScreenContainer;
