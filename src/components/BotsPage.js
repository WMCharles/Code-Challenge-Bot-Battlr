import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one


  // Bot state
  const [bot, setBot] = useState([])

  //Fetch Data
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((res) => res.json())
    .then((data) => setBot(data))
  }, [])

  // deleteBot
  function deleteBot(deletedBot){
    const updatedCollection = bot.filter((item) => item.id !== deletedBot.id)
    setBot(updatedCollection)
  }
  console.log(bot)
  
  return (
    <div>
      <YourBotArmy />
      <BotCollection data={bot} deleteBot={deleteBot}/>
    </div>
  )
}

export default BotsPage;
