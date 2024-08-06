import {config as conf} from 'dotenv'

conf();

const _config = {
    port: process.env.PORT,
    databaseURL: process.env.MONGO_CONNECTION_STRING,
    // used for find dev envornment or production envornment
    env: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
};


export const config = Object.freeze(_config);