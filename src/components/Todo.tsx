export interface TodoProps {
  id: number;
  title: string;
  done: boolean;
}

const Todo = ({ title }: TodoProps) => {
  return (
    <div>
      {title}
      <hr />
    </div>
  );
};

export default Todo;
