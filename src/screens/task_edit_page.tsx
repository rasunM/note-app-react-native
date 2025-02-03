import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackParamsList} from '../types/root_stack_params';
import {useEffect, useState} from 'react';
import FloatingActionButton from '../components/floating_action_button';
import {Pressable} from 'react-native';
import {TasksData} from '../constants/tasks';
import {addTask, updateTask} from '../utils/tasks';

type TaskEditProps = NativeStackScreenProps<
  RootStackParamsList,
  'TaskEditPage'
>;

const TaskEditPage = ({route, navigation}: TaskEditProps) => {
  const {task} = route.params;

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
  }, [task]);

  const handleTask = () => {
    // check whether the task is exist
    const taskIndex = TasksData.findIndex(
      taskData => taskData.title === task.title,
    );
    // create new task
    if (taskIndex === -1) {
      addTask(title, description);
    }
    // update existing task
    else {
      updateTask(taskIndex, title, description);
    }
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.titleText}>{task.title}</Text> */}
      <TextInput
        style={styles.titleText}
        value={title}
        placeholder="Title"
        placeholderTextColor="#979797"
        onChangeText={text => setTitle(text)}
      />
      <View style={styles.metaText}>
        <Text style={styles.text}> {task.updateDate}</Text>
        <Text style={styles.text}>{task.updateTime} | </Text>
        <Text style={styles.text}>{task.noCharacters} characters</Text>
      </View>
      {/* <Text style={styles.description}>{task.description}</Text> */}
      <TextInput
        style={styles.description}
        value={description}
        multiline={true}
        textAlignVertical="top"
        placeholder="Start typing ..."
        placeholderTextColor="#979797"
        onChangeText={text => setDescription(text)}
      />
      <View style={styles.fabContainer}>
        <Pressable onPress={handleTask}>
          <FloatingActionButton iconName="done" size={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default TaskEditPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: '100%',
  },
  titleText: {
    fontSize: 22,
  },
  metaText: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 0,
    gap: 10,
  },
  text: {
    color: '#707070',
    fontSize: 13,
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    width: '100%',
    lineHeight: 23,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
