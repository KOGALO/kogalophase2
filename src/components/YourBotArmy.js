import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  const renderBotCards = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={removeBot}
      deleteBot={deleteBot}
    />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {renderBotCards}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
