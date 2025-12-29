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
<img width="1911" height="965" alt="Bhagavad Gita Web Project Screenshot" src="PASTE_SCREENSHOT_URL_HERE" />

## 📂 Folder Structure
project-bhagavadgita/  
│── index.html  
│── chapters.html  
│── assets/  
│   ├── css/  
│   │   ├── bootstrap.min.css  
│   │   ├── fonts.css  
│   │   └── main.css  
│   ├── js/  
│   │   ├── bootstrap.min.js  
│   │   └── main.js  
│   └── images/  
│       ├── logo/  
│       └── hero-banner/  
└── README.md  

## 👨‍💻 Developed By
Pruthvi Pardiwala
