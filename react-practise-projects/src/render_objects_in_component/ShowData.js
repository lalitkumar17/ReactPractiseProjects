import React from "react";
import "./show_data.css";
function ShowData(props) {
  let rank;
  if (props.all_data.age <= 20) {
    rank = "Amature";
  } else if (props.all_data.age === 21) {
    rank = "Expert";
  }
  return (
    <div>
      <h1>{props.all_data.name}</h1>
      {rank && <h2>{rank}</h2>}
      <p>{props.all_data.clas}</p>
      <p>{props.all_data.age}</p>
      <p>{props.all_data.roll_no}</p>
    </div>
  );
}

export default ShowData;
