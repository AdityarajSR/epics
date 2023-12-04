// Importing the app
const app = require("./app");

const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });

const connectDatabase = require("./database/database")

// Handling uncaught exception
process.on('uncaughtException', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception in the code`);
    process.exit(1);
})

connectDatabase();

const server = app.listen(process.env.PORT, () =>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

// Unhandled Promise rejection
process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`)

    server.close(()=>{
        process.exit(1);
    })
})

