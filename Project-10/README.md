# 📖 Bhagavad Gita Web Project
A responsive web application to read the Bhagavad Gita chapters with English & Hindi summaries, built using HTML, CSS, JavaScript, and Bootstrap.<br>
The project dynamically fetches chapter data from a public API and renders it on the website

## 📌 Project Objective
A responsive web application that:
- Displays all Bhagavad Gita chapters  
- Shows English & Hindi chapter summaries  
- Fetches chapter data dynamically from a public API  
- Enables smooth navigation between chapters  

## 🧩 Features
### 📚 Chapter Listing
- Lists all Bhagavad Gita chapters  
- Displays chapter number and transliteration  
- Shows short English summary (30 words)  

### 🔗 Dynamic Chapter Navigation
- Uses URL parameters for chapter navigation  
- “Read More” button opens detailed chapter view  
- Implements `URLSearchParams`  

### 🌐 Multilingual Summaries
- Displays English chapter meaning and summary  
- Displays Hindi chapter summary  
- Full summaries shown on chapter page  

### 🎨 Responsive UI
- Built using Bootstrap 5  
- Fully responsive on all devices  
- Clean and modern interface

### ⚡ API-based data fetching using fetch()
- Fetches Bhagavad Gita chapter data dynamically using the fetch() API
- Loads real-time data from a public REST API without page reloads  
- Ensures asynchronous, fast, and efficient content rendering on the UI

### ✂️ Automatic summary truncation (30 words)
- Automatically limits chapter summaries to 30 words
- Improves readability and maintains a clean layout
- Ensures consistent content length across all chapters

### 🧩 Clean separation of HTML, CSS, and JavaScript
- HTML handles structure and content layout
- CSS manages styling, responsiveness, and visual design
- <b>JavaScript</b> controls logic, API calls, and dynamic interactions

## 🛠 Technologies Used
 <table>
        <thead>
            <tr>
                <th>Technology</th>
                <th>Purpose</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>HTML5</td>
                <td>Page structure</td>
            </tr>
            <tr>
                <td>CSS3</td>
                <td>Custom styling</td>
            </tr>
            <tr>
                <td>Bootstrap 5</td>
                <td>Responsive layout & components</td>
            </tr>
            <tr>
                <td>JavaScript (ES6)</td>
                <td>Logic, API calls, DOM manipulation</td>
            </tr>
            <tr>
                <td>Public API</td>
                <td>Bhagavad Gita chapter data</td>
            </tr>
        </tbody>
    </table>

## 📸 Screenshots
<img width="1179" height="901" alt="Screenshot 2025-12-29 105045" src="https://github.com/user-attachments/assets/58509621-c77c-4af1-84bb-4bf8a6a761fe" />

## 📂 Folder Structure
project-10/<br>
│── project-10/<br>
│   ├── assets/<br>
│   │   ├── css/<br>
│   │   │   ├── bootstrap.min.css  <br>
│   │   │   ├── fonts.css  <br> 
│   │   │   └── main.css <br>
│   │   ├── js/<br>
│   │   │   ├── bootstrap.min.js<br>
│   │   │   └── main.js<br>
│   │   └── images/<br>
│   │   │    ├── logo/<br>
│   │   │    └── hero-banner/<br>
│   ├── index.html<br>
│   └── chapters.html<br>
└── README.md<br>

## 🔗 API Used
Bhagavad Gita Chapters API<br>
https://vedicscriptures.github.io/chapters<br>
<br>
API Data Includes:
- Chapter number
- Transliteration
- Meaning
- English summary
- Hindi summary

## 🧠 JavaScript Logic Highlights (main.js)
- Conditional DOM loading (if (element))
- API data fetching with fetch()
- Dynamic HTML rendering using template literals
- URL parameter handling using URLSearchParams
- Summary word-limit logic (30 words)

## 🎨 Styling Overview (main.css)
- CSS variables for theme colors
- Custom primary & secondary button colors
- Hero banner with gradient overlay
- Font pairing :<br>
-- Inter (titles)<br>
-- Crimson Pro (body text)

## 👨‍💻 Developed By
Pruthvi Pardiwala
