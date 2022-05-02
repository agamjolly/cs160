import { useState } from 'react';
import styled from 'styled-components/native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { RootTabScreenProps } from 'types';
import ScreenContainer from 'components/ScreenContainer';
import { Heading } from 'components/StyledText';
import { Text, View } from 'components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import Colors from 'constants/Colors';

const performanceBgColor = "#333025";
const performanceTextColor = "#fff";

const PerformanceSummary = styled(View)`
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 30px;
  margin: 20px 0;
`;

const RowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RowInfoContainer = styled(View)`
  display: flex;
  flex-direction: column;
`;

const RowTitle = styled(Text)`
  font-weight: bold;
`;

const RowData = styled(Text)`
  font-size: 40pt;
`;

const PerformanceRow = ({ title, value, progress }: { title: string, value: string, progress: number }) => (
  <RowContainer lightColor={performanceBgColor}>
    <RowInfoContainer lightColor={performanceBgColor}>
      <RowTitle lightColor={performanceTextColor}>{title}</RowTitle>
      <RowData lightColor={performanceTextColor}>{value}</RowData>
    </RowInfoContainer>
    {progress === -1 ?
      <FontAwesome name='pencil' size={70} color={performanceTextColor} />
      :
      <AnimatedProgressWheel
        size={80}
        width={10}
        color={performanceTextColor}
        progress={progress}
      />
    }
  </RowContainer>
);

const TargetSelectionContainer = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

const MembersContainer = styled(View)`
	display: flex;
	flex-direction: row;
	gap: 10px;
	padding-bottom: 20px;
	overflow: scroll;
  width: 100%;
`;

const MemberInfoContainer = styled.TouchableOpacity`
	display: flex;
	flex-direction: column;
	align-items: center;
  width: 150px;
`;

const TeamSelectContainer = styled.TouchableOpacity`
  align-items: center;
  width: 100px;
  text-align: center;
  gap: 10px;
`;



const PerformanceScreen = ({ navigation }: RootTabScreenProps<'Performance'>) => {
  const [perfTarget, setPerfTarget] = useState("Team");
  const perfValues = {
    "Team": {
      hours: '12',
      hoursProgress: 45,
      tasksCompleted: '6/10',
      tasksProgress: 60,
      currentTask: 'Design',
    },
    "Benjamin's": {
      hours: '3.56',
      hoursProgress: 70,
      tasksCompleted: '8/10',
      tasksProgress: 80,
      currentTask: 'Design',
    },
  }

  const { hours, hoursProgress, tasksCompleted, tasksProgress, currentTask } = perfValues[perfTarget];

  const MemberInfo = ({ name, role, onPress, selected }: { name: string, role: string, onPress?: any, selected?: boolean }) => (
    <MemberInfoContainer onPress={onPress}>
      <FontAwesome name="user" size={70} color={selected ? Colors.light.tint : ""} />
      <Text>{name}</Text>
      <Text>{role}</Text>
    </MemberInfoContainer>
  );

  return (
    <ScreenContainer fitHeight fillHeight tabScreen>
      <View>
        <Heading>{`${perfTarget} Performance`}</Heading>
        <PerformanceSummary lightColor={performanceBgColor}>
          <PerformanceRow title='Hours' value={hours} progress={hoursProgress} />
          <PerformanceRow title='Tasks Completed' value={tasksCompleted} progress={tasksProgress} />
          <PerformanceRow title={perfTarget === "Team" ? 'Highest Priority' : 'Currently Working On'} value={currentTask} progress={-1} />
        </PerformanceSummary>
      </View>

      <TargetSelectionContainer>
        <MembersContainer>
          <MemberInfo
            name="Benjamin Belfus"
            role="Designer"
            onPress={() => { setPerfTarget("Benjamin's") }}
            selected={perfTarget === "Benjamin's"}
          />
          <MemberInfo
            name="Agam Jolly"
            role="Software Developer"
          />
          <MemberInfo
            name="Jordan Moossazadeh"
            role="Software Developer"
          />
          <MemberInfo
            name="Shiv Sethi"
            role="Designer"
          />
          <MemberInfo
            name="Anthony Zhang"
            role="Designer"
          />
        </MembersContainer>
        <TeamSelectContainer onPress={() => { setPerfTarget("Team") }}>
          <FontAwesome name="users" size={40} color={perfTarget === "Team" ? Colors.light.tint : ""} />
          <Text>Overall Team Performance</Text>
        </TeamSelectContainer>
      </TargetSelectionContainer>
    </ScreenContainer>
  );
}

export default PerformanceScreen;
