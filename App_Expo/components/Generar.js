import { getIdEmpleado } from "../../App_Expo/api"; 

export const GenerarIdEmpleado = async () => {
  var idNewEmpleado = 0;
  var existingId = true;
  const data = await getIdEmpleado();
  try {
      while (existingId || idNewEmpleado < 100000) {
          existingId = false;
          idNewEmpleado = Math.floor(Math.random() * 1000000);
          data.forEach((row) => {
              //console.log(`EL ROW DEL FOREACH ES: ${row.idEmpleado}`)
              if (idNewEmpleado === row.idEmpleado) {
                  console.log(`ENTRÓ AL IF DE NUEVO EMPLEADO`)
                  existingId = true;
              }
          });
      }
      console.log(`EL VALOR DEL ID EN GENERATE.JS ${idNewEmpleado}`)
      return idNewEmpleado;
  } catch (error) {
      console.log(error);
  }
};