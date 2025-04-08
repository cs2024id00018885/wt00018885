const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("goals.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS goals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL
    )
  `);
});

module.exports = db;
