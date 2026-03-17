export interface TodoProps {
  id: number;
  title: string;
  done: boolean;
}

const Todo = ({ id, title, done }: TodoProps) => {
  return <div>{title}</div>;
};

export default Todo;