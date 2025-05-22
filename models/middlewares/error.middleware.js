

const errorMiddleware = (err, req, res, next) => {
    try{
        let error ={ ...err};
        error.message = err.message;
        console.log(err);

// mongoose ba objectid
if (err.name === 'CastError') {
            const message = `Resource not found. Invalid: ${err.path}`;
            error = new Error(message, 404);
        }
        // mongoose duplicate key
if (err.code === 11000) {
            const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
            error = new Error(message, 400);
        }        
if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map((val) => val.message);
            error = new Error(message, 400);
        }
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || 'Internal Server Error',
            stack: error.stack,
        });



    }catch(error){
        next(error);

    }
}
export  default errorMiddleware;