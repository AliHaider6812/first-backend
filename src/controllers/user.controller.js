import {asyncHandler} from "../utils/asynHandler.js";
import{ApiError} from "../utils/apiError.js";
import {User} from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser=asyncHandler(async(req,res)=>{
    //get user details from frontend
    //validation- not empty
    //check user account already exists or not:username,email,
    //check for images and avatar
    //upload them to cloudinary,avatr
    //create user object and save to database
    //remove password and refresh token field from response
    //check for user creation
    //return response
    
    const {fullName,email,username,password}=req.body
    console.log("email:",email);

    if (
        [fullName,email,username,password].some((field) =>
            field?.trim()==="")   
    )
    {
        throw new ApiError(400,"All fields are required")
    }


    const existedUser=  await User.findOne({
        $or:[{email:email},{username:username}]
    })
    if (existedUser) {
    throw new ApiError(409,"User already exists with this email or username")
    }
//console.log(req.files);
    const avatarLocalPath = req.files?.avatar[0]?.path;
   // const coverImageLocalPath = req.files?.coverImage?.map((file) => file.path);
    // ❌ CHANGE THIS:
// const coverImageLocalPath = req.files?.images?.map((file) => file.path);

//  TO THIS:
let coverImageLocalPath;
if (req.files && Array.isArray(req.files.images) && req.files.images.length > 0) {
    coverImageLocalPath = req.files.images[0].path;
}

    if(!avatarLocalPath )
         {
        throw new ApiError(400,"Avatar and cover images are required")
        }

    // Upload on cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath);
   const coverImage = await uploadOnCloudinary(coverImageLocalPath);


   if (!avatar ) {
    throw new ApiError(400,"Avatar file is required")
   }
    // Create user object


    const user=await User.create({
        fullName,
        email,
        username:username.toLowerCase(),
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url||"",
    });

    const createdUser=await User.findById(user._id)
    .select("-password -refreshToken");

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while creating user")
    }


    
    // Save user to database
    await user.save();

    // Remove password and refresh token from response
    user.password = undefined;
    user.refreshToken = undefined;

    // Return response
    return res.status(200).json
    (new ApiResponse(200, createdUser,"User registered successfully"));
})

export {registerUser}