import {TasksData} from '../constants/tasks';

export const updateTask = (
  taskIndex: number,
  newTitle: string,
  newDescription: string,
) => {
  TasksData[taskIndex] = {
    ...TasksData[taskIndex],
    title: newTitle,
    description: newDescription,
    updateDate: new Date().toISOString().split('T')[0],
    updateTime: new Date().toLocaleTimeString(),
    noCharacters: newDescription.length,
  };
};

export const addTask = (title: string, description: string) => {
  TasksData.push({
    title: title,
    description: description,
    day: 'Monday',
    date: '2025-02-03',
    updateDate: new Date().toISOString().split('T')[0],
    updateTime: new Date().toLocaleTimeString(),
    noCharacters: description.length,
  });
};
