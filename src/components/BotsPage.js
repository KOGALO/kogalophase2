import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "http://localhost:8002/bots";

function BotsPage() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setBots);
  }, []);

  function enlistBot(bot) {
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === bot.id ? { ...b, army: true } : b))
    );
  }

  function removeBot(bot) {
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === bot.id ? { ...b, army: false } : b))
    );
  }

  const deleteBot= (bot) => {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        removeBot(bot);
        const updatedBots= bots.filter((b)=> b.id !== bot.id);
        setBots (updatedBots);
      });
  }

  return (
    <div>
      <YourBotArmy bots={bots.filter((b) => b.army)} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} deleteBot={deleteBot} />
    </div>
  );
}

export default BotsPage;