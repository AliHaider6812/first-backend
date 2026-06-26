//  FIXED CODE
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [], //  Ensure this is plural "errors"
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors; //  Now it perfectly references the parameter above

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };































// class ApiError extends Error{
//     constructor(
//         statuscode,
//         message="something is wrong",
//         error=[],
//         stack=""
//     ){
//         super(message)
//         this.statuscode=statuscode
//         this.data=null
//         this.message=message
//         this.success=false;
//         this.errors=errors

//         if (stack){
//             this.stack =stack

//         }
//         else{
//             error.captureStackTrace(this, this.constructor)
//         }
//     }
    
// }
// export {ApiError}