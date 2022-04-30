import { RootStackScreenProps } from "types";
import ScreenContainer from "components/ScreenContainer";
import { Title } from 'components/StyledText';

const TeamCreation = ({ navigation }: RootStackScreenProps<"TeamCreation">) => {
	return (
		<ScreenContainer>
			<Title>Team Details</Title>
		</ScreenContainer>
	);
}

export default TeamCreation;
