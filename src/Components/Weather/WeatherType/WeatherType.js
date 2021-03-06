import React from "react";

const WeatherType = props => {
  var weatherType = props.weatherType;
  // var weatherType = "LIGHT INTENSITY DRIZZLE RAIN";
  var imageSource = window.imageSource;
  {
    console.log(weatherType);
  }
  return (
    <div>
      {(() => {
        switch (weatherType) {
          case "LIGHT INTENSITY DRIZZLE RAIN":
            imageSource =
              "https://upload.wikimedia.org/wikipedia/commons/2/29/Big_Fat_Red_Cat.jpg";
            break;
            case "SCATTERED CLOUDS":
            imageSource = "https://media.publit.io/file/portImagesReactWeather/darkimg.png";
            break;
          case "BROKEN CLOUDS":
            imageSource = "https://media.publit.io/file/portImagesReactWeather/darkimg.png";
            break;
            case "LIGHT RAIN":
            imageSource = "https://media.publit.io/file/portImagesReactWeather/darkimg.png";
            break;
          case "CLEAR SKY":
            imageSource = "https://media.publit.io/file/portImagesReactWeather/darkimg.png";
            break;
          case "FEW CLOUDS":
            imageSource = "https://media.publit.io/file/portImagesReactWeather/darkimg.png";
        }
      })()}
      <img src={imageSource} width="370px" height="300px" />
    </div>
  );
};

export default WeatherType;
