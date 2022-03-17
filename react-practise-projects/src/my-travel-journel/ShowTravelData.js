import React from "react";
import "./show_travel_data.css";
import PublicIcon from "@mui/icons-material/Public";

function ShowTravelData(props) {
  return (
    <div className="content">
      <header>
        <div className="header__container">
          <PublicIcon style={{ fontSize: 50 }} />
          <p>my travel journal</p>
        </div>
      </header>
      <main className="jouneral">
        <img
          src="https://images.unsplash.com/photo-1606829411515-35bac5e69de7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
          alt="jouneral__mounteverest img"
        />
        <div className="jouneral__information">
          <div className="jouneral__location"></div>
          <h1>{props.journal_data_obj.place_name}</h1>
          <p>
            <strong>{props.journal_data_obj.date} </strong>
          </p>
          <p>{props.journal_data_obj.description}</p>
        </div>
      </main>
    </div>
  );
}

export default ShowTravelData;
