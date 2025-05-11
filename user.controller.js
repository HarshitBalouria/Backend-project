import { asyncHandler } from "../utils/asyncHandler.js"


const registerUser = asyncHandler(async (req, res) => {

    const {username,password,email,fullname}=req.body
    console.log(username,email);

    if ([username,password,email,fullname].some()) {
        
    }

})
export { registerUser }