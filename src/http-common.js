import axios from "axios";

export default axios.create({
  baseURL: "https://api.airtable.com/v0/appG8fsqYsRBUDwHx/",
  headers: {
    Authorization:
      "Bearer ",
    "Content-type": "application/json",
  },
});
