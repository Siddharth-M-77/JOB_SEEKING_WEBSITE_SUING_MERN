import mongoose from "mongoose";
import dotenv from "dotenv"

export const dbConnection = () => {
  mongoose
    .connect(process.env.URI, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
