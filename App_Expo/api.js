const API = 'http://10.0.2.2:3000/tasks'
const APIEI = 'http://10.0.2.2:3000/empleadoid'
const APIA = 'http://10.0.2.2:3000/admin'
const APIAI = 'http://10.0.2.2:3000/adminid'
const APIP = 'http://10.0.2.2:3000/productos'
const APIPM = 'http://10.0.2.2:3000/productosmarca'
const APIPC = 'http://10.0.2.2:3000/productoscategoria'
const APIAD = 'http://10.0.2.2:3000/tasksComplete'
const APIADP = 'http://10.0.2.2:3000/productosAdmin'
const APIEU = 'http://10.0.2.2:3000/empleadourl'

//const API = 'http://192.168.137.1:3000/tasks'

export const saveProducto = async (dataproducto) => {
  console.log(`ENTRÓ AL SAVE PRODUCTO Y EL DATAPRODUCTO AQUÍ ES: ${dataproducto.PrNombre} `)
  const res = await fetch(APIP, {
    method: 'POST',
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataproducto)
  })
  return await res.json()
}

export const getProducto = async (idProducto) => {
  try {
    //console.log(`EL idProductos en getProducto es: ${idProducto}`)
    const res = await fetch(`${APIP}/${idProducto}`);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener los datos en getProducto:', error);
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
  //console.log(`ENTRÓ AL SAVE TASK Y EL TASK AQUÍ ES: ${newTask.EmNombre}, ${newTask.EmAmat}, ${newTask.EmApat}, ${newTask.EmContrasenna}`)
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
  })
  return await res.json()
}

export const deleteTask = async (idEmpleado) => {

  await fetch(`${API}/${idEmpleado}`, {
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



export const selectAdmin = async (idAdmin) => {
  try {
    console.log(`EL idAdmin en selectAdmin es: ${idAdmin}`)
    const res = await fetch(`${APIA}/${idAdmin}`);
    return await res.json();
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
