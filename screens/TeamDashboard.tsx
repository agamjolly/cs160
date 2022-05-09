import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import { RootTabScreenProps } from "types";
import ScreenContainer from "components/ScreenContainer";
import { View, Text } from "components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { Heading, Title } from "components/StyledText";
import StyledButton from "components/StyledButton";

const ModalView = styled(View)`
	padding: 20px;
	border-radius: 10px;
	margin: auto 30px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled(Text)`
	font-size: 18pt;
	font-weight: bold;
	margin-bottom: 20px;
`;

const BranchButton = styled.TouchableOpacity`
	padding: 20px;
	height: 130px;
	aspect-ratio: 1/1;
	border-radius: 10px;
	align-items: center;
	gap: 10px;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const BranchButtonsContainer = styled(View)`
	margin: 20px 25px 50px 25px;
	flex-direction: row;
	flex-wrap: true;
	align-items: center;
	justify-content: space-between;
`;

const BranchTasksContainer = styled(View)`
	margin-bottom: 20px;
	gap: 10px;
`;

const BranchTask = styled(View)`
	flex-direction: row;
	justify-content: space-between;
`;

const CompletedTasksContainer = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	margin-top: 20px;
`;

const CompletedTasksColHeader = styled(Text)`
	font-size: 14pt;
	font-weight: 600;
`;

const TasksCol = styled(View)`
	gap: 10px;
`;

const CompletedDateCol = styled(TasksCol)`
	text-align: right;
`;

const TeamDashboard = ({ navigation }: RootTabScreenProps<'Dashboard'>) => {
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [branch, setBranch] = useState<string>("");

	const handleBranchPress = (branchName: string) => {
		setBranch(branchName);
		setModalVisible(true);
	}

	const BranchTasks = () => (
		<BranchTasksContainer>
			<BranchTask>
				<Text>Deadline 1</Text>
				<Text>05/09/2022</Text>
			</BranchTask>
			<BranchTask>
				<Text>Deadline 2</Text>
				<Text>05/12/2022</Text>
			</BranchTask>
			<BranchTask>
				<Text>Deadline 3</Text>
				<Text>05/20/2022</Text>
			</BranchTask>
		</BranchTasksContainer>
	);

	return (
		<ScreenContainer>
			<Modal
				animationType="slide"
				visible={modalVisible}
				transparent
				onRequestClose={() => { setModalVisible(false) }}
			>
				<ModalView>
					<ModalTitle>{branch}</ModalTitle>
					<BranchTasks />
					<StyledButton title="Close" onPress={() => setModalVisible(false)} />
				</ModalView>
			</Modal>

			<Title>Team Dashboard</Title>
			<BranchButtonsContainer>
				<BranchButton onPress={() => handleBranchPress("Design")}>
					<FontAwesome name="pencil" size={60} />
					<Text>Design</Text>
				</BranchButton>
				<BranchButton onPress={() => handleBranchPress("Software")}>
					<FontAwesome name="code" size={60} />
					<Text>Software</Text>
				</BranchButton>
			</BranchButtonsContainer>
			<View>
				<Heading>Completed Tasks</Heading>
				<CompletedTasksContainer>
					<TasksCol>
						<CompletedTasksColHeader>Task</CompletedTasksColHeader>
						<Text>Design landing page</Text>
						<Text>Design bottom tab navigator</Text>
						<Text>Design team creation page</Text>
						<Text>Design profile page</Text>
						<Text>Design timeline page</Text>
					</TasksCol>
					{/* <CompletedTasksCol>
						<CompletedTasksColHeader>Deadline</CompletedTasksColHeader>
					</CompletedTasksCol> */}
					<CompletedDateCol>
						<CompletedTasksColHeader>Completed on</CompletedTasksColHeader>
						<Text>05/01/2022</Text>
						<Text>04/28/2022</Text>
						<Text>04/25/2022</Text>
						<Text>04/24/2022</Text>
						<Text>04/22/2022</Text>
					</CompletedDateCol>
				</CompletedTasksContainer>
			</View>
		</ScreenContainer>
	);
}

export default TeamDashboard;
