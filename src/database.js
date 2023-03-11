import { connect } from "mongoose";

(async () =>{
    try {
        const db = await connect("mongodb://localhost:27017/producto");
        console.log("Database Connected to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();