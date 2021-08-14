import React, { useEffect, useReducer } from "react";
import { useForm } from "../../Hooks/useForm";
import "./styles.css";
import { todoReducer } from "./TodoreReducer";
const TodoApp = () => {
  /*const initialState = [
    {
      id: new Date().getTime(),
      description: "Aprender React",
      done: false,
    },
  ];*/
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
    /* return [
      {
        id: new Date().getTime(),
        description: "Aprender React",
        done: false,
      },
    ];*/
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);
  console.log(todos);
  const [{ description }, handleInputChange, refresh] = useForm({
    description: "",
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const OnHandleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length < 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    console.log("Click");
    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
    refresh();
  };
  const HandleDelete = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };
    dispatch(action);
  };

  const handleTogle = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };
  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr></hr>
      <div className="row">
        <div className="col">
          {" "}
          Todos
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li className="list-group-item" key={todo.id}>
                <p className="text-center">
                  {i + 1}. {todo.description}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => HandleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h4>Agregrar todos </h4>
          <form onSubmit={OnHandleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Aprender..."
              name="description"
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            ></input>
            <button className="btn btn-outline-primary mt-1 btn-block">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TodoApp;
