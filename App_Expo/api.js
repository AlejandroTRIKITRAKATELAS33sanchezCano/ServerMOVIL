/**
 * const API = 'http://192.168.252.202:5000/tasks';
const APIEI = 'http://192.168.252.202:5000/empleadoid';
const APIA = 'http://192.168.252.202:5000/admin';
const APIAI = 'http://192.168.252.202:5000/adminid';
const APIP = 'http://192.168.252.202:5000/productos';
const APIPM = 'http://192.168.252.202:5000/productosmarca';
const APIPC = 'http://192.168.252.202:5000/productoscategoria';
const APIAD = 'http://192.168.252.202:5000/tasksComplete';
const APIADP = 'http://192.168.252.202:5000/productosAdmin';
const APIEU = 'http://192.168.252.202:5000/empleadourl';
const APIPU = 'http://192.168.252.202:5000/productourl';
const APIPID = 'http://192.168.252.202:5000/productoid';
 */


const API = 'https://gestick-servermobile.up.railway.app/tasks'
const APIEI = 'https://gestick-servermobile.up.railway.app/empleadoid'
const APIA = 'https://gestick-servermobile.up.railway.app/admin'
const APIAI = 'https://gestick-servermobile.up.railway.app/adminid'
const APIP = 'https://gestick-servermobile.up.railway.app/productos'
const APIPM = 'https://gestick-servermobile.up.railway.app/productosmarca'
const APIPC = 'https://gestick-servermobile.up.railway.app/productoscategoria'
const APIAD = 'https://gestick-servermobile.up.railway.app/tasksComplete'
const APIADP = 'https://gestick-servermobile.up.railway.app/productosAdmin'
const APIEU = 'https://gestick-servermobile.up.railway.app/empleadourl'
const APIPU = 'https://gestick-servermobile.up.railway.app/productourl'
const APIPID = 'https://gestick-servermobile.up.railway.app/productoid'



/**
 * const API = 'http://10.0.2.2:5000/tasks'
const APIEI = 'http://10.0.2.2:5000/empleadoid'
const APIA = 'http://10.0.2.2:5000/admin'
const APIAI = 'http://10.0.2.2:5000/adminid'
const APIP = 'http://10.0.2.2:5000/productos'
const APIPM = 'http://10.0.2.2:5000/productosmarca'
const APIPC = 'http://10.0.2.2:5000/productoscategoria'
const APIAD = 'http://10.0.2.2:5000/tasksComplete'
const APIADP = 'http://10.0.2.2:5000/productosAdmin'
const APIEU = 'http://10.0.2.2:5000/empleadourl'
const APIPU = 'http://10.0.2.2:5000/productourl'
const APIPID = 'http://10.0.2.2:5000/productoid'
 */

 
/**
 * const APIEI = 'http://192.168.252.202:3000/empleadoid';
const APIA = 'http://192.168.252.202:3000/admin';
const APIAI = 'http://192.168.252.202:3000/adminid';
const APIP = 'http://192.168.252.202:3000/productos';
const APIPM = 'http://192.168.252.202:3000/productosmarca';
const APIPC = 'http://192.168.252.202:3000/productoscategoria';
const APIAD = 'http://192.168.252.202:3000/tasksComplete';
const APIADP = 'http://192.168.252.202:3000/productosAdmin';
const APIEU = 'http://192.168.252.202:3000/empleadourl';
const APIPU = 'http://192.168.252.202:3000/productourl';
const APIPID = 'http://192.168.252.202:3000/productoid';
 */
/*
const API = 'http://192.168.252.202:5000/tasks'
const APIEI = 'http://192.168.252.202:5000/empleadoid';
const APIA = 'http://192.168.252.202:5000/admin';
const APIAI = 'http://192.168.252.202:5000/adminid';
const APIP = 'http://192.168.252.202:5000/productos';
const APIPM = 'http://192.168.252.202:5000/productosmarca';
const APIPC = 'http://192.168.252.202:5000/productoscategoria';
const APIAD = 'http://192.168.252.202:5000/tasksComplete';
const APIADP = 'http://192.168.252.202:5000/productosAdmin';
const APIEU = 'http://192.168.252.202:5000/empleadourl';
const APIPU = 'http://192.168.252.202:5000/productourl';
const APIPID = 'http://192.168.252.202:5000/productoid';
*/

export const saveProducto = async (dataproducto) => {
  console.log(`ENTRÓ AL SAVE PRODUCTO Y EL DATAPRODUCTO AQUÍ ES: ${dataproducto.PrNombre} `)
  try {
    if (!dataproducto) {
      console.log('Está vacío')
    } else {
      const res = await fetch(APIP, {
        method: 'POST',
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataproducto)
      })
      return await res.json()
    }
  } catch (error) {
    console.error('Hay vacío:', error);
  }
}

export const getProducto = async (idProducto) => {
  try {
    console.log(`EL idProductos en getProducto es: ${idProducto}`)
    const res = await fetch(`${APIP}/${idProducto}`);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener los datos en getProducto:', error);
  }
}


export const getIdProducto = async () => {
  try {
    const res = await fetch(APIPID);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener los id en getIdProducto ', error);
  }
}

export const getProductos = async (idAdmin) => {
  try {
    const res = await fetch(`${APIADP}/${idAdmin}`);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener los datos en getProductos:', error);
  }
}


export const getMarcas = async () => {
  try {
    const res = await fetch(APIPM);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener las marcas en getMarcas', error);
  }
}

export const getCategorias = async () => {
  try {
    const res = await fetch(APIPC);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener las marcas en getCategorias', error);
  }
}

export const getIdEmpleado = async () => {
  try {
    const res = await fetch(APIEI);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener los datos getIdEmpleado ', error);
  }
}

export const getEmpUrl = async (idEmpleado) => {
  //console.log(`El idEmpleado dentro de getEmpUrl es: ${idEmpleado}`)
  try {
    const res = await fetch(`${APIEU}/${idEmpleado}`);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener los datos en getEmpUrl:', error);
  }
}

export const getProductUrl = async (idProductos) => {
  console.log(`El idProducto dentro de getEmpUrl es: ${idProductos}`)
  try {
    const res = await fetch(`${APIPU}/${idProductos}`);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener los datos en getProductUrl:', error);
  }
}

export const gestTask = async (idEmpleado) => {
  try {
    const res = await fetch(`${API}/${idEmpleado}`);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener los datos en gestTask:', error);
  }

}

export const getTasks = async (idAdmin) => {
  try {
    const res = await fetch(`${APIAD}/${idAdmin}`);
    const data = await res.json();
    console.log('Datos en getTasks:', data);
    return await data
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

export const saveTask = async (newTask) => {
  try {
    //console.log(`ENTRÓ AL SAVE TASK Y EL TASK AQUÍ ES: ${newTask.EmNombre}, ${newTask.EmAmat}, ${newTask.EmApat}, ${newTask.EmContrasenna}`)
    const res = await fetch(API, {
      method: 'POST',
      headers: {
        Accept: 'application/json', 'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    return await res.json()
  } catch (error) {
    console.error('Hay vacío:', error);

  }
}

export const deleteTask = async (idEmpleado) => {

  await fetch(`${API}/${idEmpleado}`, {
    method: 'DELETE'
  })
}

export const deleteProducto = async (idProductos) => {
  await fetch(`${APIP}/${idProductos}`, {
    method: 'DELETE'
  })
}

export const updateEmpleado = async (idEmpleado, content) => {
  console.log(`LOS DATOS EN UPDATE EMPLEADO EN API SON : ${idEmpleado}, ${content}`)
  const res = await fetch(`${API}/${idEmpleado}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  })
  return res;

}

export const updateProducto = async (idProducto, content) => {
  const res = await fetch(`${APIP}/${idProducto}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  })
  return res;
}



export const selectAdmin = async (idAdmin) => {
  try {
    console.log(`EL idAdmin en selectAdmin es: ${idAdmin}`)
    if (isNaN(idAdmin)) {
      console.log('NO ES NÚMERO')
    } else {
      console.log('ES UN NÚMERO')
      const res = await fetch(`${APIA}/${idAdmin}`);
      return await res.json();
    }
  } catch (error) {
    console.error('Error al obtener los datos en selectAdmin:', error);
  }
}

export const saveAdmin = async (adminContent) => {
  const res = await fetch(APIA, {
    method: 'POST',
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json'
    },
    body: JSON.stringify(adminContent)
  })
  return await res.json()
}

export const getIdAdmin = async () => {
  try {
    const res = await fetch(APIAI);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener los datos getIdAdmin ', error);
  }
}
