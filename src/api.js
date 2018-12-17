import axios from "axios";
// import { navigate } from "@reach/router";

const BASE_URL = "https://images-api.nasa.gov";
export const getAsset = nasa_id => {
  return axios.get(`${BASE_URL}/asset/${nasa_id}`).then(({ data }) => {
 
    return data;
  });
};


