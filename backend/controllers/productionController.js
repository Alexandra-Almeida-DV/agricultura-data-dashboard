const db = require("../database/database");

exports.getProduction = (req, res) => {
    db.all("SELECT * FROM production", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
  
        res.json(rows);
    });
};
