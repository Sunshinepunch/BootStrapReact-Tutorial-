import React from "react";
import {useDrag} from "react-dnd";

function DeckPicture({ url }) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "image",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return <img
  ref={drag}
  src={url}
  width="150px"
  style={{border: isDragging ? "2px solid black" : "0px"}} />;
}

export default DeckPicture;