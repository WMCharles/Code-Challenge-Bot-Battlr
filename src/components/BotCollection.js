import React from "react";
import BotCard from "./BotCard";

function BotCollection({data, addBot, deleteBot}) {
  // Your code here

  // Add bot to army
  function handleClick(item){
    console.log(item)
    addBot(item)
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {data.map((item) => 
          <BotCard bot={item} handleClick={handleClick} key={item.id} deleteBot={deleteBot}/>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
