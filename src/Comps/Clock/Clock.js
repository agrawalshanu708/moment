import React, { useState, useEffect } from "react";
import "./Clock.css";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { ImCheckboxUnchecked } from "react-icons/im";
import { TiInputCheckedOutline } from "react-icons/ti";

const Clock = () => {
  const [showTask, setShowTask] = useState(false);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [taskEdit, setTaskEdit] = useState(false);
  const [isTaskdone, setIsTaskDone] = useState(false);
  const timeFunction = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = ("0" + date.getMinutes()).slice(-2);
    const currentTime = `${hours % 12 || 12}:${minutes}`;
    setTime(currentTime);
  };
  function greeting() {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12) {
      return "morning";
    } else if (hour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }
  const renderTask = () => {
    setShowTask(true);
  };

  const deletehandler = () => {
    setShowTask(false);
    setTask("");
  };

  const editHandler = () => {
    setShowTask(false);
    setTask(task);
  };
  const taskModal = () => {
    setTaskEdit(true);
  };

  const taskDone = () => {
    setIsTaskDone(true);
  };
  useEffect(() => timeFunction());
  return (
    <div className="">
      <div className="clock flex-center">
        <div className="time">{time}</div>
      </div>
      <div className="greeting flex-center">
        <div className="greeting">Good {greeting()} shanu</div>
      </div>
      {!showTask && (
        <form onSubmit={renderTask} className="enter-task flex-center flex-col">
          <div className="question-tag">What is your main focus for today</div>
          <input className="onboard-input" onChange={(e) => setTask(e.target.value)} value={task} />
        </form>
      )}
      {showTask && (
        <div className="show-task flex-center flex-col mt">
          <div className="tag">TODAY</div>
          <div className="box-task flex-row ">
            {isTaskdone ? (
              <TiInputCheckedOutline
                className="task__done__icon"
                onClick={() => setIsTaskDone(false)}
              />
            ) : (
              <ImCheckboxUnchecked
                className="task__undone__icon"
                onClick={taskDone}
              />
            )}
            <div
              className={`task flex-row mr ${isTaskdone && "task__done__text"}`}
              onMouseLeave={() => setTaskEdit(false)}
              onMouseEnter={taskModal}
            >
              {task}
              <div
                className={`mr task-dropdown-hidden ${
                  taskEdit && "task-dropdown-show"
                }`}
              >
                <AiFillEdit onClick={editHandler} />
                <AiFillDelete onClick={deletehandler} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Clock };
