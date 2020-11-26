import store from "./store";
import { duplicateSetAction } from "./actions/index";
const axios = require("axios").default;

const callBackendAPI = async (data) => {
  axios
    .post("/post", {
      data,
    })
    .then(function (response) {
      const dupeCheck = response.data.express;
      if (dupeCheck === "duplicate") {
        store.dispatch(duplicateSetAction(true));
        return;
      }

      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default callBackendAPI;
