import * as dotenv from 'dotenv';
import { IConfig } from './IConfig';

dotenv.config();

export const configurations: IConfig = Object.freeze({
    port: process.env.PORT || 8000,
    nodeEnv: process.env.NODE_ENV || 'local'
});
