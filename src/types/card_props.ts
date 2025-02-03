import {TaskProps} from './task_types';

export type CardProps = {
  mykey: number;
  title: string;
  content: string;
  day: string;
  month: string;
  deleteAction: (index: number) => void;
};
