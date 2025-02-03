import {TasksData} from '../constants/tasks';

export const updateTask = (
  oldTitle: string,
  newTitle: string,
  newDescription: string,
) => {
  const taskIndex = TasksData.findIndex(task => task.title === oldTitle);

  console.log('Updating task:', oldTitle);
  console.log('Found index:', taskIndex);
  console.log('Current TasksData:', TasksData);

  if (taskIndex !== -1) {
    console.log('Found');
    TasksData[taskIndex] = {
      ...TasksData[taskIndex],
      title: newTitle,
      description: newDescription,
      updateDate: new Date().toISOString().split('T')[0],
      updateTime: new Date().toLocaleTimeString(),
      noCharacters: newDescription.length,
    };
  } else {
    console.log('no');
  }
};
