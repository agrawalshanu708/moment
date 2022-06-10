import React, { useEffect } from "react";
import { Clock, Quote, Weather } from "../../Comps";
import "./Main.css";
const Main = ({ userName }) => {
  useEffect(() => {
    localStorage.setItem("username", userName);
  }, []);

  return (
    <div className="main ">
      <div>
        <Weather />
      </div>
      <div className="flex-center flex-col">
        <Clock userName={userName} />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  );
};

export { Main };
