import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one


  // Bot states
  const [bot, setBot] = useState([])
  const [army, setArmy] = useState([])
  
  // collection visible
  const [collectionVisible, setCollectionVisible] = useState(true)
  const [botSpecs, setBotSpecs] = useState([])

  //Fetch Data
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((res) => res.json())
    .then((data) => setBot(data))
  }, [])

  // deleteBot completely
  function deleteBot(deletedBot){
    const updatedCollection = bot.filter((item) => item.id !== deletedBot.id)
    setBot(updatedCollection)

    const newArmy = army.filter((soldier) => soldier.id !== deletedBot.id)
    setArmy(newArmy)

    fetch(`http://localhost:8002/bots/${deletedBot.id}`, {
      method: "DELETE",
      headers: {
        "content-type":"application/json"
      }
    })
    .then(res => res.json())
  }
  
  // Add Bot to Army
  function addBot(soldier){
    const filteredArmy = army.filter((item) => item.id !== soldier.id)
    const newArmy = [...filteredArmy, soldier]
    setArmy(newArmy)
  }

  // release army from army
  function releaseFromArmy(item){
    const newArmy = army.filter((soldier) => soldier.id !== item.id)
    setArmy(newArmy)
  }

  return (
    <div>
      <YourBotArmy army={army} deleteBot={deleteBot} releaseFromArmy={releaseFromArmy}/>
      <BotCollection data={bot} addBot={addBot} deleteBot={deleteBot}/>
    </div>
  )
}

export default BotsPage;
