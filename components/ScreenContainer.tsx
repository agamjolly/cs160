import { Dimensions } from "react-native";
import styled from 'styled-components/native';
import { View, ViewProps } from "components/Themed";

const { height: scrHeight } = Dimensions.get('window');

const Container = styled(View) <{ fitHeight?: boolean }>`
	padding: 20px;
	${p => p.fitHeight ? `height:` : `min-height:`} ${scrHeight - 64}px;
`;

type ScreenContainerProps = {
	fitHeight?: boolean;
}

const ScreenContainer = ({ children, fitHeight }: ViewProps & ScreenContainerProps) => (
	<Container fitHeight={fitHeight}>{children}</Container>
);

export default ScreenContainer;
