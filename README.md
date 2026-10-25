# Hossain Ahmad — Full-Stack Web Developer Portfolio

An elite, modern, and responsive portfolio web application crafted for **Hossain Ahmad**, Full-Stack Web Developer and Assistant Programmer at Gazipur City Corporation.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🌟 Overview & Key Highlights

- **Designation & Hero**: Interactive typewriter role animation, verified identification badge, professional profile photo with ambient glow, and high-impact introductory copy.
- **Resume System**: One-click printable/downloadable Curriculum Vitae modal and dedicated `/resume` route with clean print styling (`window.print()`).
- **Comprehensive About Section**: Detailed programming journey, passion for civic digitization, hobbies (Specialty Coffee ☕, Books 📚, Street Photography 📷, Tech Experimentation 💡), and personnel specification sheet.
- **Graphical Skills Dashboard**: Categorized visual skill matrix with percentage meters, proficiency badges, interactive category filtering, and real-time search.
- **Academic Qualifications**: Detailed education background above HSC (B.Sc. in Computer Science & Engineering, HSC Science Division, core courses, academic highlights).
- **Professional Experience**: Assistant Programmer at Gazipur City Corporation (GCC) serving 2M+ citizens alongside independent full-stack product development.
- **Featured Projects Showcase**:
  1. **BazarDor (বাজার দর)** — Market-Price Tracker with Bengali numeral sorting
  2. **FitLog** — Workout Routine Planner & Metrics Tracker
  3. **DevStack** — Developer Tech Stack Explorer & Curator
  4. **World Explorer** — Geospatial Country Explorer
  5. **Readora** — Distraction-Free Digital Library & Book Reader
- **Dedicated Project Pages & Modals**: Detailed individual pages (`/projects/[slug]`) and instant on-page quick preview modals containing tech stack, problem overview, key features, challenges faced, and future improvement plans.
- **Direct Contact Suite**: Direct Email, Phone, WhatsApp chat, office location, and validated interactive contact form.
- **Responsive & Accessible**: Seamlessly responsive across mobile, tablet, and desktop screens with a dark slate/cyan theme.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Server & Client Components)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: Custom SVG system & [Lucide React](https://lucide.dev/)
- **Deployment Ready**: Vercel, Netlify, or static export

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the displayed port) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
├── public/
│   ├── covers/            # Project preview covers (bazar-dor, devstack, fit-log, world-explorer)
│   ├── images/            # Profile photo & logos
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with SEO metadata & Geist fonts
│   │   ├── page.tsx       # Main portfolio single-page application
│   │   ├── globals.css    # Tailwind styles, glassmorphism, scrollbars
│   │   ├── resume/
│   │   │   └── page.tsx   # Dedicated printable CV page
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx # Dynamic static-rendered project detail pages
│   ├── components/
│   │   ├── Navbar.tsx     # Responsive navbar with drawer & resume trigger
│   │   ├── Hero.tsx       # Hero section with typewriter & photo
│   │   ├── About.tsx      # Journey, work enjoyed, hobbies & specs
│   │   ├── Skills.tsx     # Graphical skills with filter & search
│   │   ├── Education.tsx  # B.Sc. in CSE & HSC details
│   │   ├── Experience.tsx # GCC Assistant Programmer & Independent Dev
│   │   ├── Projects.tsx   # Project cards grid & category filtering
│   │   ├── ProjectCard.tsx# Individual project card
│   │   ├── ProjectModal.tsx # Interactive on-page project preview
│   │   ├── Contact.tsx    # Email, phone, WhatsApp & contact form
│   │   ├── ResumeModal.tsx# Interactive & printable CV modal
│   │   ├── Footer.tsx     # Footer with social links & back to top
│   │   └── Icons.tsx      # Crisp brand SVG icons (GitHub, LinkedIn, Twitter/X, WhatsApp)
│   └── data/
│       └── portfolioData.ts # Typed single-source-of-truth data store
└── package.json
```

---

## 👤 Author

**Hossain Ahmad**  
Assistant Programmer, Gazipur City Corporation  
Full-Stack Web Developer  
- **GitHub**: [github.com/hossainahmad](https://github.com/hossainahmad)  
- **LinkedIn**: [linkedin.com/in/hossainahmad-dev](https://www.linkedin.com/in/hossainahmad-dev/)  
- **Email**: [hossain.ahmad38@gmail.com](mailto:hossain.ahmad38@gmail.com)
