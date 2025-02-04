import {useCallback, useState} from 'react';
import {View, StyleSheet, FlatList, Pressable, Text} from 'react-native';
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
  const [searchText, setSearchText] = useState<string>('');

  useFocusEffect(
    useCallback(() => {
      console.log('Refresh detected');
      // recreate the task list
      setTasks([...TasksData]);
      // console.log(tasks)
    }, []),
  );

  // callaback function
  const handleSearchBarText = (e: string): void => {
    setSearchText(e);
  };

  const handleDeleteButton = (index: number): void => {
    // const updateTasks = TasksData.filter((_, i) => i !== index);
    TasksData.splice(index, 1);
    setTasks([...TasksData]);
  };

  // filter the dataset
  const filteredData = tasks.filter(
    task =>
      task.title.toLowerCase().includes(searchText.toLowerCase()) ||
      task.description.toLowerCase().includes(searchText.toLowerCase()),
  );

  console.log(tasks.length)

  return (
    <View style={styles.container}>
      <Search_Bar sendMessage={handleSearchBarText} />
      {tasks.length !== 0 ? (
        <FlatList
          data={filteredData}
          style={styles.container}
          renderItem={({item: task}) => (
            <Pressable
              onPress={() => navigation.navigate('TaskEditPage', {task})}>
              <Card
                key={task.mykey}
                mykey={task.mykey}
                title={task.title}
                content={task.description}
                day={''}
                month={task.updateDate}
                deleteAction={handleDeleteButton}
              />
            </Pressable>
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text>Your data is empty</Text>
        </View>
      )}
      <Pressable
        onPress={() => {
          navigation.navigate('TaskEditPage', {
            task: {
              mykey: TasksData.length - 1,
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyContainerText: {
    color: ''
  }
});
