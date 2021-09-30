// import { MdExitToApp, MdLibraryMusic } from "react-icons/md";
import React, { useState } from "react";
import "./Header.css";
import BotsData from "../resources/Data";

import Bot from "./Body/Bot";

const Body = () => {
  const [bots, setBots] = useState([
    {
      id: "",
      bot: "",
      description: "",
      "index-value": "",
      cagr: "",
    },
  ]);

  React.useEffect(() => {
    setBots(BotsData);
  }, []);

  return (
    <div className="main-body">
      <h1>Select the Best Algo Suited for your needs</h1>
      <div>
        <Bot bots={bots} setBots={setBots} />
      </div>
    </div>
  );
};
export default Body;
