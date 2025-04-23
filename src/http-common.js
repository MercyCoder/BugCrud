import axios from "axios";

export default axios.create({
  baseURL: "https://api.airtable.com/v0/AIRTABLE_BASE_ID/",
  headers: {
    Authorization:
      "Bearer AIRTABLE_API_TOKEN",
    "Content-type": "application/json",
  },
});
