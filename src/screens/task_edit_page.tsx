import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TextInput, View } from "react-native"
import { RootStackParamsList } from "../types/root_stack_params";

type TaskEditProps = NativeStackScreenProps<RootStackParamsList, "TaskEditPage">

const TaskEditPage = ({route}: TaskEditProps) => {

    const {task} = route.params;

    return (
        <View style={styles.container}>
            {/* <Text style={styles.titleText}>{task.title}</Text> */}
            <TextInput style={styles.titleText} value={task.title}/>
            <View style={styles.metaText}>
                <Text style={styles.text}> {task.updateDate}</Text>
                <Text style={styles.text}>{task.updateTime} | </Text>
                <Text style={styles.text}>{task.noCharacters} characters</Text>
            </View>
            {/* <Text style={styles.description}>{task.description}</Text> */}
            <TextInput style={styles.description} value={task.description} multiline={true} textAlignVertical="top" />
        </View>
    )
}

export default TaskEditPage;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    titleText: {
        fontSize: 22
    },
    metaText: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 0,
        gap: 10,
        
    },
    text: {
        color: '#707070',
        fontSize: 13
    },
    description: {
        fontSize: 14,
        marginTop: 10,
        width: '100%',    
        lineHeight: 23
    }
})