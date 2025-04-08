const db = require("../db");

function getAllGoals(callback) {
  db.all("SELECT * FROM goals", [], (err, rows) => {
    if (err) throw err;
    callback(rows);
  });
}

function getGoalById(id, callback) {
  db.get("SELECT * FROM goals WHERE id = ?", [id], (err, row) => {
    if (err) throw err;
    callback(row);
  });
}

function createGoal(data, callback) {
  const { title, description } = data;
  db.run(
    "INSERT INTO goals (title, description) VALUES (?, ?)",
    [title, description],
    function (err) {
      if (err) throw err;
      callback(this.lastID);
    }
  );
}

function updateGoal(id, data, callback) {
  const { title, description } = data;
  db.run(
    "UPDATE goals SET title = ?, description = ? WHERE id = ?",
    [title, description, id],
    function (err) {
      if (err) throw err;
      callback();
    }
  );
}

function deleteGoal(id, callback) {
  db.run("DELETE FROM goals WHERE id = ?", [id], function (err) {
    if (err) throw err;
    callback();
  });
}

module.exports = {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal,
};
