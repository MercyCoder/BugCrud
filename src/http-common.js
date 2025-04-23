import axios from "axios";

export default axios.create({
  // Add the Airtable BaseID and bearer token here:
  baseURL: "https://api.airtable.com/v0/AIRTABLE_BASEID/",
  headers: {
    Authorization:
      "Bearer {AIRTABLE_BEARER_TOKEN}",
    "Content-type": "application/json",
  },
});
