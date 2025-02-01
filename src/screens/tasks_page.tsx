import { PropsWithChildren, useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { TaskProps } from '../types/task_types';
import { TasksData } from '../constants/tasks';
import Search_Bar from '../components/search_bar';
import Icon from 'react-native-vector-icons/FontAwesome';


const TaskPage = () => {

    const [tasks, setTasks] = useState<TaskProps[]>();

    useEffect(() => {
        setTasks(TasksData);
    }, [tasks])

    return (
        <View style={styles.container}>
            <Search_Bar/>
            <Text>ffsdfsdf</Text>
            <FlatList data={tasks} renderItem={({item: task}) => <Text>{task.title}</Text>}/>
        </View>
    )
}

export default TaskPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})