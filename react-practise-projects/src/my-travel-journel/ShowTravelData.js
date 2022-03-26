import React from "react";
import "./show_travel_data.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ShowTravelData({ journal_data_obj }) {
  return (
    <div>
      <main className="journal">
        <img
          src="https://images.unsplash.com/photo-1606829411515-35bac5e69de7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
          alt="jouneral__mounteverest img"
        />
        <div className="journal__information">
          <div className="journal__location">
            <div className="location-icon">
              <LocationOnIcon style={{ fontSize: 12 }} />
            </div>
            <p className="journal__country">{journal_data_obj.country}</p>

            <a href="#">view on google map</a>
          </div>
          <h1>{journal_data_obj.place_name}</h1>
          <p>
            <strong>{journal_data_obj.date} </strong>
          </p>
          <p>{journal_data_obj.description}</p>
        </div>
      </main>
    </div>
  );
}

export default ShowTravelData;
