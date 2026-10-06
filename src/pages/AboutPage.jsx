import { jsx, jsxs } from "react/jsx-runtime";
import {
  Building2,
  Target,
  Award,
  CheckCircle2,
  Code2,
  CalendarCheck,
  UserCheck,
  Users,
  Briefcase,
  Laptop,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  GraduationCap
} from "lucide-react";
import aboutHeroImg from "../assets/about-hero.webp";
import aboutImg from "../assets/aboutimg.jpg";
import placementCellImg from "../assets/placement-cell.webp";
import offlineTrainingImg from "../assets/offline-training.webp";

const AboutPage = ({
  onNavigate,
  onOpenCounseling,
  onOpenBookDemo
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
    
    /* ── 1. HERO SECTION ── */
    /* @__PURE__ */ jsx("section", { className: "pt-10 pb-16 bg-gradient-to-b from-[#2c9320]/5 via-white to-white border-b border-stone-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center", children: [
      /* Left Content */
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-normal border border-[#2c9320]/20", children: [
          /* @__PURE__ */ jsx(Building2, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { children: "About VedhaAI IT Academy" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal tracking-tight leading-tight", children: ["Empowering Engineers with ", /* @__PURE__ */ jsx("span", { className: "text-[#2c9320]", children: "Commercial Tech Mastery" })] }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl", children: "Founded by enterprise software architects to bridge the gap between academic theory and real-world engineering roles at product companies and MNCs." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 pt-2", children: [
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => onOpenBookDemo(), className: "px-6 py-3 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-normal transition-colors flex items-center gap-2 cursor-pointer shadow-xs", children: [
            /* @__PURE__ */ jsx(CalendarCheck, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Book Free Demo Class" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => onOpenCounseling(), className: "px-6 py-3 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-normal transition-colors flex items-center gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 text-[#2c9320]" }),
            /* @__PURE__ */ jsx("span", { children: "Talk to Senior Advisor" })
          ] })
        ] })
      ] }),
      /* Right Image */
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden border border-stone-200/80 shadow-md group", children: [
        /* @__PURE__ */ jsx("img", { src: aboutHeroImg, alt: "VedhaAI Software Engineering Academy", className: "w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4 text-white space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] px-2.5 py-0.5 rounded-full bg-[#2c9320] text-white font-normal shadow-xs", children: "Pune Hybrid Campus" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-stone-200 font-normal", children: "Enterprise-Grade Development Workstations & Virtual Labs" })
        ] })
      ] }) })
    ] }) }) }),

    /* ── 3. SENIOR ARCHITECT MENTORS (Dark Emerald Card Layout) ── */
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-stone-900 text-stone-100 border-b border-stone-800", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center", children: [
      /* Left 7 Cols: Image */
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl border border-stone-800 group", children: /* @__PURE__ */ jsx("img", { src: aboutImg, alt: "Senior Enterprise Architect Mentors", className: "w-full h-80 sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" }) }),
      /* Right 5 Cols: Content */
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
        /* Header */
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/20 text-[#2c9320] text-xs font-medium border border-[#2c9320]/30", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsx("span", { children: "Veteran Mentor Division" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-white font-normal leading-tight", children: "Learn Directly from Active Enterprise Architects" }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-sm leading-relaxed font-normal", children: "Our mentors aren't academic trainers with textbook slides. They are active senior software engineering architects with 10+ years of enterprise experience across Fortune 500 tech teams." })
        ] }),
        /* Feature List */
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-1", children: [
          /* Feature 1 */
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-stone-800/60 border border-stone-700/60 flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xs font-medium text-stone-200", children: "1-on-1 Pull Request Code Reviews" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-400 font-normal mt-0.5", children: "Line-by-line feedback on formatting, performance & security." })
            ] })
          ] }),
          /* Feature 2 */
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-stone-800/60 border border-stone-700/60 flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xs font-medium text-stone-200", children: "System Design & Whiteboarding" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-400 font-normal mt-0.5", children: "Learn microservices, caching, load balancing & database schemas." })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),

    /* ── 4. 4-STEP PLACEMENT & INTERNSHIP TIMELINE ── */
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white border-b border-stone-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12", children: [
      /* Header */
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-[#2c9320] font-medium", children: "Guaranteed Trajectory" }),
        /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal", children: "Our 4-Step Internship & Corporate Placement Roadmap" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-xs sm:text-sm font-normal", children: "Every enrolled student follows a structured pathway from classroom labs to commercial software deployment." })
      ] }),

      /* 4 Horizontal Step Cards */
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* Step 1 */
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-stone-50/80 border border-stone-200 relative space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[#2c9320] text-white flex items-center justify-center text-xs font-bold", children: "1" }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "Interactive Coding Labs" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: "Daily hands-on coding in Java, Python, SQL, or AI with real-time instructor doubt clearance." })
        ] }),
        /* Step 2 */
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-stone-50/80 border border-stone-200 relative space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[#2c9320] text-white flex items-center justify-center text-xs font-bold", children: "2" }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "Commercial Capstone Build" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: "Build enterprise software applications using GitHub PRs, Docker containers, and CI/CD pipelines." })
        ] }),
        /* Step 3 */
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-stone-50/80 border border-stone-200 relative space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[#2c9320] text-white flex items-center justify-center text-xs font-bold", children: "3" }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "Mock Interview Prep" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: "Whiteboard coding practice, system design mock rounds, and recruiter-optimized resume profiling." })
        ] }),
        /* Step 4 */
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-stone-50/80 border border-stone-200 relative space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[#2c9320] text-white flex items-center justify-center text-xs font-bold", children: "4" }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "Direct Corporate Placement" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: "100% matched with our network of 450+ partner companies with commercial experience certificates." })
        ] })
      ] }),

      /* Placement Image Banner Block */
      /* @__PURE__ */ jsxs("div", { className: "p-8 sm:p-10 rounded-3xl bg-stone-50 border border-stone-200 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center", children: [
        /* Content Left */
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-medium border border-[#2c9320]/20", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsx("span", { children: "Active Hiring Cell" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-xl sm:text-2xl text-stone-900 font-normal", children: "450+ Hiring Partners & Corporate Placement Network" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-stone-600 leading-relaxed font-normal", children: "Our dedicated placement division works with leading IT services MNCs, product engineering firms, and high-growth AI startups to schedule direct interviews for VedhaAI graduates." }),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs("a", { href: "/internships", title: "internships", onClick: (e) => { e.preventDefault(); onNavigate("internships"); }, className: "px-5 py-2.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-medium transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs", children: [
            /* @__PURE__ */ jsx("span", { children: "Explore Internship Policy & Partners" }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) })
        ] }),
        /* Image Right */
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-stone-200 shadow-md group", children: /* @__PURE__ */ jsx("img", { src: placementCellImg, alt: "VedhaAI Corporate Hiring Network", className: "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" }) })
      ] })
    ] }) }),

    /* ── 5. HYBRID CAMPUS & ONLINE LAB INFRASTRUCTURE (Split Visual Layout) ── */
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-stone-50/50 border-b border-stone-100 bg-pattern-dots", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* Left: Image */
      /* @__PURE__ */ jsx("div", { className: "rounded-3xl overflow-hidden border border-stone-200 shadow-xl group", children: /* @__PURE__ */ jsx("img", { src: offlineTrainingImg, alt: "VedhaAI Campus Coding Lab Infrastructure", className: "w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500" }) }),
      /* Right: Content */
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* Header */
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-medium border border-[#2c9320]/20", children: [
            /* @__PURE__ */ jsx(Laptop, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsx("span", { children: "Training Infrastructure" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal leading-tight", children: "State-of-the-Art Hybrid Campus & Virtual Labs" }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed font-normal", children: "Learn in whichever format fits your schedule. Whether attending our campus coding lab in Pune or joining live virtual classrooms from home, you get access to identical commercial tools." })
        ] }),
        /* Feature list */
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 pt-1 text-xs sm:text-sm text-stone-700 font-normal", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "In-Person Campus Lab — High-spec developer workstations pre-loaded with IntelliJ, VS Code & Docker." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "24/7 Virtual Cloud IDE — Access lab environments and session recordings anytime for revision." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Flexible Batch Schedules — Morning, afternoon, evening & weekend options for working professionals." })
          ] })
        ] })
      ] })
    ] }) }) }),

    /* ── 6. COMPARISON MATRIX (TABLE LAYOUT) ── */
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white border-b border-stone-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-xl mx-auto mb-10 space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-[#2c9320] font-medium", children: "The Comparison" }),
        /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal", children: "Why VedhaAI Outperforms Traditional Coaching" })
      ] }),
      /* Table Card */
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs", children: [
        /* Table Header */
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 border-b border-stone-200 bg-stone-50/80 p-4 text-xs font-medium text-stone-600", children: [
          /* @__PURE__ */ jsx("div", { children: "Feature Comparison" }),
          /* @__PURE__ */ jsx("div", { className: "text-[#2c9320]", children: "VedhaAI IT Academy" }),
          /* @__PURE__ */ jsx("div", { className: "text-stone-400", children: "Typical Coaching Classes" })
        ] }),
        /* Rows */
        /* @__PURE__ */ jsxs("div", { className: "divide-y divide-stone-100 text-xs sm:text-sm font-normal", children: [
          /* Row 1 */
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 p-4 gap-2 items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-stone-800 font-medium", children: "Internship Assurance" }),
            /* @__PURE__ */ jsxs("div", { className: "text-[#2c9320] flex items-center gap-1.5 font-medium", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320]" }),
              /* @__PURE__ */ jsx("span", { children: "100% Guaranteed & Verifiable" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-stone-400", children: "Mock certificates or optional calls" })
          ] }),
          /* Row 2 */
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 p-4 gap-2 items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-stone-800 font-medium", children: "AI & Next-Gen Tech" }),
            /* @__PURE__ */ jsxs("div", { className: "text-[#2c9320] flex items-center gap-1.5 font-medium", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320]" }),
              /* @__PURE__ */ jsx("span", { children: "Spring AI, LangChain, RAG integrated" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-stone-400", children: "Legacy syntax and outdated libraries" })
          ] }),
          /* Row 3 */
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 p-4 gap-2 items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-stone-800 font-medium", children: "Code Reviews" }),
            /* @__PURE__ */ jsxs("div", { className: "text-[#2c9320] flex items-center gap-1.5 font-medium", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320]" }),
              /* @__PURE__ */ jsx("span", { children: "1-on-1 GitHub Pull Request feedback" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-stone-400", children: "Only generic bulk assignments" })
          ] }),
          /* Row 4 */
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 p-4 gap-2 items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-stone-800 font-medium", children: "Instructors" }),
            /* @__PURE__ */ jsxs("div", { className: "text-[#2c9320] flex items-center gap-1.5 font-medium", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320]" }),
              /* @__PURE__ */ jsx("span", { children: "Active Senior Enterprise Architects" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-stone-400", children: "Academic trainers with no industry code" })
          ] }),
          /* Row 5 */
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 p-4 gap-2 items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-stone-800 font-medium", children: "Class Modes" }),
            /* @__PURE__ */ jsxs("div", { className: "text-[#2c9320] flex items-center gap-1.5 font-medium", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320]" }),
              /* @__PURE__ */ jsx("span", { children: "Live Interactive + Hybrid Campus Labs" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-stone-400", children: "Pre-recorded videos without support" })
          ] })
        ] })
      ] })
    ] }) }),

    /* ── 7. BOTTOM INTERACTIVE CTA BANNER ── */
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-[#2c9320]/5 border-t border-stone-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal", children: "Ready to Experience the VedhaAI Pedagogy?" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-xs sm:text-sm max-w-lg mx-auto font-normal", children: "Join our upcoming free live demo session or speak with an academic advisor to discuss career goals." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-2", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              if (onOpenBookDemo) onOpenBookDemo();
              else onNavigate("book-demo");
            },
            className: "w-full sm:w-auto px-6 py-3 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs",
            children: [
              /* @__PURE__ */ jsx(CalendarCheck, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: "Book Free Demo Class" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              if (onOpenCounseling) onOpenCounseling();
              else onNavigate("counseling");
            },
            className: "w-full sm:w-auto px-6 py-3 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs",
            children: [
              /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 text-[#2c9320]" }),
              /* @__PURE__ */ jsx("span", { children: "Schedule 1-on-1 Counseling" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
};

export {
  AboutPage
};
