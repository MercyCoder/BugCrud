import React from "react";
import Airtable from "airtable";
class BugsAirtableService {
  getAll() {
    console.log("response");
    return http.get("/Bugs");
  }
  // Get a base ID
  base = new Airtable({
    apiKey:
      "",
  }).base("appG8fsqYsRBUDwHx");
  getATRecords = async (tableName) => {
    try {
      const records = await base(tableName).select().all();
      console.log("AIRTABLE:" + records);
      return records;
      //.map(record => ({ id: record.id, ...record.fields }));
    } catch (error) {
      console.error("Error fetching records:", error);
      return [];
    }
  };
  // Update

  // Delete
}
export default new BugsAxiosService();
