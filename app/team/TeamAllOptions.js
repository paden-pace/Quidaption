

import React, { Component } from "react";




const TeamAllOptions = (props) => {
  //Old way to code the line below
  //var style = props.style;
  const { data } = props;
  const { handleClick } = props;
  console.log("data from Results.js");
  console.log(data);
  if (data){
    return (
      <div className="panel panel-default">
        {
          data.map((item) => (
              <button 
                key={item.value}
                className="all-options-button"
                type="submit"
                onClick={() => handleClick(item.title, item.value)}
                >
                {item.title}
              </button>
          ))
        }
      </div>
    );
  } else {
    return (
      <div className="panel panel-default">
          <h4>Team Options will display here</h4>
      </div>
    );
  }
};


// Exporting our Dropdown component
export default TeamAllOptions;
