import {config as conf} from 'dotenv'


conf();

const _config = {
    port: process.env.PORT,
    databaseURL: process.env.MONGO_CONNECTION_STRING,
    // used for find dev envornment or production envornment
    env: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
    cloudinaryCloud: process.env.CLOUDINARY_CLOUD,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinarySecret: process.env.CLOUDINARY_API_SECRET,
    frontendDomain: process.env.FRONTEND_DOMAIN,
};


export const config = Object.freeze(_config);