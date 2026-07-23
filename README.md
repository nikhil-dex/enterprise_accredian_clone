

### Accredian Enterprise Landing Page Clone

A modern, responsive, and full-stack landing page inspired by Accredian Enterprise, built using Next.js App Router, Tailwind CSS, and MongoDB Atlas.

> Assignment Reference: https://enterprise.accredian.com/

The objective of this project was to recreate the overall experience of the Accredian Enterprise website while maintaining clean code, responsiveness, and reusable component architecture.

---

#### Live Demo

- Live URL: `https://enterprise-accredian-clone-gules.vercel.app/`
- GitHub Repository: `https://github.com/nikhil-dex/enterprise_accredian_clone`


> Note: The application is deployed on Vercel. MongoDB Atlas connectivity may vary depending on environment configuration and network restrictions during local development. Production deployment has been tested successfully.

---

### Features

- Responsive Landing Page
- Sticky Navbar
- Mobile Navigation Menu
- OpenAI-inspired UI Theme
- Hero Section with Video Support
- GSAP Animations
- Statistics Section
- Clients Section
- Accredian Edge Section
- Smooth Section Navigation
- Slide-in Enquiry Drawer
- Form Validation
- Toast Notifications
- MongoDB Atlas Integration
- Next.js API Routes
- Fully Responsive Design

---

## Tech Stack

### Frontend

- Next.js (App Router)
- React
- Tailwind CSS
- GSAP
- React Hot Toast

### Backend

- Next.js API Routes
- MongoDB Atlas
- Mongoose

### Deployment

- Vercel

---

## Folder Structure

```bash
app/
│
├── api/
│   ├── enquiry/
│   │   └── route.js
│   │
│   └── test/
│       └── route.js
│
├── page.tsx
├── layout.tsx
│
components/
│
├── Navbar.jsx
├── Hero.jsx
├── Stats.jsx
├── Clients.jsx
├── Accredian_Edge.jsx
├── EnquiryForm.jsx
└── Footer.jsx
│
lib/
│
└── db.js
│
models/
│
└── Form.js
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/nikhil-dex/enterprise_accredian_clone.git

cd enterprise_accredian_clone
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Visit:

```bash
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
```

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
```

---

## Approach Taken

The goal of this assignment was not to create a pixel-perfect clone, but to build a clean, maintainable, and responsive implementation while following the provided requirements.

I focused on:

- Reusable components.
- Responsive layouts.
- Maintainable code structure.
- API integration.
- Full-stack functionality.
- Smooth user experience.

The application was developed using the Next.js App Router architecture and organized into reusable components to make future enhancements easier.

---

## Design Decisions

Before starting the implementation, I evaluated multiple design directions:

1. Apple
2. Coursera
3. OpenAI

### Final Choice: OpenAI-inspired Theme

- Apple's design language felt too minimal and relied heavily on a single-color palette.
- Coursera's blue-centric design was visually similar to Accredian's branding but lacked distinction.
- OpenAI's design language provided a premium appearance through contrast, spacing, and modern navigation patterns.

For that reason, I adopted an OpenAI-inspired UI while preserving the enterprise feel of Accredian.

---

## AI Usage

This assignment explicitly encouraged the use of AI tools.

### AI Tool Used

- ChatGPT

### Where AI Helped

ChatGPT was primarily used for:

- Exploring theme inspirations.
- GSAP animation ideas.
- Scroll behavior implementation.
- Advanced Tailwind CSS utilities.
- Responsive layout suggestions.
- Error debugging assistance.

Examples include:

- Hero section animation concepts.
- Sticky navigation behavior.
- GSAP ScrollTrigger implementation.
- Tailwind responsive utilities.
- Form drawer transitions.

### What Was Implemented Manually

The following were implemented manually:

- Component architecture.
- Application structure.
- API routes.
- MongoDB integration.
- Mongoose schema.
- Form validation logic.
- Responsive navigation.
- State management.
- Enquiry workflow.
- Git workflow and commits.
- Overall implementation and debugging.

Most of the application's business logic and component implementation were written manually. AI was primarily used as a development assistant for animation ideas, styling suggestions, and resolving implementation issues during development.

---

## Development Timeline

This project was developed iteratively using Git.

### Notable Commits

```bash
feat: added openai website theme style
feat: enquiry form added
feat: db connection made
feat: enquiry post function made
bug: fix2
feat: fix3
```

### Development Flow

```text
OpenAI Theme
        ↓
Responsive Navbar
        ↓
Hero Section
        ↓
Enquiry Drawer
        ↓
MongoDB Integration
        ↓
API Routes
        ↓
Bug Fixes
        ↓
Deployment
```

---

## Enquiry Workflow

```text
User
 ↓
Enquiry Form
 ↓
Next.js API Route
 ↓
MongoDB Atlas
 ↓
Success Toast
```

---

## API Endpoints

### Test MongoDB Connection

```http
GET /api/test
```

Response:

```json
{
    "success": true,
    "message": "MongoDB Connected"
}
```

---

### Submit Enquiry

```http
POST /api/enquiry
```

Example:

```json
{
    "name": "Nikhil",
    "email": "nikhil@gmail.com",
    "phone": "9876543210",
    "companyName": "OpenAI India",
    "domain": "Artificial Intelligence",
    "candidates": 150,
    "mode": "Hybrid",
    "address": "Gurgaon, Delhi, India"
}
```

---

## Improvements With More Time

Given the 48-hour timeline, I prioritized functionality, responsiveness, and maintainability over complete feature parity.

With additional time, I would:

- Complete the remaining landing page sections.
- Improve animation polish.
- Add Nodemailer integration.
- Add an Admin Dashboard.
- Add Analytics.
- Improve accessibility.
- Add loading skeletons.
- Improve cross-browser testing.
- Optimize performance further.

---

## Assignment Notes

The assignment specifically mentioned:

> Focus on clarity and structure over pixel-perfect design.

Accordingly, my primary focus was:

- Clean code.
- Component reusability.
- Responsive design.
- API integration.
- Full-stack functionality.
- Effective use of AI tools.
- Maintainable architecture.

While a few non-critical UI refinements remain, all major functionality requested in the assignment has been implemented.

---

## Deployment

This project is deployed on Vercel.

### Build

```bash
npm run build
```

### Deploy

```bash
vercel
```

---

## Author

### Nikhil

- GitHub: https://github.com/nikhil-dex
- LinkedIn: https://linkedin.com/in/your-linkedin-profile

---

## License

This project is licensed under the MIT License.

---

### Built with Next.js, Tailwind CSS, MongoDB, and a lot of debugging.
