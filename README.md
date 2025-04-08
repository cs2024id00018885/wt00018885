# Fitness Goals Tracker 🏋️‍♂️

A simple CRUD web application to help you set, view, edit, and delete your fitness goals. Built with **Node.js**, **Express**, **SQLite**, and **Pug**.

## 🚀 Features

- Add new fitness goals (e.g., "Lose weight: 70kg")
- View all your goals in a clean layout
- Edit or delete goals anytime
- Flash messages to confirm actions (auto-dismiss)
- Responsive and clean UI using custom CSS

## 📁 Project Structure

```
project/
├── controllers/
│   └── goals/
│       └── index.js
├── routes/
│   └── goals.js
├── services/
│   └── goals.js
├── views/
│   ├── layout.pug
│   ├── goals.pug
│   ├── addGoal.pug
│   └── editGoal.pug
├── public/
│   ├── styles/
│   │   └── style.css
│   └── javascripts/
│       └── main.js
├── data/
│   └── goals.db (SQLite file)
├── app.js
└── package.json
```

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
- [Pug](https://pugjs.org/)
- CSS & Vanilla JavaScript

## 💾 Getting Started

1. **Clone the repo:**

```bash
git clone https://github.com/yourusername/fitness-goals-tracker.git
cd fitness-goals-tracker
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the app:**

```bash
npm start
```

4. **Visit the app:**

Open your browser and go to [http://localhost:3000](http://localhost:3000)

## 📸 Screenshots

![Goals View](screenshots/goals-page.png)

## 📌 Course Info

This project was created for the Web Technologies module (4BUIS011C), as part of a coursework assignment requiring a dynamic CRUD web application.

## 📄 License

MIT License
