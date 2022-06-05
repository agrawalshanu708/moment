import React from "react";
import { Clock, Quote, Weather } from "../../Comps";
import "./Main.css"
const Main = () => {
  return (
    <div className="main ">
      <div>
          <Weather/>
      </div>
      <div className="flex-center flex-col">
          <Clock/>
      </div>
      <div>
          <Quote/>
      </div>
    </div>
  );
};

export { Main };
