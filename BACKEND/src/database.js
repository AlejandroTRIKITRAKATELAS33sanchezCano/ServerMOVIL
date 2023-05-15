import mysql2 from "mysql2/promise"
import{dbdates} from './config.js'



const connect = async () =>{
   /* const conn = await mysql2.createConnection(dbdates);
    const [rows] = await conn.query('SELECT 1+1');
    console.log(rows); */
    return await mysql2.createPool(dbdates);
}

/*connect();*/

export default connect;
