# 🌦️ Local Weather Web Project

A responsive web application to check **real-time weather information** for any city, built using **HTML, CSS, JavaScript, and Bootstrap**.

The project dynamically fetches live weather data from the **OpenWeatherMap API** and displays it instantly on the website.

---

## 🎯 Project Objective

A responsive web application that:

- 🌍 Allows users to search weather by city name  
- 🌡️ Displays real-time temperature, humidity, and wind speed  
- 🕒 Shows local date and time based on city timezone  
- ⚡ Fetches live data dynamically using an external API  

---

## 🧩 Features

### 🌍 City-Based Weather Search
- Search weather using city name  
- Supports global city lookup  
- Instant results without page reload  

### 🌡️ Real-Time Weather Data
- Displays current temperature (°C)  
- Shows humidity percentage  
- Displays wind speed  

### 🕒 Local Time and Date
- Converts UNIX timestamp from API  
- Displays city-specific local time  
- Displays formatted current date  

### 🎨 Responsive UI
- Built using Bootstrap 5  
- Fully responsive on all devices  
- Clean and modern gradient-based design  

### ⚡ API-Based Data Fetching
- Fetches live weather data using the `fetch()` API  
- Uses asynchronous JavaScript (Promises)  
- Updates UI dynamically without page reload  

### 🧱 Clean Separation of Concerns
- HTML handles structure and layout  
- CSS manages styling, gradients, and responsiveness  
- JavaScript handles logic, API calls, and DOM updates  

---

## 🛠️ Technologies Used

| Technology | Purpose |
|----------|---------|
| HTML5 | Page structure |
| CSS3 | Custom styling and gradients |
| Bootstrap 5 | Responsive layout and UI components |
| JavaScript (ES6) | Logic, API calls, DOM manipulation |
| OpenWeatherMap API | Live weather data |

---

## 📸 Screenshots

<img width="1191" height="952" alt="Screenshot 2026-01-06 094008" src="https://github.com/user-attachments/assets/b1decaee-074b-4c5c-b5d9-4e6d9bd756d4" />


---

## 📂 Folder Structure

Weather-API/<br>
├── assets/<br>
│ ├── css/<br>
│ │ ├── bootstrap.min.css<br>
│ │ └── main.css<br>
│ ├── js/<br>
│ │ ├── bootstrap.min.js<br>
│ │ └── main.js<br>
├── index.html<br>
└── README.md<br>

---

## 🔗 API Used

**OpenWeatherMap – Current Weather API**

API Data Includes:

- 🌡️ Temperature  
- 💧 Humidity  
- 🌬️ Wind speed  
- 📅 Date and time  
- 🌐 Timezone offset  

---

## 🧠 JavaScript Logic Highlights

- Form submission handling using `event.preventDefault()`  
- API data fetching using `fetch()`  
- UNIX timestamp to local time conversion  
- Dynamic HTML rendering using template literals  
- DOM manipulation and class handling  

---

## 🎨 Styling Overview

- Gradient background layout  
- Transparent weather information card  
- Responsive spacing and typography  
- Bootstrap utility classes  

---

## 🚀 Future Improvements

- 🔍 City auto-suggestions  
- 🌙 Dark mode toggle  
- 📍 Location-based weather using GPS  
- 📊 Extended weather forecast  
- ❌ Error handling for invalid city names  

---

## 👨‍💻 Developed By

**Pruthvi Pardiwala**  

Frontend Web Project – Weather API 🌦️
