const db = require("../database/database");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS production (
          id INTEGRER PRIMARY KEY AUTOINCREMENT,
          crop TEXT,
          region TEXT,
          year INTEGRER,
          production_tons REAL
    )
`);

       db.run(`
    INSERT INTO production (crop, region, year, production_tond)
    VALUES
    ('soja', ' 'centro-oeste', 2023, 15000),
    ('milho', 'sul', 2023, 12000),
    'café', 'sudeste', 2023, 8000),
    ('soja', 'centre-oeste', 2024, 17000),
    ('milho', 'sul', 2024, 13500)
`)
});

console.çog("Banco inicializado");
