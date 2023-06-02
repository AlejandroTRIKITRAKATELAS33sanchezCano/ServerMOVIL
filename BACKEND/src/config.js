import { config as dotenv } from 'dotenv';
dotenv();
console.log(process.env.NICKNAME)

export const dbdates = {
  user: process.env.USER || 'root',
  password: process.env.PASSWORD || 'celisSOLIS1027',
  host: process.env.HOST || 'localhost',
  port: process.env.DBPORT || 3306,
  database: process.env.DBNAME || 'mydb'

  /**
   * user:process.env.USER || 'root',
  password:process.env.PASSWORD || 'rfbhAEG03UOygPEGBteZ',
  host:process.env.HOST || 'containers-us-west-197.railway.app',
  port:process.env.DBPORT || 7632,
  database:process.env.DBNAME || 'railway'
   */
}

/*export const PORT = process.env.PORT || 3000
export const USER = process.env.PORT || 'root'
export const PASSWORD = process.env.PORT || 'celisSOLIS1027'
export const DBNAME = process.env.PORT || 'tasksdb'
export const HOST = process.env.PORT || 'localhost'
export const DBPORT = process.env.PORT || 3306 */