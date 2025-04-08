const goalService = require("../../services/goals");

exports.getAll = (req, res) => {
  goalService.getAllGoals((goals) => {
    res.render("goals", { title: "Fitness Goals", goals });
  });
};

exports.getAdd = (req, res) => {
  res.render("addGoal", { title: "Add Goal" });
};

exports.postAdd = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).render("addGoal", {
      title: "Add Goal",
      error: "All fields are required.",
    });
  }

  goalService.createGoal({ title, description }, () => {
    req.flash("success_msg", "Goal added successfully!");
    res.redirect("/goals");
  });
};

exports.getEdit = (req, res) => {
  goalService.getGoalById(req.params.id, (goal) => {
    if (!goal) return res.status(404).send("Goal not found");
    res.render("editGoal", { title: "Edit Goal", goal });
  });
};

exports.postEdit = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    goalService.getGoalById(req.params.id, (goal) => {
      return res.status(400).render("editGoal", {
        title: "Edit Goal",
        goal,
        error: "All fields are required.",
      });
    });
  } else {
    goalService.updateGoal(req.params.id, { title, description }, () => {
      req.flash("success_msg", "Goal updated successfully!");
      res.redirect("/goals");
    });
  }
};

exports.deleteGoal = (req, res) => {
  goalService.deleteGoal(req.params.id, () => {
    req.flash("success_msg", "Goal deleted successfully!");
    res.redirect("/goals");
  });
};
