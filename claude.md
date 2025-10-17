
## 1. Project Overview
An interactive resume app built using **Vite**, **Vuetify**, **Pinia**, and the **Composition API**.
The app presents Neill Holloman's professional resume as a single-page, static site deployed on **GitHub Pages**.

---

## 2. UI Layout & Design

The app follows a **hero-style, card-based layout** with the following structure:

### Hero Section
- **Full-width background image** (mountains/landscape) that spans the viewport
- **Top navigation bar** overlaying the hero:
  - Hamburger menu icon (left)
  - Site title/logo: "Benjamin" (replace with "Neill Holloman" or preferred branding)
  - Horizontal navigation links: About, Skills, Portfolio, Experience, Education, Blog, References, Contact
  - More options menu icon (right)

### Profile Card (Centered)
A **white card with rounded corners** positioned center-screen, overlaying the hero image:

**Left Side:**
- **Circular profile photo** (avatar)
- **Social media icons** below avatar (Facebook, Twitter, LinkedIn, Dribbble, Instagram)

**Right Side:**
- **Name**: "Neill Holloman" (large, bold)
- **Title/Role**: "Coder & Entrepreneur at Amazon" (subtitle text)
- **Action Buttons**:
  - "DOWNLOAD CV" (green button)
  - "CONTACT" (blue button)
- **Personal Info List**:
  - Age
  - Address
  - Email
  - Phone
  - Freelance status (with availability indicator)

### Skills Section
Below the profile card, displayed in a **two-column grid layout**:

**Left Column: Technical Skills**
- Section header: "Technical Skills"
- Skill items with **horizontal progress bars/sliders**:
  - Each skill shows name on left
  - Visual slider indicating proficiency level
  - Different colors per skill (blue, green, yellow, etc.)

**Right Column: Soft Skills**
- Section header: "Soft Skills"
- Skill items with **horizontal progress bars/sliders**:
  - Same visual style as technical skills
  - Different skill set (Communication, Language, General Knowledge, etc.)

### Design Characteristics
- **Clean, modern aesthetic**
- **Card-based components** with subtle shadows
- **Transparent overlay** effect (white card over hero image)
- **Visual skill indicators** (no plain text lists)
- **Responsive layout** that adapts to screen size
- **Professional color palette**: greens, blues, neutrals

### Color Palette

**Primary Colors:**
- **Primary Green**: `#66BB6A` (Download CV button, primary accents)
- **Primary Blue**: `#42A5F5` (Contact button, links)
- **Dark Text**: `#212121` (headings, primary text)
- **Medium Gray**: `#757575` (subtext, labels)
- **Light Gray**: `#BDBDBD` (borders, dividers)

**Background Colors:**
- **Card Background**: `#FFFFFF` (white cards)
- **Card Shadow**: `rgba(0, 0, 0, 0.1)` (subtle elevation)
- **Hero Overlay**: `rgba(0, 0, 0, 0.3)` (optional dark overlay on hero image for text contrast)

**Skill Progress Bar Colors:**
Use a variety of colors to differentiate skills visually:
- **Blue**: `#42A5F5` (e.g., Photoshop CS, Communication)
- **Green**: `#66BB6A` (e.g., Illustrator CS, Language)
- **Yellow/Amber**: `#FFA726` (e.g., Sketch, General Knowledge)
- **Purple**: `#AB47BC` (optional for additional skills)
- **Teal**: `#26A69A` (optional for additional skills)

**Navigation & Interactive Elements:**
- **Nav Link Hover**: `#42A5F5` (blue on hover)
- **Nav Link Default**: `#FFFFFF` (white text on hero)
- **Icon Color**: `#757575` (social media icons, non-active state)
- **Icon Hover**: `#42A5F5` (icons on hover)

**Status Indicators:**
- **Available/Active**: `#66BB6A` (green with checkmark icon)
- **Unavailable**: `#EF5350` (red, if needed)

**Vuetify Theme Configuration:**
These colors should be configured in Vuetify's theme settings:
```javascript
{
  colors: {
    primary: '#42A5F5',      // Blue
    secondary: '#66BB6A',    // Green
    accent: '#FFA726',       // Amber
    error: '#EF5350',        // Red
    info: '#29B6F6',         // Light Blue
    success: '#66BB6A',      // Green
    warning: '#FFA726',      // Amber
    background: '#FAFAFA',   // Off-white
    surface: '#FFFFFF',      // White
  }
}
```

---

## 3. Core Features
- **Hero background image** with navigation overlay
- **Centered profile card** with photo, name, title, and contact info
- **Action buttons** for downloading CV and contacting
- **Visual skill display** with progress bars/sliders
- **Navigation menu** for jumping to sections (About, Skills, Experience, etc.)
- **Social media links** for external profiles
- **Static JSON** data powering all resume content (no database or backend)
- **Light/Dark mode toggle** (optional, location TBD)
- 100% client-side interactivity with **Pinia** handling UI state

---

## 4. Behavior Flow
1. Page loads with **hero image and profile card** immediately visible
2. Navigation menu allows jumping to different sections (smooth scroll)
3. Skills display with **visual progress indicators**
4. Download CV button triggers PDF/document download
5. Contact button opens email client or contact form
6. Social media icons link to external profiles
7. All logic and interactions run entirely within the browser — no backend required

---

## 5. State Management (Unified Store)
This app uses a **single Pinia store** to manage lightweight, UI-related state only.

**Unified Store Structure**
- `theme`: `"light"` or `"dark"` (optional feature)
  - Controls Vuetify's theme appearance
  - Persists via `localStorage` for consistent user preference

**Design Principle**
- The store handles only UI state, not resume content
- All resume data remains in a **static JSON file**, fetched once at runtime
- Keeps performance fast, code organized, and the app 100% static-build compatible

---

## 6. Resume Data (JSON-Driven)
All professional information lives in `public/resume.json`.
This includes personal info, experience, skills, projects, and education data.

**Current structure:**
```json
{
  "base": {
    "name": "Neill Holloman",
    "title": "Coder & Entrepreneur at Amazon",
    "summary": "Disciplined and analytical professional with experience in customer service, safety, and technology."
  },
  "resumes": {
    "customerService": {
      "experience": [ ... ]
    }
  },
  "skills": [ ... ],
  "projects": [ ... ],
  "education": [ ... ]
}
```

**Note**: The `resumes` object wrapper is being removed in favor of a flat structure with single resume data.

---

## 7. Component Architecture

### Planned Components
- `App.vue` - Main app shell with hero background
- `NavigationBar.vue` - Top nav with menu links
- `ProfileCard.vue` - Centered card with photo, info, and action buttons
- `SkillsSection.vue` - Two-column skills display with progress bars
- `ExperienceSection.vue` - Work history (expandable or full display)
- `EducationSection.vue` - Educational background
- `ProjectsSection.vue` - Portfolio items
- `AppFooter.vue` - Footer with copyright/links

### Layout Strategy
- Use Vuetify's grid system (`v-container`, `v-row`, `v-col`)
- Hero image as background with `position: relative`
- Profile card as `position: absolute` or centered within container
- Sections stack vertically below the hero

---

## 8. Technical Notes
- Built with **Vite** for fast dev server and optimized builds
- **Vuetify 3** for Material Design components
- **Composition API** for all component logic
- **Pinia** for state management
- Deploys as fully static site to **GitHub Pages**
- No server-side rendering or backend API required
- Resume data loaded from static JSON file at build/runtime
