const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";
    for (let index = 1; index < hasta + 1; index++) {
      consola += `${colors.red(base)} ${"x".blue} ${colors.red(index)} ${
        "=".blue
      } ${colors.magenta(index * base)}\n`;
      salida += `${base} x ${index} = ${index * base}\n`;
    }
    if (listar) {
      console.log("==============================".blue);
      console.log("tabla del: ".red + colors.magenta(base));
      console.log("==============================".blue);
      console.log(consola);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  crearArchivo,
};
