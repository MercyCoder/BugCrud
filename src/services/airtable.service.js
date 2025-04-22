import React from "react";
import Airtable from "airtable";
// Get a base ID for an instance of art gallery example
var base = new Airtable({ apiKey: 'patTF6uztQ1JYeyXj.61b1a82f86b5de52e7b1c3acbbd2665539483848801b678407975f8496651aed' }).base('appG8fsqYsRBUDwHx');
export const getATRecords = async (tableName) => {
  try {
    const records = await base(tableName).select().all();
    console.log("AIRTABLE:"+records);
    return records;
    //.map(record => ({ id: record.id, ...record.fields }));
  } catch (error) {
    console.error("Error fetching records:", error);
    return [];
  }
};