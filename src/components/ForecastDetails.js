/* eslint-disable prettier/prettier */
import React from "react";

function ForecastDetails({forecast}) {
  const {
    date,
    temperature:{min, max},
    humidity,
    wind:{speed, direction},
  } = forecast;

  const formattedDate = new Date(date).toDateString()

  return (
    <div className="forecast-details">
    <div className="forecast-details__date">
      {formattedDate}
    </div>
    <div className="forecast-details__max-temperature">
      {max}
    </div>
    <div className="forecast-details__min-temperature">
      {min}
    </div>
    <div className="forecast-details__humidity">
      {humidity}
    </div>
    <div className="forecast-details__wind-speed">
      {speed}
    </div>
    <div className="forecast-details__wind-direction">
      {direction}
    </div>
  </div>     
      )
  };

  export default ForecastDetails;