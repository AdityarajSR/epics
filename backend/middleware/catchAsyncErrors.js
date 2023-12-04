module.exports = theFunc =>(req, res, next) =>{
    Promise.resolve(theFunc(req, res, next)).catch(next);
}

// Promise.resolve(theFunc(req, res, next)).catch(next): This line wraps 
// the execution of theFunc in a Promise. This allows theFunc to be asynchronous and
//  return a Promise. If theFunc returns a rejected Promise (throws an error), the 
// catch block will be triggered, and the error will be passed to the next function, which 
// is used to pass control to the next middleware or route handler.