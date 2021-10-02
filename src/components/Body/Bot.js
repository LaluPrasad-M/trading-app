import React from "react";
import "./Bot.css";

const Bot = ({ bots, setBots }) => {
  return (
    <div>
      {bots.map((bot) => (
        <div>
          <div className="Bot" key={bot.id}>
            <div className="botItem botType">{bot.bot}</div>
            <div className="botItem">
              <div className = "IndexVal">Index Value</div>
              <div className = "botValue">{bot["index-value"]}</div>
            </div>
            <div className="botItem">
              <div className= "IndexVal">CAGR</div>
              <div className = "botCagr">{bot.cagr}%</div>
            </div>
            <div className="button">
              <button className="btn">View Algo</button>
              <button className="btn1">Buy</button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Bot;
