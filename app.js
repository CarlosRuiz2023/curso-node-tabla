const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require("colors");

console.clear();
console.log(argv);
crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
//console.log("base : yargs", argv.base);

//const base = 3;
//console.log(process.argv);
//const [, , arg3 = "base=5"] = process.argv;
//const [, base = 5] = arg3.split("=");
//console.log(base);
