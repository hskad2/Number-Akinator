# Number-Akinator

A fun Akinator-inspired web app that guesses the number you're thinking of between 1 and 10 using smart binary search logic.

Instead of randomly guessing, the app asks a few questions and narrows down the possibilities until it finds your number.

---

## ✨ Features

- 🧠 Smart binary search algorithm
- 🔮 Akinator-style number guessing
- 📊 Progress bar
- 🔢 Question counter
- 💭 Thinking animation
- 🌙 Dark / Light mode
- 📱 Responsive design
- ⚡ Fast and lightweight
- 🎉 Guaranteed correct guess

---
## 🛠️ Built With

- HTML5
- CSS3
- JavaScript 
---
## 📂 Project Structure

```
number-akinator/
│
├── index.html
├── style.css
└── script.js
```

---

## 🧮 How It Works

The project uses a Binary Search algorithm.

Instead of checking every number one by one:

```
1 2 3 4 5 6 7 8 9 10
```

It continuously divides the possible range in half:

```text
1-10
 ↓
1-5 or 6-10
 ↓
Smaller range
 ↓
Correct number
```

This allows the app to find the correct answer in only a few questions.

---

## 📸 Screenshots

<img width="937" height="869" alt="image" src="https://github.com/user-attachments/assets/975227db-a743-43fc-9198-cca907c13a2e" />

<img width="946" height="877" alt="image" src="https://github.com/user-attachments/assets/27c03800-5c07-4072-bd33-83186b07d589" />

<img width="934" height="879" alt="image" src="https://github.com/user-attachments/assets/3ad346cb-2b5e-46ff-98b1-9cebbb02810b" />


---
