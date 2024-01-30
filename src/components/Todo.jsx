import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/reducer/todo";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state) => state.todo.isLoading);

  const getTodoHandler = () => {
    dispatch(getTodos());
  };
  return (
    <div>
      <button className="Todo" onClick={getTodoHandler}>
        Get Todo
      </button>
      <section>
        {!isLoading && todos.length < 1 && (
          <p>Click get todos button to get your todos</p>
        )}

        {isLoading && <p>Getting todos...</p>}

        {!isLoading && todos.map((todo) => <p>{todo.title}</p>)}
      </section>
    </div>
  );
};

export default Todo;
