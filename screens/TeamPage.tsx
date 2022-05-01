import { useState } from "react";
import styled from "styled-components/native";
import { Agenda, AgendaEntry, AgendaSchedule, DateData } from "react-native-calendars";
import { RootStackScreenProps } from "types";
import { View, Text } from "components/Themed";

const CalendarItem = styled(View) <{ height: number }>`
	height: ${p => p.height}pt;
	borderRadius: 5pt;
	padding: 15pt;
	marginRight: 30pt;
	marginTop: 17pt;
	justifyContent: center;
`;

const ItemText = styled(Text)`
	font-size: 15pt;
`;

const TeamPage = ({ navigation }: RootStackScreenProps<'TeamPage'>) => {
	const [agendaItems, setAgendaItems] = useState<AgendaSchedule>({
		'2022-05-05': [{ name: "Soft Deadline", height: 50, day: '' }],
		'2022-05-15': [{ name: "Hard Deadline", height: 50, day: '' }],
	});

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

	return (
		<Agenda
			showClosingKnob
			items={agendaItems}
			loadItemsForMonth={loadItems}
			renderItem={(item: AgendaEntry) => (
				<CalendarItem height={item.height}>
					<ItemText>{item.name}</ItemText>
				</CalendarItem>
			)}
		/>
	)
}

export default TeamPage;
