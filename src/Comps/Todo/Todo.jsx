import React, { useState } from "react";
import "./Todo.css";
import { ImCheckboxUnchecked } from "react-icons/im";
import { TiInputCheckedOutline } from "react-icons/ti";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Todo = () => {
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);
  const [inputTask, setInputTask] = useState(false);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isTodoTaskDone, setIsTodoTaskDone] = useState(false);
  const todoModalHandler = () => {
    setIsTodoModalOpen(!isTodoModalOpen);
    // console.log(isTodoModalOpen)
    setInputTask(false);
  };

  const writeTask = () => {
    setIsTodoModalOpen(false);
    setInputTask(true);
  };

  const taskHandler = (e) => {
    e.preventDefault();
    setTaskList((prev) => [...prev, task]);
    console.log("check");
    setTask("");
  };

  const deleteTaskHandler = (id) => {
    setTaskList(taskList.filter((el, ind) => ind != id));
  };

  const unCheckTaskHandler = (id) => {};
  const checkTaskHandler = (id) => {};
  return (
    <>
      <div className="todo-box">
        <span onClick={todoModalHandler}>TODO</span>
        {isTodoModalOpen && (
          <div className="todo-content flex-center flex-col">
            <p>No Todo yet</p>
            <button onClick={writeTask}>Add Todo</button>
          </div>
        )}
        {inputTask && (
          <div className="todo-task-content ">
            {taskList.map((el, index) => (
              <div className="flex-row">
                {isTodoTaskDone ? (
                  <TiInputCheckedOutline
                    className="todotask-check-icon"
                    onClick={() => unCheckTaskHandler(index)}
                  />
                ) : (
                  <ImCheckboxUnchecked
                    className="todotask-uncheck-icon"
                    onClick={checkTaskHandler(index)}
                  />
                )}
                <p
                  className={`todo-task mt-s ${
                    isTodoTaskDone && "todo_task_done"
                  } `}
                >
                  {el}
                </p>
                <MdOutlineDeleteOutline
                  className="todotask-delete-icon"
                  onClick={() => deleteTaskHandler(index)}
                />
              </div>
            ))}
            <form className="mt-s" onSubmit={(e) => taskHandler(e)}>
              <input
                placeholder="Enter task"
                onChange={(e) => setTask(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
    </>
  );
};
export { Todo };
