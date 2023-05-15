import {config as dotenv} from 'dotenv';
dotenv();
console.log(process.env.NICKNAME)

export const dbdates={
    user:process.env.USER || 'root',
    password:process.env.PASSWORD || 'celisSOLIS1027',
    host:process.env.HOST || 'localhost',
    port:process.env.DBPORT || 3306,
    database:process.env.DBNAME || 'mydb'
}

/*export const PORT = process.env.PORT || 3000
export const USER = process.env.PORT || 'root'
export const PASSWORD = process.env.PORT || 'celisSOLIS1027'
export const DBNAME = process.env.PORT || 'tasksdb'
export const HOST = process.env.PORT || 'localhost'
export const DBPORT = process.env.PORT || 3306 */