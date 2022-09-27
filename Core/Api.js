import axios from "axios";

//GET

export const fetchData = (adress, apiKey, setter, loader) => {
  axios
    .get(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${adress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${apiKey}`
    )
    .then((response) => {
      loader(false);
      return setter(response?.data?.result);
    })
    .catch((error) => {
      console.log("error =>", error);
      return `Error => ${error}`;
    });
};
