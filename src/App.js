import "./App.css";
import { Onboard } from "./Screens/index";
import { useEffect, useState } from "react";
import { useBackgroundImage } from "./hooks/useBackgroundImage";
import { Main } from "./Screens/Main/Main";

function App() {
  const [userName, setUserName] = useState("");
  const [route, setRoute] = useState("onboard");
  const { bgURL } = useBackgroundImage();

  useEffect(() =>{
    document.title = "Moment"
  },[])

  return (
    <div
      className="App"
      style={{
        background: `url(${bgURL}) center center/cover no-repeat`,
        }}
    >
      {route === "onboard" && (
        <Onboard
          userName={userName}
          setUserName={setUserName}
          setRoute={setRoute}
        />
      )}
      {route === "main"  && <Main userName={userName} />}
    </div>
  );
}

export default App;
