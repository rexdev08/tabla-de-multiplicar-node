const fs = require("fs");
const colors = require("colors");

const multiply = async (base = 5, size = 10, listar = false) => {
  try {
    let info = "";
    let consola = "";

    for (let i = 0; i <= size; i++) {
      info += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log("==========".green);
      console.log("Tabla del:".green, colors.yellow(base));
      console.log("==========".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, info);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { multiply };
