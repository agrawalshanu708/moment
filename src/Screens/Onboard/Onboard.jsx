import React from "react";
import "./Onboard.css"

const Onboard = ({setUserName,userName,setRoute}) => {
  const userNameHandler = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
    setRoute("main");
  };

  return (
    <>
      <div className="onboard flex-center ">
        <form className="flex-col" onSubmit={(e) => userNameHandler(e)}>
          <h1 className="">Hello, what's your name?</h1>
          <input
            defaultValue={userName}
            type="text"
            className="onboaring-input"
            autoFocus
          />
        </form>
      </div>
    </>
  );
};

export { Onboard };
