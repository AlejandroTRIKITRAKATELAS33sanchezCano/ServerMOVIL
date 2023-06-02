import { getIdProducto } from "../api";

export const GenerarIdProducto = async () => {
  var idNewProducto = 0;
  var existingId = true;
  const data = await getIdProducto();
  try {
      while (existingId || idNewProducto < 100000) {
        existingId = false;
        idNewProducto = Math.floor(Math.random() * 1000000);
          data.forEach((row) => {
              //console.log(`EL ROW DEL FOREACH ES: ${row.idEmpleado}`)
              if (idNewProducto === row.idAdmin) {
                  //console.log(`ENTRÓ AL IF DE NUEVO EMPLEADO`)
                  existingId = true;
              }
          });
      }
      console.log(`EL VALOR DEL ID EN GENERATE.JS ${idNewProducto}`)
      return idNewProducto;
  } catch (error) {
      console.log(error);
  }
};