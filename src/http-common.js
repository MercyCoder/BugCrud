import axios from "axios";

export default axios.create({
  baseURL: "https://api.airtable.com/v0/appG8fsqYsRBUDwHx/Bugs/",
  headers: {
    Authorization:
      "Bearer patTF6uztQ1JYeyXj.61b1a82f86b5de52e7b1c3acbbd2665539483848801b678407975f8496651aed",
    "Content-type": "application/json",
  },
});
