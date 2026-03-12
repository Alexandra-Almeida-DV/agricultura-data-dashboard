const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/agriculture.db", (err) => {
  if (err) {
    console.error("Erro ao conectar:", err.message);
  } else {
    console.log("SQLite conectado");
  }
});

module.exports = db;
