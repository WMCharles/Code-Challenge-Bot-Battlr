import React from "react";
import BotCard from "./BotCard";

function BotCollection({data, deleteBot}) {
  // Your code here
  function handleDelete(item){
    fetch(`http://localhost:8002/bots/${item.id}`, {
      method: "DELETE",
      headers: {
        "content-type":"application/json"
      }
    })
    .then((res) => res.json())
    .then(() => deleteBot(item))
  }
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {data.map((item) => 
          <BotCard bot={item} handleDelete={handleDelete} key={item.id}/>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
