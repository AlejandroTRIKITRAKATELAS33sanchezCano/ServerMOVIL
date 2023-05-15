import { getIdAdmin } from "../api";

export const GeneraridAdmin = async () => {
  var idNewAdmin = 0;
  var existingId = true;
  const data = await getIdAdmin();
  try {
      while (existingId || idNewAdmin < 100000) {
        existingId = false;
          idNewAdmin = Math.floor(Math.random() * 1000000);
          data.forEach((row) => {
              //console.log(`EL ROW DEL FOREACH ES: ${row.idEmpleado}`)
              if (idNewAdmin === row.idAdmin) {
                  console.log(`ENTRÓ AL IF DE NUEVO EMPLEADO`)
                  existingId = true;
              }
          });
      }
      //console.log(`EL VALOR DEL ID EN GENERATE.JS ${idNewEmpleado}`)
      return idNewAdmin;
  } catch (error) {
      console.log(error);
  }
};