// Importing the app
const app = require("./app");

const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });

const connectDatabase = require("./database/database")

connectDatabase();

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

