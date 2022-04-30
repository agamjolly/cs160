import { Text, TextProps } from './Themed';
import styled from 'styled-components/native';

const TitleText = styled(Text)`
	fontSize: 50;
	fontWeight: bold;
`;

const HeadingText = styled(Text)`
	fontSize: 30;
	fontWeight: bold;
`;

export const Title = (props: TextProps) =>
	<TitleText {...props} />;

export const Heading = (props: TextProps) =>
	<HeadingText {...props} />;
