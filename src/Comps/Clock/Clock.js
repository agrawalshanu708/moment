import React, { useState,useEffect } from "react";
import "./Clock.css";
import { FiMoreHorizontal } from "react-icons/fi";

const Clock = () => {
  const [showTask, setShowTask] = useState(false);
  const [task, setTask] = useState("");
  const[time,setTime] = useState("")
  const[taskDropdown,setTaskDropdown] = useState(false)
  const timeFunction = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = ('0'+date.getMinutes()).slice(-2);
    const currentTime =  `${(hours % 12) || 12}:${minutes}` ;
    setTime(currentTime);
}
  function greeting (){
    const date = new Date();
    const hour = date.getHours();
    if(hour < 12) {
      return 'morning'
  } else if(hour < 18) {
      return 'afternoon'
  } else {
      return 'evening'
  }
  }
  const renderTask = () => {
    setShowTask(true);
  };

  const deletehandler = () => {
    setShowTask(false);
  };

  const editHandler = () => {
    setShowTask(false);
    setTask(task);
  };
const taskModal = () => {
  setTaskDropdown(true)
}
useEffect(() => timeFunction())
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
          <input onChange={(e) => setTask(e.target.value)} />
        </form>
      )}
      {showTask && (
        <div className="show-task flex-center flex-col mt">
          <div className="tag">TODAY</div>
          <div className="box-task flex-row">
            <input className="task-checkbox" type="checkbox" value={task} />
            <label className="task mr" onClick={taskModal}>{task}</label>
            {/* <FiMoreHorizontal className="icon-edit" /> */}
          </div>
          <div className = {`${!taskDropdown &&'task-dropdown-hidden'} ${taskDropdown && 'task-dropdown-show' }`}>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deletehandler}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Clock };
