# Professional Student Management Portal

A comprehensive and modern web-based platform designed to streamline student academic management, providing a centralized hub for profiles, attendance tracking, results, and official announcements.

---

## 1. Project Overview
This is a professional Student Portal application built to provide students with a seamless digital experience for managing their academic life. 

- **Purpose:** To digitize the student-university interaction, making it easier for students to access their records anywhere, anytime.
- **Target Users:** University students who need quick access to their academic data (Attendance, Results, Profiles) and departmental updates.
- **Goal:** To create a responsive, user-friendly, and secure-looking interface that demonstrates modern web development practices.

---

## 2. Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Used for creating the semantic structure and layout of all portal pages. |
| **CSS3** | Used for professional styling, responsive design (mobile-first), and implementing the Dark/Light mode theme system. |
| **JavaScript** | Used for client-side logic, authentication simulation, dynamic GPA calculation, and theme persistence. |
| **Local Storage** | Used to maintain user sessions and save theme preferences across browser refreshes. |

---

## 3. Folder Structure

- `attendance.html` → Visualizes student presence in various subjects using progress bars.
- `dashboard.html` → The central hub for navigation and quick access to all modules.
- `login.html` → Secure entry point for the portal with form validation.
- `notice.html` → A dedicated space for departmental announcements and updates.
- `profile.html` → Displays personal and academic information of the logged-in student.
- `result.html` → Shows detailed grade sheets and automatically calculates CGPA.
- `css/style.css` → The master stylesheet containing variables, layouts, and theme configurations.
- `js/auth.js` → Specialized script for handling login and session initialization.
- `js/app.js` → The core engine handling theme switching, auth checks, and global UI updates.

---

## 4. HTML Explanation (Structure & Layout)

The project utilizes **Semantic HTML5** to ensure accessibility and SEO-friendly code.

- **Layout Structure:** Each page (except login) follows a consistent layout with a `<aside>` for navigation and a `<main>` for content.
- **Navigation Bar:** Located in the sidebar, providing quick links to all portal features.
- **Forms:** Used in `login.html` with appropriate input types (text, password) and required attributes for basic validation.
- **Tables:** Used in `result.html` to present academic data in a clean, organized manner.
- **Semantic Tags:** Used `<header>`, `<footer>`, `<section>`, and `<article>` to define meaningful parts of the document.
- **Input Fields:** Styled for better user experience with placeholders and focus states.

---

## 5. CSS Explanation (Design & Aesthetics)

The styling is designed to be "Clean, Modern, and Professional."

- **Colors:** Utilizes a professional color palette:
    - **Primary:** Dark Blue (`#2c3e50`) for a corporate/academic feel.
    - **Secondary:** Sky Blue (`#3498db`) for interactive elements.
    - **Accent:** Red (`#e74c3c`) for alerts and logout.
- **Layout Techniques:** 
    - **Flexbox:** Used for the main container (Sidebar vs Content) and navigation links.
    - **Grid:** Used in the Dashboard for the card layout and Profile for the info table.
- **Dark Mode:** Implemented using **CSS Variables** (`:root` and `[data-theme="dark"]`). This allows the entire UI to switch colors instantly without reloading.
- **Responsive Design:** Used `@media` queries to ensure the sidebar collapses into a top menu on mobile devices.
- **Hover Effects:** Smooth transitions on cards and buttons enhance the interactive feel of the portal.
- **Typography:** Uses 'Segoe UI' and sans-serif fonts for maximum readability.

---

## 6. JavaScript Explanation (Functionality & Logic)

JavaScript brings the static HTML to life through the following features:

1.  **Authentication Workflow:** 
    - `auth.js` captures form data.
    - It validates inputs and stores a session token in `localStorage`.
    - `app.js` checks this token on every page load; if missing, it redirects the user back to the login page.
2.  **Dynamic Theme Switching:** 
    - A toggle button switches between Light and Dark modes.
    - The preference is saved in `localStorage`, so the portal "remembers" your choice.
3.  **DOM Manipulation:** 
    - The "Welcome" message on the dashboard updates dynamically based on the Student ID entered.
    - Active navigation links are highlighted automatically based on the current URL.
4.  **Calculations:** 
    - In `result.html`, a script iterates through the table marks, calculates the average, and displays the CGPA dynamically.

---

## 7. Features of the Project

- ✅ **Secure Login Simulation:** Prevents unauthorized access to dashboard pages.
- ✅ **Interactive Dashboard:** Quick-access cards with hover animations.
- ✅ **Live Theme Toggle:** Seamlessly switch between Dark and Light modes.
- ✅ **Dynamic GPA Calculator:** Automatically computes academic performance.
- ✅ **Responsive Progress Bars:** Visualizes attendance percentages clearly.
- ✅ **Fully Responsive:** Works perfectly on Desktops, Tablets, and Smartphones.
- ✅ **Session Persistence:** Remembers user login and theme preferences.

---

## 8. User Workflow

1.  **Entry:** User arrives at `login.html`.
2.  **Authentication:** User enters Student ID and Password. The system stores the ID and redirects.
3.  **Navigation:** User arrives at the Dashboard and can see a personalized welcome message.
4.  **Information Access:** User clicks on "Result" to see marks or "Attendance" to check presence.
5.  **Customization:** User toggles Dark Mode for comfortable viewing at night.
6.  **Exit:** User clicks "Logout," which clears the session and returns them to the login screen.

---

## 9. Challenges & Solutions

| Challenge | Solution |
| :--- | :--- |
| **Maintaining Theme across pages** | Used `localStorage` to save the theme state and applied it globally via a shared `app.js`. |
| **Responsive Sidebar** | Used Flex-direction change in Media Queries to stack the sidebar on top for smaller screens. |
| **Authentication Security** | Implemented a global check in `app.js` that redirects to login if the `isLoggedIn` flag is missing. |
| **GPA Logic** | Used `querySelectorAll` to grab marks from the table and applied basic math logic within a `DOMContentLoaded` event. |

---

## 10. Learning Outcomes

- Mastery of **CSS Variables** for complex theming.
- Understanding **Local Storage** for state management in pure JS.
- Implementing **Responsive Web Design (RWD)** without external frameworks like Bootstrap.
- Practical experience with **DOM Manipulation** and Event Listeners.
- Creating a **multi-page application** structure with shared logic.

---

## 11. Code Explanation (Surgical Breakdown)

### A. The Theme Toggle Logic (`app.js`)
```javascript
themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Saves choice!
});
```
*Simple Explanation:* This code listens for a click. It checks the current "data-theme" attribute. If it's light, it changes to dark (and vice versa), then saves that choice in the browser's memory.

### B. Result Calculation (`result.html`)
```javascript
const marks = document.querySelectorAll('.mark');
let totalMarks = 0;
marks.forEach(m => {
    totalMarks += parseInt(m.textContent);
});
const average = totalMarks / marks.length;
const gpa = (average / 25).toFixed(2); // Simple conversion
```
*Simple Explanation:* It finds all HTML elements with the class "mark", adds their numbers together, finds the average, and converts it into a 4.0 GPA scale.

### C. Sidebar Layout (`style.css`)
```css
.container {
    display: flex;
    min-height: 100vh;
}
.sidebar {
    width: 250px;
    background-color: var(--sidebar-bg);
}
```
*Simple Explanation:* Flexbox is used to put the Sidebar and Main Content side-by-side. `min-height: 100vh` ensures the sidebar always stretches to the bottom of the screen.

---


## 12. Conclusion
This Project demonstrates the power of core web technologies in building complex, professional-grade applications. It provides a solid foundation for a full-scale Student Information System and showcases clean coding practices, modern design, and interactive user experiences.

---
**Developed by:** 
- Muhammad Saad (CSC-23F-096) 
- Muhammad Noman Siddiqui (CSC-23F-091) 
- Muhammad Ahmed Athar (CSC-23F-072) 
- Syed Shaerjeel Hussain (CSC-23F-238) 
**Course:** Web Engineering  
**Project Date:** May 2026
