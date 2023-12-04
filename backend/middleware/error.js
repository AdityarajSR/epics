const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) =>{
    err.statusCode =  err.statusCode || 500;
    err.message = err.message || "Internal server error";


    // wrong mongo id error which is qunique for each entry
    if(err.name === "CastError"){
        const message = `Resource not found, Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    res.status(err.statusCode).json({
        success : false,
        // error : err,
        // error : err.stack,
        // message : "Saman nhi mila",
        message : err.message,
    })
}



