import React, { useState } from "react";

export default function Perform({item, onMouseOver}) {
    const [active, setActive] = useState(false);
    const [resisting, setResisting] = useState(false);
    const [visibleV, setVisibleV] = useState(false);

  const handleClick = () => {
    setActive(active ? active : !active);
  };
  const handleButtonClick = (e) => {
    setResisting(resisting ? resisting : !resisting)
    e.style={color: "red"}
    console.log("has resisted")
  }
  const handleButtonHover = () => {
    setVisibleV(visibleV ? visibleV : !visibleV)
    
    console.log("has resisted")
  }
    return <div className="Perform">
        {(item.word.trim() == "perform") ? <p onMouseOver={() => handleClick()} style={{ color: active ? "black" : "white" }}>{item.word}</p>
        : <button style={{ visibility: visibleV ? "hidden" : "visible", color: resisting ? "red" : "black"}} onMouseOver={() => handleButtonHover()} onFocus={(e) => handleButtonClick(e)}onClick={(e) => handleButtonHover()}>refuse</button>}
    </div>
}