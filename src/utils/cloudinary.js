import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    //file uploaded succcessfully
    console.log("file is uploaded on cloudinary",response.url);
    return response;
    //remove the file from local uploads
    }catch(error){
        fs.unlinkSync(localFilePath);//remove locally saved temporary file as the upload operation got failed
        console.log("error while uploading on cloudinary",error);
        return null;
    } 
}

export {uploadOnCloudinary};
export default cloudinary;
