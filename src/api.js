const axios = require("axios").default;

let jsonData;

const callBackendAPI = async (data) => {
  const response = axios
    .post("/post", {
      data,
    })
    .then(function (response) {
      jsonData = JSON.stringify(response.data.data.email);
      console.log("User Submitted: " + jsonData);
    })
    .catch(function (error) {
      console.log(error);
    });
  const body = JSON.stringify(response.data);
  return body;
};

export default callBackendAPI;
