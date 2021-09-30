import React from "react";
import "./Bot.css";

const Bot = ({ bots, setBots }) => {
  return (
    <div>
      {bots.map((bot) => (
        <div>
          <div className="Bot" key={bot.id}>
            <div className="botItem">{bot.bot}</div>
            <div className="botItem">
              <div>Index Value</div>
              <div>{bot["index-value"]}</div>
            </div>
            <div className="botItem">
              <div>CAGR</div>
              <div>{bot.cagr}%</div>
            </div>
            <div className="botItem">
              <button className="btn">View Algo</button>
              <button className="btn">Buy</button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Bot;
