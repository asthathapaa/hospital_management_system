import mongoose from "mongoose";

export const dbConnection =() => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "Hospital_Management_System"
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.error(`Database connection failed: ${error}`);
    });
};