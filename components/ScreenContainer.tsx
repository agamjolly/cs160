import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import styled from 'styled-components/native';
import { View, ViewProps } from "components/Themed";

type ScreenContainerProps = {
	scrollable?: boolean;
	fillHeight?: boolean;
	tabScreen?: boolean;
}

const ScreenContainer = ({
	children,
	scrollable,
	fillHeight,
	tabScreen,
}: ViewProps & ScreenContainerProps) => {
	const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
	let scrHeight = windowDimensions.height;

	const Container = styled(View) <{ scrollable?: boolean; fillHeight?: boolean; tabScreen?: boolean }>`
	padding: 20px;
	${p => p.fillHeight && `justify-content: space-between;`}
	${p => p.scrollable ? `min-height:` : `height:`} ${(p => p.tabScreen ? scrHeight - 112 : scrHeight - 64)}px;
`;

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(Dimensions.get('window'));
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<Container scrollable={scrollable} fillHeight={fillHeight} tabScreen={tabScreen}>{children}</Container>
	);
}

export default ScreenContainer;
