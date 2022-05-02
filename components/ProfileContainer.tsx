import { Text, View } from 'components/Themed';
import { StyleSheet } from 'react-native';
import TextInput from "components/TextInput";
import { useState } from 'react';
import StyledButton from './StyledButton';

const styles = StyleSheet.create({
    new_info__header: {
        marginTop: 30,
        marginLeft: 5,
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#3C3C43',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    info__text: {
        fontSize: 17,
        marginTop: 3,
        marginLeft: 5,
    },
    info__header: {
        marginLeft: 5,
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#3C3C43',
    },
    info__highlight: {
        marginTop: 5,
        width: '100%',
    },
    info__container: {
        position: 'absolute',
        marginTop: 900,
        left: 10,
        right: 10,
        flex: 1,
        justifyContent: 'space-between',
    },
    info__edit: {
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#3C3C43',
        textAlign: 'right',
        left: 90
    },
    btn: {
        marginBottom: 20,
        marginRight: 300
    }
});

// TODO: Complete this function.

const ProfileContainer = ({ myProfile }: { myProfile: boolean }) => {
    const [editable, setEditable] = useState(false);
    const [btnText, setBtnText] = useState('edit');

    const btnPress = () => {
        setEditable(!editable);
        if (editable) {
            setBtnText('edit');

        } else {
            setBtnText('done');
        }
    }

    return (
        <View style={styles.info__container}>
            <Text style={styles.info__header}>
                Role
            </Text>
            <View style={styles.info__highlight}>
                <TextInput
                    defaultValue="Software Developer"
                    editable={editable}
                />
            </View>

            <Text style={styles.new_info__header}>
                Bio
            </Text>
            <View style={styles.info__highlight}>
                <TextInput
                    defaultValue="Lorem ipsum dolor sit amet."
                    multiline
                    editable={editable}
                    numberOfLines={7}
                />
            </View>

            <Text style={styles.new_info__header}>
                Teams
            </Text>
            <View style={styles.info__highlight}>
                <TextInput
                    defaultValue="Software"
                    editable={editable}
                />
                <TextInput
                    defaultValue="Sales"
                    editable={editable}
                />
            </View>
            {myProfile ?
                <StyledButton title={btnText} onPress={btnPress} />
                :
                <StyledButton title="Send Reminder" onPress={() => {
                    alert("Reminder Sent")
                }
                } />
            }

        </View >
    );
}

export default ProfileContainer;
