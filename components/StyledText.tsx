import { Text, TextProps } from './Themed';
import styled from 'styled-components/native';

const TitleText = styled(Text) <{ underContent?: boolean }>`
	fontSize: 50px;
	fontWeight: bold;
	marginBottom: 30px;
	${p => p.underContent && `marginTop: 30px;`}
`;

const HeadingText = styled(Text)`
	fontSize: 30px;
	fontWeight: bold;
`;

type AdditionalTitleProps = {
	underContent?: boolean;
};

type TitleProps = AdditionalTitleProps & TextProps;

export const Title = (props: TitleProps) =>
	<TitleText {...props} />;

export const Heading = (props: TextProps) =>
	<HeadingText {...props} />;
