const asyncHandler=(reqHandler)=>{
    return async (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next)).
        catch((error)=>next(err))
    }
}

// export {asyncHandler}
// const asyncHandler=()=>(fn)=> async (req,res,next) =>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(Array.code  || 500).json({
//             success:false,
//             message:error.message || "Internal Server Error"
//         })
//     }
// }