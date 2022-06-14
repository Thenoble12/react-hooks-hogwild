import React, { useState } from "react";

function Hog({ hogData }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div  onClick={() => handleClick()}>
      {toggle ? (
        <div class="ui card">
          <div class="image">
            <img src={hogData.image} alt={`${hogData.name} the Hog`}  />
          </div>
          <div class="content">
            <h2 class="header">{hogData.name}</h2>
            <div class="meta">
              <span class="date">{hogData.weight}kg</span>
            </div>
            <div class="description">{hogData.specialty}</div>
          </div>
          <div class="extra content">
            <h4>{hogData.greased}</h4>
          </div>
        </div>
      ) : (
        <div class="ui card">
          <div class="image">
            <img src={hogData.image} alt={`${hogData.name} the Hog`} />
          </div>
          <div class="content">
            <h2 class="header">{hogData.name}</h2>
          </div>
        </div>
      )}
    </div>
  );  
}

export default Hog;
