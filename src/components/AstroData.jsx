import React from "react";
import { Link } from "@reach/router";
import "../main.css";

function AstroData(props) {
  const astroData = props.data.collection.items;
  const search = props.search;
  // if (props.search === "") search = "image";

  return (
    <div>
      <h2>Nasa Recent Images</h2>
      {astroData &&
        astroData.map(data => {
          // if condition here
          if (data.data[0].media_type === search)
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
          if (data.data[0].media_type === search)
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
          // if (data.data[0].media_type === "image" && "videos")
          //   return (
          //     <div key={data.data[0].nasa_id}>
          //       <h3>{data.data[0].title}</h3>
          //       <div>{data.data[0].media_type} ...</div>
          //       <div>{data.data[0].description}</div>
          //       <div>
          //         {/* {(data.data[0].media_type==='image')} */}
          //         <Link to={`/asset/${data.data[0].nasa_id}`}>
          //           {" "}
          //           <img
          //             src={data.links[0].href}
          //             alt=""
          //             width="700"
          //             height="300"
          //           />
          //         </Link>
          //       </div>{" "}
          //       <br />{" "}
          //     </div>
          //   );
        })}
      <span />
    </div>
  );
}
export default AstroData;
