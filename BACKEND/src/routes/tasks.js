import { Router } from 'express';
import { updateProducto, deleteProductos, getProductUrl, getCategorias, getProductoId, getEmpUrl, getMarcas, getidAdmin, saveAdmin, saveProducto, getProducto, getEmpleadoId, getProductos, getTasks, getTask, getTaskCount, saveTask, deleteTasks, updateTasks, getAdmin } from '../controllers/tasks.js';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint 
 */



/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Obtiene todas las tasks select * from
 *    tags: [Tasks]
 */

router.get('/tasks', getTasks);
/**
 * @swagger
 * /admin:
 *  get:
 *    summary: Obtiene los datos del producto por medio de un idProducto
 *    tags: [Tasks]
 */
router.get('/productos/:idProducto', getProducto);
/**
 * @swagger
 * /tasks:
 *  post:
 *     summary: crea un nuevo producto
 *     tags: [Tasks]
 */

router.post('/productos', saveProducto);
router.get('/productoid', getProductoId);

/**
 * @swagger
 * /admin:
 *  get:
 *    summary: Obtiene el id  (empleados)
 *    tags: [Tasks]
 */
router.get('/empleadourl/:idEmpleado', getEmpUrl);
router.get('/productourl/:idProductos', getProductUrl);
router.get('/empleadoid', getEmpleadoId);
/**
 * @swagger
 * /admin:
 *  get:
 *    summary: Guarda un administrador
 *    tags: [Tasks]
 */
router.get('/adminid', getidAdmin);

router.post('/admin', saveAdmin);
/**
 * @swagger
 * /admin:
 *  get:
 *    summary: Obtiene el admin (dueño)
 *    tags: [Tasks]
 */
router.get('/admin/:idAdmin', getAdmin);
/**
 * @swagger
 * /admin:
 *  get:
 *    summary: Obtiene los productos
 *    tags: [Tasks]
 */
router.get('/productosmarca', getMarcas);

router.get('/productoscategoria', getCategorias);

router.get('/productosAdmin/:idAdmin', getProductos);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Obtiene todas las tasks (número de tareas) 
 *    tags: [Tasks]
 */

router.get('/tasks/count', getTaskCount);
/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Obtiene un task especifico por el id
 *    tags: [Tasks]
 */

router.get('/tasksComplete/:idAdmin', getTasks);

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Obtiene un task especifico por el id
 *    tags: [Tasks]
 */

router.get('/tasks/:idEmpleado', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *     summary: crea un nuevo task
 *     tags: [Tasks]
 */

router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: Elimina un task con un id
 *      tags: [Tasks]
 */

router.delete('/tasks/:idEmpleado', deleteTasks);
router.delete('/productos/:idProductos', deleteProductos);

/**
 * @swagger
 * /tasks:
 *  put:
 *    summary: Actualiza un task por un id
 *    tags: [Tasks]
 */

router.put('/tasks/:id', updateTasks);

router.put('/productos/:id', updateProducto);


export default router;

