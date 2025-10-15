
## 1. Project Overview
An interactive resume app built using **Vite**, **Vuetify**, **Pinia**, and the **Composition API**.  
The app presents a dynamic, adaptive resume that highlights different professional focuses — **Customer Service**, **IT Support**, and **Web Development** — while deploying as a fully static site on **GitHub Pages**.

---

## 2. Core Features
- **App Bar** with Avatar, name, contact icons, and Light/Dark mode toggle.  
- **Navigation Drawer** to select a resume focus (career path or hiring manager preference).  
- **Expandable Cards** for Experience, Skills, and Projects.  
- **AI Instruction Modal** introducing first-time visitors to the app.  
- **Static JSON** data powering all resume content (no database or backend).  
- 100% client-side interactivity with **Pinia** handling UI state.

---

## 3. Behavior Flow
1. On first load, the **AI Instruction Modal** appears, introducing the app and its features.  
2. The user selects a **career focus** from the navigation drawer.  
3. The app filters and displays the appropriate resume data from the static JSON file.  
4. The **App Bar** provides a theme toggle and contact shortcuts.  
5. **Experience**, **Skills**, and **Projects** remain summarized until expanded.  
6. The modal only reappears if `localStorage` is cleared.  
7. All logic and interactions run entirely within the browser — no backend required.

---

## 4. State Management (Unified Store)
This app uses a **single Pinia store** to manage lightweight, UI-related state only.  
It handles **theme mode** and the **currently selected resume focus**, keeping logic centralized and simple.

**Unified Store Structure**
- `theme`: `"light"` or `"dark"`.  
  - Controls Vuetify’s theme appearance.  
  - Persists via `localStorage` for consistent user preference.  
- `selectedResume`: `"customerService"`, `"itSupport"`, or `"frontendDeveloper"`.  
  - Defines which section of the resume data to display.  
  - Updates dynamically when the user changes focus in the drawer.

**Design Principle**
- The store handles only UI state, not resume content.  
- All resume data remains in a **static JSON file**, fetched once at runtime.  
- Keeps performance fast, code organized, and the app 100% static-build compatible.

---

## 5. Resume Data (JSON-Driven)
All professional information lives in `resume.json`.  
This includes summary, experience, skills, projects, and education data, which are filtered based on the selected resume focus.

**Example structure:**
```json
{
  "base": {
    "name": "Neill Holloman",
    "title": "Coder & Entrepreneur at Amazon",
    "summary": "Disciplined and analytical professional with experience in customer service, safety, and technology."
  },
  "resumes": {
    "customerService": {
        "experience": [ ... ],
    }, 
       "itSupport": {
        "experience": [ ... ],
    },
        "frontendDeveloper": {
        "experience": [ ... ],
   }
  },
  "skills": [ ... ],
  "projects": [ ... ],
  "education": [ ... ]
}
