import { Dimensions } from "react-native";
import styled from 'styled-components/native';
import { View, ViewProps } from "components/Themed";

const { height: scrHeight } = Dimensions.get('window');

const Container = styled(View) <{ fitHeight?: boolean; fillHeight?: boolean; tabScreen?: boolean }>`
	padding: 20px;
	${p => p.fillHeight && `justify-content: space-between;`}
	${p => p.fitHeight ? `height:` : `min-height:`} ${(p => p.tabScreen ? scrHeight - 112 : scrHeight - 64)}px;
`;

type ScreenContainerProps = {
	fitHeight?: boolean;
	fillHeight?: boolean;
	tabScreen?: boolean;
}

const ScreenContainer = ({
	children,
	fitHeight,
	fillHeight,
	tabScreen,
}: ViewProps & ScreenContainerProps) => (
	<Container fitHeight={fitHeight} fillHeight={fillHeight} tabScreen={tabScreen}>{children}</Container>
);

export default ScreenContainer;
