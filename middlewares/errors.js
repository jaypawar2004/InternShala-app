exports.generatedErrors = (err, req, res, next ) => {
const statusCode = err.statusCode || 500;
// error 
res.status(statusCode).json({
    message: err.message,
    errName: err.name,
     
})
};