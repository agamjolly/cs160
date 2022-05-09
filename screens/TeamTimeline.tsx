import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import { Agenda, AgendaEntry, AgendaSchedule, DateData } from "react-native-calendars";
import DatePicker from "react-native-date-picker";
import { RootTabScreenProps } from "types";
import { Text, View } from "components/Themed";
import StyledButton from "components/StyledButton";
import TextInput from "components/TextInput";

const CalendarItem = styled.TouchableOpacity <{ height: number }>`
	height: ${p => p.height}pt;
	background: white;
	borderRadius: 5pt;
	padding: 15pt;
	marginRight: 30pt;
	marginTop: 17pt;
	justifyContent: center;
`;

const ItemText = styled(Text)`
	font-size: 15pt;
`;

const ModalView = styled(View)`
	padding: 20px;
	border-radius: 10px;
	margin: auto 30px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled(Text)`
	font-size: 18pt;
	font-weight: bold;
	margin-bottom: 20px;
`;

const ButtonsContainer = styled(View)`
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: flex-end;
`;

const TeamTimeline = ({ navigation }: RootTabScreenProps<'Timeline'>) => {
	const [itemTitle, setItemTitle] = useState<string>("Soft Deadline");
	const [itemDate, setItemDate] = useState<string>('2022-05-09');
	const dateFormat = /\d{4}\-\d{2}\-\d{2}/;
	const [agendaItems, setAgendaItems] = useState<AgendaSchedule>({
		[itemDate]: [{ name: itemTitle, height: 50, day: '' }],
	});
	const [itemModalVisible, setItemModalVisible] = useState<boolean>(false);
	const [editItemTitle, setEditItemTitle] = useState<string>("");
	const [editItemDate, setEditItemDate] = useState<string>("");

	const loadItems = (day: DateData) => {
		let newAgendaItems: AgendaSchedule = { ...agendaItems };
		for (let i = -15; i < 60; i++) {
			const time = day.timestamp + i * 24 * 60 * 60 * 1000;
			const strTime = timeToString(time);

			if (!newAgendaItems[strTime]) {
				newAgendaItems[strTime] = [];
			}
		}
		setAgendaItems(newAgendaItems);
	}

	const timeToString = (time: number) => {
		const date = new Date(time);
		return date.toISOString().split('T')[0];
	}

	const handleSaveEdit = () => {
		const newTitle = editItemTitle === "" ? itemTitle : editItemTitle;
		const newDate = editItemDate === "" ? itemDate : editItemDate;
		if (!dateFormat.test(newDate)) {
			alert("Please enter a date in the format YYYY-MM-DD");
			return;
		}

		const oldItem = agendaItems[itemDate][0];
		let newAgendaItems: AgendaSchedule = { ...agendaItems };
		newAgendaItems[itemDate] = [];
		newAgendaItems[newDate] = [{ ...oldItem, name: newTitle }];
		setAgendaItems(newAgendaItems);

		setItemTitle(newTitle);
		setItemDate(newDate);
		setEditItemTitle("");
		setEditItemDate("");
		setItemModalVisible(false);
	}

	const handleCancelEdit = () => {
		setEditItemTitle("");
		setEditItemDate("");
		setItemModalVisible(false);
	}

	return (
		<>
			<Modal
				animationType="slide"
				visible={itemModalVisible}
				transparent
				onRequestClose={() => { setItemModalVisible(false) }}
			>
				<ModalView>
					<ModalTitle>Edit Agenda Item</ModalTitle>
					<TextInput
						placeholder={itemTitle}
						value={editItemTitle}
						onChangeText={(text: string) => setEditItemTitle(text)}
					/>
					<TextInput
						placeholder={itemDate}
						value={editItemDate}
						onChangeText={(text: string) => setEditItemDate(text)}
					/>
					<ButtonsContainer>
						<StyledButton
							title="Cancel"
							color="red"
							onPress={handleCancelEdit}
						/>
						<StyledButton
							title="Save"
							onPress={handleSaveEdit}
						/>
					</ButtonsContainer>
				</ModalView>
			</Modal>
			<Agenda
				showClosingKnob
				items={agendaItems}
				loadItemsForMonth={loadItems}
				renderItem={(item: AgendaEntry) => (
					<CalendarItem
						height={item.height}
						onPress={() => { setItemModalVisible(true) }}
					>
						<ItemText>{item.name}</ItemText>
					</CalendarItem>
				)}
			/>
		</>
	)
}

export default TeamTimeline;
