require("dotenv").config();
const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {};  // no options needed in Mongoose 9

        const useDBAuth = process.env.USE_DB_AUTH || false;
        if(useDBAuth){
            connectionParams.user = process.env.MONGO_USERNAME;
            connectionParams.pass = process.env.MONGO_PASSWORD;
        }

        await mongoose.connect(process.env.MONGO_CONN_STR, connectionParams);
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
