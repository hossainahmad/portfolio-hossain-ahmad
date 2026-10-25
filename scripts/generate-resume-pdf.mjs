import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function createResumePdf() {
  const pdfDoc = await PDFDocument.create();

  // Standard A4 size: 595.28 x 841.89 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  // Fonts
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette
  const darkNavy = rgb(0.06, 0.09, 0.16); // #0f172a
  const primaryBlue = rgb(0.01, 0.52, 0.78); // #0284c7
  const textDark = rgb(0.12, 0.16, 0.22); // #1f2937
  const textMuted = rgb(0.35, 0.41, 0.5); // #596980
  const lineLight = rgb(0.88, 0.91, 0.94); // #e2e8f0
  const boxBg = rgb(0.96, 0.98, 1.0); // #f8fafc

  let y = height - 40;
  const margin = 42;
  const contentWidth = width - margin * 2;

  // Header Background Accent Bar
  page.drawRectangle({
    x: margin,
    y: y - 56,
    width: contentWidth,
    height: 64,
    color: boxBg,
    borderColor: lineLight,
    borderWidth: 1,
  });

  // Name
  page.drawText("HOSSAIN AHMAD", {
    x: margin + 14,
    y: y - 18,
    size: 20,
    font: fontBold,
    color: darkNavy,
  });

  // Title / Subtitle
  page.drawText("Full-Stack Web Developer | Assistant Programmer, Gazipur City Corporation", {
    x: margin + 14,
    y: y - 34,
    size: 10,
    font: fontBold,
    color: primaryBlue,
  });

  // Contact Info row
  page.drawText(
    "Email: hossain.ahmad38@gmail.com   |   Phone: +880 1700-000000   |   Location: Gazipur, Bangladesh",
    {
      x: margin + 14,
      y: y - 48,
      size: 8.5,
      font: fontRegular,
      color: textMuted,
    }
  );

  y -= 74;

  // Social Links Row
  page.drawText("GitHub: github.com/hossainahmad   |   LinkedIn: linkedin.com/in/hossainahmad-dev", {
    x: margin,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: primaryBlue,
  });

  y -= 18;

  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: y,
      size: 10.5,
      font: fontBold,
      color: primaryBlue,
    });
    page.drawLine({
      start: { x: margin, y: y - 4 },
      end: { x: width - margin, y: y - 4 },
      thickness: 1.2,
      color: primaryBlue,
    });
    y -= 16;
  }

  // 1. Professional Summary
  drawSectionHeader("Professional Summary");
  const summaryText =
    "Results-driven Full-Stack Web Developer and Assistant Programmer at Gazipur City Corporation with a proven track record of architecting resilient web applications for civic operations and production platforms. Proficient in Next.js (App Router), React, TypeScript, Node.js, and MongoDB. Adept at turning complex challenges into type-safe systems and intuitive interfaces.";

  // Wrap text
  function drawWrappedText(text, fontSize = 8.5, font = fontRegular, color = textDark, lineHeight = 12) {
    const words = text.split(" ");
    let line = "";
    for (const w of words) {
      const testLine = line + (line ? " " : "") + w;
      const textWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (textWidth > contentWidth) {
        page.drawText(line, { x: margin, y, size: fontSize, font, color });
        y -= lineHeight;
        line = w;
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, { x: margin, y, size: fontSize, font, color });
      y -= lineHeight;
    }
  }

  drawWrappedText(summaryText, 8.5, fontRegular, textDark, 11.5);
  y -= 6;

  // 2. Technical Skills
  drawSectionHeader("Core Technical Competencies");

  const skills = [
    { cat: "Frontend:", items: "React 19, Next.js 16 (App Router, SSR/SSG), TypeScript, JavaScript (ES6+), Tailwind CSS v4, HTML5, Modern CSS3" },
    { cat: "Backend & DB:", items: "Node.js, Express, MongoDB (Atlas, native driver), RESTful API Design, Better Auth, JWT & Session Management" },
    { cat: "Tools & DevOps:", items: "Git, GitHub, Vercel, Netlify, VS Code, ESLint, npm/pnpm, Postman, Figma UI Wireframing" },
    { cat: "Practices:", items: "Clean Code & Refactoring, Performance Optimization, Mobile-First Design, Unidirectional Data Flow, a11y" },
  ];

  for (const s of skills) {
    page.drawText(s.cat, { x: margin, y, size: 8.5, font: fontBold, color: darkNavy });
    page.drawText(s.items, { x: margin + 82, y, size: 8.5, font: fontRegular, color: textDark });
    y -= 13;
  }
  y -= 6;

  // 3. Professional Experience
  drawSectionHeader("Professional Work Experience");

  // Experience 1
  page.drawText("Assistant Programmer", { x: margin, y, size: 10, font: fontBold, color: darkNavy });
  page.drawText("Gazipur City Corporation (GCC)  |  Gazipur, Bangladesh", {
    x: margin + 125,
    y,
    size: 9,
    font: fontOblique,
    color: primaryBlue,
  });
  page.drawText("2023 — Present", { x: width - margin - 75, y, size: 8.5, font: fontBold, color: textMuted });
  y -= 13;

  const exp1Bullets = [
    "Spearheading digital citizen services and internal administration platforms for a municipality of 2M+ residents.",
    "Engineered robust database routines and API workflows ensuring zero data loss and uninterrupted municipal operations.",
    "Modernized paper-bound municipal procedures into transparent, secure, and user-friendly digital portals.",
  ];

  for (const b of exp1Bullets) {
    page.drawText("•", { x: margin + 6, y, size: 9, font: fontBold, color: primaryBlue });
    page.drawText(b, { x: margin + 16, y, size: 8.5, font: fontRegular, color: textDark });
    y -= 12;
  }
  y -= 4;

  // Experience 2
  page.drawText("Full-Stack Web Developer", { x: margin, y, size: 10, font: fontBold, color: darkNavy });
  page.drawText("Independent Software & Open Source Projects", {
    x: margin + 145,
    y,
    size: 9,
    font: fontOblique,
    color: primaryBlue,
  });
  page.drawText("2024 — Present", { x: width - margin - 75, y, size: 8.5, font: fontBold, color: textMuted });
  y -= 13;

  const exp2Bullets = [
    "Engineered and shipped production web applications (BazarDor, FitLog, DevStack) with clean component architecture.",
    "Implemented custom Bengali numeral price normalizers, SSR-safe hydration gates, and type-safe state pipelines.",
  ];

  for (const b of exp2Bullets) {
    page.drawText("•", { x: margin + 6, y, size: 9, font: fontBold, color: primaryBlue });
    page.drawText(b, { x: margin + 16, y, size: 8.5, font: fontRegular, color: textDark });
    y -= 12;
  }
  y -= 6;

  // 4. Featured Projects
  drawSectionHeader("Featured Production Projects");

  const projects = [
    {
      name: "BazarDor - Market-Price Tracker",
      stack: "Next.js (App Router), React, Better Auth, MongoDB, Tailwind CSS",
      desc: "Market-price tracker providing daily price transparency for grocery commodities with bilingual sorting for Bengali numerals and a market comparison matrix.",
      live: "bazar-dor-zeta-steel.vercel.app",
    },
    {
      name: "FitLog",
      stack: "Next.js, React Context API, Tailwind CSS, Lucide React, localStorage",
      desc: "High-performance workout planning app featuring exercise libraries, routine customization, and real-time synchronized metric counters with two-stage SSR hydration.",
      live: "fit-log-wheat-kappa.vercel.app",
    },
    {
      name: "DevStack",
      stack: "React.js, TypeScript, Tailwind CSS, DaisyUI, React Toastify",
      desc: "Interactive curation dashboard for developers to compare technologies across frontend, backend, and DevOps with sticky tray state and strict unidirectional props.",
      live: "devstacktech.netlify.app",
    },
    {
      name: "World Explorer",
      stack: "React.js, TypeScript, REST API, Tailwind CSS",
      desc: "Geospatial data explorer retrieving country demographics, bordering territories, and economic data with debounced real-time search and error-tolerant interfaces.",
      live: "world-explorer-neon.vercel.app",
    },
  ];

  for (const p of projects) {
    page.drawText(p.name, { x: margin, y, size: 9.5, font: fontBold, color: darkNavy });
    page.drawText(`[${p.stack}]`, { x: margin + fontBold.widthOfTextAtSize(p.name, 9.5) + 8, y, size: 8, font: fontOblique, color: primaryBlue });
    y -= 12;
    page.drawText(p.desc, { x: margin, y, size: 8, font: fontRegular, color: textDark });
    y -= 11;
    page.drawText(`Demo: https://${p.live}`, { x: margin, y, size: 7.5, font: fontRegular, color: textMuted });
    y -= 13;
  }
  y -= 2;

  // 5. Educational Qualification
  drawSectionHeader("Educational Qualification");

  page.drawText("Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: darkNavy,
  });
  page.drawText("Completed", { x: width - margin - 55, y, size: 8.5, font: fontBold, color: textMuted });
  y -= 12;
  page.drawText("Reputed University  |  Dhaka Division, Bangladesh", {
    x: margin,
    y,
    size: 8.5,
    font: fontOblique,
    color: textMuted,
  });
  y -= 11;
  page.drawText("Key Coursework: Data Structures & Algorithms, OOP, Database Management Systems, Software Engineering, Web Technologies", {
    x: margin,
    y,
    size: 7.5,
    font: fontRegular,
    color: textDark,
  });
  y -= 14;

  page.drawText("Higher Secondary Certificate (HSC) — Science Division", {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: darkNavy,
  });
  page.drawText("Completed", { x: width - margin - 55, y, size: 8.5, font: fontBold, color: textMuted });
  y -= 11;
  page.drawText("Prestigious College  |  Gazipur, Bangladesh  |  Focus: Mathematics, Physics, Chemistry, ICT", {
    x: margin,
    y,
    size: 7.5,
    font: fontRegular,
    color: textMuted,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve("public/Hossain-Ahmad-Resume.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Resume PDF successfully created at: ${outputPath} (${pdfBytes.length} bytes)`);
}

createResumePdf().catch((err) => {
  console.error("Error creating PDF:", err);
  process.exit(1);
});
