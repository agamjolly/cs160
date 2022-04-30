import { RootStackScreenProps } from "types";
import TitleText from "components/TitleText";
import ScreenContainer from "components/ScreenContainer";

const TeamCreation = ({ navigation }: RootStackScreenProps<"TeamCreation">) => {
	return (
		<ScreenContainer>
			<TitleText>Team Details</TitleText>
		</ScreenContainer>
	);
}

export default TeamCreation;
