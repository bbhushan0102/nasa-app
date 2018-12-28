import axios from "axios";

const BASE_URL = "https://images-api.nasa.gov";
export const getAsset = nasa_id => {
  return axios.get(`${BASE_URL}/asset/${nasa_id}`).then(({ data }) => {
    return data;
  });
};

export const getMetadata = nasa_id => {
  return axios.get(`${BASE_URL}/metadata/${nasa_id}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};
