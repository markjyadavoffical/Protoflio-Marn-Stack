const asyncHandler = (requresHandler) =>{
    return(req, res, next)=>{
        Promise.resolve(requresHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}