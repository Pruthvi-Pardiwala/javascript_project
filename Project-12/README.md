# 🦠 COVID-19 India Tracker

A responsive **COVID-19 India Tracker Web Application** built using **HTML, CSS, JavaScript, Bootstrap, and Font Awesome**.

The application fetches **live COVID-19 statistics of India** from a public API and displays nationwide as well as **state-wise data** in a clean, dark-themed dashboard.

---

## 🎯 Project Objective

To develop a real-time web application that:

- 📊 Displays latest COVID-19 statistics for India
- 🏥 Shows state-wise confirmed, recovered, and death cases
- 🔝 Highlights Top 5 states by deaths and recovery
- ⚡ Fetches and renders live data dynamically using an external API
- 🎨 Presents data in a modern, responsive UI

---

## ✨ Features

### 🇮🇳 India-Level Statistics

- Total confirmed Indian cases
- Total recovered patients
- Total recorded deaths
- Icon-based visual representation

### 🏙️ State-Wise COVID Data

- Displays all Indian states
- Shows:
  - Confirmed cases
  - Deaths
  - Recovered patients
- Card-based responsive layout

### 🔝 Top 5 Analysis Panels

- Top 5 States by Deaths
- Top 5 States by Recovery
- Ranked lists with badges

### ⚡ Live API Data Fetching

- Uses JavaScript `fetch()` API
- Asynchronous data loading
- No page reload required

### 🎨 Dark-Themed Responsive UI

- Fully responsive using Bootstrap Grid
- Dark color palette for reduced eye strain
- Hover effects for better interaction

---

## 🛠️ Technologies Used

| Technology | Purpose |
|----------|---------|
| HTML5 | Page structure |
| CSS3 | Styling and dark theme |
| Bootstrap 5 | Responsive layout |
| JavaScript (ES6) | Logic, API calls, DOM manipulation |
| Font Awesome | Icons |
| Bootstrap Icons | UI icons |
| Public REST API | COVID-19 data |

---

## 📂 Folder Structure

COVID-19-India-Tracker/
├── assets/
│ ├── css/
│ │ ├── bootstrap.min.css
│ │ └── main.css
│ ├── js/
│ │ ├── bootstrap.min.js
│ │ └── main.js
├── index.html
└── README.md

yaml
Copy code

---

## 🔗 API Used

**COVID-19 India API (Rootnet)**

https://api.rootnet.in/covid19-in/stats/latest

yaml
Copy code

### API Data Includes

- Nationwide summary data
- State-wise COVID-19 statistics
- Confirmed cases
- Death count
- Recovery count

---

## 🧠 JavaScript Logic Highlights

- Fetching data using `fetch()`
- Parsing nested JSON responses
- Dynamic HTML rendering using template literals
- Sorting states for Top 5 analysis
- DOM manipulation for real-time updates

---

## 🎨 Styling Overview

- Dark background theme
- Light text contrast for readability
- Hover effects on cards and list items
- Custom badge colors for deaths and recovery
- Font Awesome icons for visual indicators

---

## 📸 Screenshots

_Add screenshots of the dashboard UI here._

---

## 🚀 Future Enhancements

- 🔍 State search functionality
- 📈 Graphs and charts (Chart.js)
- 🌐 Country-wise COVID data
- 🕒 Last updated timestamp
- 📱 Progressive Web App (PWA) support

---

## 👨‍💻 Developed By

**Pruthvi Pardiwala**

Frontend Web Project – COVID-19 India Tracker 🦠

---

## 📜 Disclaimer

This project is created for **educational and learning purposes only**.  
Data accuracy depends on the public API source.