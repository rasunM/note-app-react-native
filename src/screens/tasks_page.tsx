import {useCallback, useState} from 'react';
import {View, StyleSheet, FlatList, Pressable} from 'react-native';
import {TaskProps} from '../types/task_types';
import {TasksData} from '../constants/tasks';
import Search_Bar from '../components/search_bar';
import Card from '../components/card';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../types/root_stack_params';
import FloatingActionButton from '../components/floating_action_button';
import {useFocusEffect} from '@react-navigation/native';

type TaskPageProps = NativeStackScreenProps<RootStackParamsList, 'TaskPage'>;

const TaskPage = ({navigation}: TaskPageProps) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useFocusEffect(
    useCallback(() => {
      console.log('Refresh detected');
      setTasks([...TasksData]);
      // console.log(tasks)
    }, [TasksData]),
  );

  return (
    <View style={styles.container}>
      <Search_Bar />
      <FlatList
        data={tasks}
        style={styles.container}
        renderItem={({item: task}) => (
          <Pressable
            onPress={() => navigation.navigate('TaskEditPage', {task})}>
            <Card
              title={task.title}
              content={task.description}
              day={''}
              month={task.updateDate}
            />
          </Pressable>
        )}
      />
      <Pressable
        onPress={() => {
          navigation.navigate('TaskEditPage', {
            task: {
              title: '',
              description: '',
              day: '',
              date: '',
              updateTime: '10.41',
              updateDate: '2025-02-02',
              noCharacters: 0,
            },
          });
        }}>
        <FloatingActionButton iconName="add" size={35} />
      </Pressable>
    </View>
  );
};

export default TaskPage;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    height: '100%',
  },
});
