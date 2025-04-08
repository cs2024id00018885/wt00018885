const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Flash messages (session + connect-flash)
app.use(
  session({
    secret: "fitnesssecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

// Global flash variables available in views
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// View engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Routes
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

const goalRoutes = require("./routes/goals");
app.use("/goals", goalRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
