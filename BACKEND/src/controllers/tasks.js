import connect from "../database.js";

const getAdmin = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(`SELECT * FROM admin where idAdmin = ${req.params.idAdmin}`);
    //console.log(rows);
    res.json(rows);

    /*res.send("hello world from getTask")
     console.log("hello world from getTask");*/
}
const getidAdmin = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(`SELECT idAdmin FROM admin;`);
    //console.log(rows);
    res.json(rows);
}

const getEmpUrl = async (req, res) => {
    //console.log(`El id dentro del back es: ${req.params.idEmpleado}`)
    const connection = await connect();
    const [rows] = await connection.query(`SELECT EmUrlimg from empleado  where idEmpleado = ${req.params.idEmpleado}`);
    //console.log(rows);
    res.json(rows);
}

const saveAdmin = async (req, res) => {
    const connection = await connect();
    //console.log(`LAS RESPUESTAS DEL BACK EN saveAdmin SON: ${req.body.idEmpleado}, ${req.body.EmNombre},  ${req.body.EmApat},  ${req.body.EmAmat}, ${req.body.EmContrasenna}, ${req.body.Admin_idAdmin}, ${req.body.Eimagen_idEimagen}`)
    const [results] = await connection.query("insert into admin (idAdmin,AdNombre,AdAppat,AdApMat,AdEmail,AdContrasenna,Gestick_idGestick,Aactivo) values (?,?,?,?,?,?,?,?)", [req.body.idAdmin, req.body.AdNombre, req.body.AdAppat, req.body.AdApmat, req.body.AdEmail, req.body.AdContrasenna, 1, 1]);

    res.json({
        id: results.insertId,
        ...req.body,
    })
}


const getEmpleadoId = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(`SELECT idEmpleado FROM empleado;`);
    //console.log(rows);
    res.json(rows);
}

const getProductos = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(`SELECT * FROM productos where Admin_idAdmin = ${req.params.idAdmin}`);
    res.json(rows);
}
const saveProducto = async (req, res) => {
    const connection = await connect();
    //console.log(`LAS RESPUESTAS DEL BACK EN SAVEPRODUCTO SON: ${req.body.idEmpleado}, ${req.body.EmNombre},  ${req.body.EmApat},  ${req.body.EmAmat}, ${req.body.EmContrasenna}, ${req.body.Admin_idAdmin}, ${req.body.Eimagen_idEimagen}`)
    const [results] = await connection.query("INSERT INTO productos(idProductos, PrNombre, PrPrecio, PrExistencias, PrDescripcion, Admin_idAdmin, Marca_idMarca, Categoria_idCategoria, Pcodigo) VALUES (?,?,?,?,?,?,?,?,?)", [req.body.idProductos, req.body.PrNombre, req.body.PrPrecio, req.body.PrExistencias, req.body.PrDescripcion, req.body.Admin_idAdmin, req.body.Marca_idMarca, req.body.Categoria_idCategoria, req.body.Pcodigo]);

    res.json({
        id: results.insertId,
        ...req.body,
    })
}

const getProducto = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(`SELECT * FROM productos where idProductos = ${req.params.idProducto}`);
    res.json(rows);
}

const getMarcas = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(`SELECT MarNombre FROM marca`);
    res.json(rows);
}

const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(`SELECT * FROM empleado where Admin_idAdmin= ${req.params.idAdmin}`);
    res.json(rows);
}
const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(`SELECT * FROM empleado where idEmpleado = ${req.params.idEmpleado}`);
    //console.log(rows);
    res.json(rows[0]);

    /*res.send("hello world from getTask")
     console.log("hello world from getTask");*/
}
const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(`SELECT COUNT(*) FROM empleado`);
    res.json(rows[0]["COUNT(*)"]);
    /*    res.send("hello world from getTaskCount")
        console.log("hello world from getTaskCount");*/
}
const saveTask = async (req, res) => {
    const connection = await connect();
    //console.log(`LAS RESPUESTAS DEL BACK EN SAVE SON: ${req.body.idEmpleado}, ${req.body.EmNombre},  ${req.body.EmApat},  ${req.body.EmAmat}, ${req.body.EmContrasenna}, ${req.body.Admin_idAdmin}, ${req.body.Eimagen_idEimagen}`)
    //console.log(`EL VALOR DEL idEmpleado dentro del back node es : ${req.body.idEmpleado}`)
    const [results] = await connection.query("INSERT INTO empleado(idEmpleado, EmNombre, EmApat, EmAmat, EmContrasenna, EmDireccion1,EmDireccion2,Admin_idAdmin,Admin_Gestick_idGestick,EmURLimg) VALUES (?,?,?,?,?,?,?,?,?,?)", [req.body.idEmpleado, req.body.EmNombre, req.body.EmApat, req.body.EmAmat, req.body.EmContrasenna, 1, 1, 1, 1, req.body.EmURLimg]);

    res.json({
        id: results.insertId,
        ...req.body,
    })

    /*    res.send("hello world from createTask")
    console.log("hello world from createTask");*/
}
const deleteTasks = async (req, res) => {
    const connection = await connect();
    const result = await connection.query(`DELETE FROM empleado where idEmpleado = ${req.params.idEmpleado}`);
    /**    console.log(`EL RESULTADO DEL ID OBTENIDO EN DELETE ES: ${req.params.idEmpleado}`); */
    res.sendStatus(204);

    /*res.send("hello world from deleteTasks")
    console.log("hello world from deleteTasks"); */
}
const updateTasks = async (req, res) => {
    const connection = await connect()
    const results = await connection.query(`UPDATE empleado SET EmNombre='${req.body.EmNombre}', EmApat='${req.body.EmApat}', EmAmat='${req.body.EmAmat}', EmContrasenna='${req.body.EmContrasenna}' WHERE idEmpleado = ${req.body.idEmpleado} and Admin_idAdmin= ${req.body.Admin_idAdmin} and Eimagen_idEimagen= ${req.body.Eimagen_idEimagen}`)
    //console.log(results)
    res.sendStatus(204);

    /*res.send("hello world from updateTasks")
    console.log("hello world from updateTasks"); */
}
export { getEmpUrl, getMarcas, getidAdmin, saveAdmin, saveProducto, getProducto, getEmpleadoId, getProductos, getAdmin, getTasks, getTask, getTaskCount, saveTask, deleteTasks, updateTasks } 