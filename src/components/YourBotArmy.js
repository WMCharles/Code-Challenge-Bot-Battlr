import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({army, releaseFromArmy}) {
  //your bot army code here...

  // Release bot from army
  function handleClick(item){
    releaseFromArmy(item)
  }
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {army.map((item) => 
            <BotCard bot={item} handleClick={handleClick} key={item.id}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
