import React, { useState } from "react";
import summer from "./images/summer.jpg"
import winter from "./images/winter.jpg"
import rainy from "./images/rainy.jpg"
import "./styles.css";

const App = () => {
  const [latitude, setLatitude] = useState("0");
  const [longitude, setLongitude] = useState("0");
  const [hemisphere, setHemisphere] = useState("");
  const [month, SetMonth] = useState(() => {
    return new Date().getMonth() + 1;
  });

  function fetchLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        if (position.coords.latitude > 0) {
          setHemisphere ("Northen Hemisphere")
        } else if (position.coords.latitude < 0) {
          setHemisphere ("Southern Hemisphere")
        } else {
          setHemisphere ("Equator")
        }
      });
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <button onClick={fetchLocation}>Fetch Location</button>
      <h1>Hemisphere:{hemisphere}</h1>
      <h1>Month:{month}</h1>
      {hemisphere &&
        (
          (hemisphere == "northenHemisphere" && month >= 4 && month <= 9) ||
          (hemisphere == "southernHemisphere" && month >= 10 || month <= 3)
         
        ) && (
          <div>
            <h1>Summer Season</h1>
            <img src={summer} alt="summer season" />
          </div>
        )
    }

      {hemisphere &&
        (
          (hemisphere == "northenHemisphere" && month < 4) ||
          month > 10 ||
          (hemisphere == "southernHemisphere" && month >= 4 && month >= 10)
        ) && (
          <div>
            <h1>Winter Season</h1>
            <img src={winter} alt="winter season" />
          </div>
        )}

      {hemisphere &&
        ((hemisphere === "northernHemisphere" && month >= 6 && month <= 9) ||
          (hemisphere === "southernHemisphere" &&
            (month >= 12 || month <= 3))) && (
          <div>
            <h1>Rainy Season</h1>
            <img src={rainy} alt="rainy season" />
          </div>
        )}
    </div>
  );
};
export default App;
