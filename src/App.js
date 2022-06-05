import "./App.css";
import { Onboard } from "./Screens/index";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [route, setRoute] = useState("onboard");
  return (
    <div className="App">
      {route === "onboard" && (
        <Onboard
          userName={userName}
          setUserName={setUserName}
          setRoute={setRoute}
        />
      )}
    </div>
  );
}

export default App;
