import React from "react";
import { RootStackScreenProps } from "../types";
import styled from 'styled-components/native';
import { View } from "../components/Themed";

const PageContainer = styled(View)`
	justifyContent: center;
`;

const TeamCreation = ({ navigation }: RootStackScreenProps<"TeamCreation">) => {
	return (
		<PageContainer></PageContainer>
	);
}

export default TeamCreation
