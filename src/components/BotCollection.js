import React from "react";
import BotCard from "./BotCard";

function BotCollection({data}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {data.map((item) => 
          <BotCard bot={item} key={item.id}/>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
