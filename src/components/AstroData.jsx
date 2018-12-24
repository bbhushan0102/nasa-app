import React from "react";
import { Link } from "@reach/router";
import "../main.css";

function WeatherForcast(data) {
  const astroData = data.data.collection.items;
  console.log(astroData);
  return (
    <div>
      <h2>Nasa Recent Images</h2>
      {astroData &&
        astroData.map(data => {
          return (
            <div key={data.data[0].nasa_id}>
              <h3>{data.data[0].title}</h3>
              <div>{data.data[0].media_type} ...</div>
              <div>{data.data[0].description}</div>
              <div>
                {/* {(data.data[0].media_type==='image')} */}
                <Link to={`/asset/${data.data[0].nasa_id}`}>
                  {" "}
                  <img
                    src={data.links[0].href}
                    alt=""
                    width="700"
                    height="300"
                  />
                </Link>
              </div>{" "}
              <br />{" "}
            </div>
          );
        })}
      <span />
    </div>
  );
}
export default WeatherForcast;
