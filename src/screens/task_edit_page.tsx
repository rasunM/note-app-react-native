import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native"
import { RootStackParamsList } from "../types/root_stack_params";

type TaskEditProps = NativeStackScreenProps<RootStackParamsList, "TaskEditPage">

const TaskEditPage = ({route}: TaskEditProps) => {

    const {task} = route.params;

    return (
        <View>
            <Text style={styles.titleText}>{task.title}</Text>
            <View>
                <Text>{task.updateDate}</Text>
                <Text>{task.updateTime} | </Text>
                <Text>{task.noCharacters} characters</Text>
            </View>
            <Text>{task.description}</Text>
        </View>
    )
}

export default TaskEditPage;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 22
    }
})