import React from "react";
import BotCard from "./BotCard";

function BotCollection({data, addBot}) {
  // Your code here
  // Discharge from army 
  // const handleDelete = (item) => {
  //   fetch(`http://localhost:8002/bots/${item.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "content-type":"application/json"
  //     }
  //   })
  //   .then((res) => res.json())
  //   .then(() => console.log(item))
  // }
  // Add bot to army
  function handleClick(item){
    addBot(item)
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {data.map((item) => 
          <BotCard bot={item} handleClick={handleClick} key={item.id}/>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
