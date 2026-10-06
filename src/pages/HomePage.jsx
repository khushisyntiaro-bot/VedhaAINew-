import { jsx, jsxs } from "react/jsx-runtime";
import { ALL_COURSES } from "../data/coursesData";
import { CollegeAISummitSection } from "../components/CollegeAISummitSection";
import { GoogleReviewsSection } from "../components/GoogleReviewsSection";
import onlineTrainingImg from "../assets/online-training.jpg";
import offlineTrainingImg from "../assets/offline-training.jpg";
import placementCellImg from "../assets/placement-cell.jpg";
import capstoneStudioImg from "../assets/capstone-studio.jpg";
import {
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  CalendarCheck,
  UserCheck,
  Clock,
  GraduationCap,
  BookOpen,
  Users,
  Monitor,
  Building2,
  Wifi,
  MapPin,
  PlayCircle,
  Coffee,
  Briefcase,
  Code2
} from "lucide-react";
const HomePage = ({
  onNavigate,
  onSelectCourse,
  onOpenCounseling,
  onOpenBookDemo,
  onOpenDownloadSyllabus
}) => {
  const HOME_COURSE_IDS = ["core-java-advanced-java", "python-with-ai", "data-analysis"];
  const featuredCourses = ALL_COURSES.filter((c) => HOME_COURSE_IDS.includes(c.id));

  return /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
    /* ── HERO SECTION WITH IT CLASS BACKGROUND ── */
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-stone-800 bg-stone-950 text-white overflow-hidden", children: [
      /* Background Image Layer with Overlays */
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsx("img", {
          src: offlineTrainingImg,
          alt: "VedhaAI IT Classroom & Coding Lab Background",
          className: "w-full h-full object-cover object-center filter brightness-[0.28] contrast-125 scale-105"
        }),
        /* Gradient Overlays for High Legibility & Brand Glow */
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950/75 pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2c9320]/25 via-transparent to-transparent pointer-events-none" })
      ] }),

      /* Hero Content Container */
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10", children: [
        /* Hero Heading */
        /* @__PURE__ */ jsxs("h1", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.15] font-normal max-w-4xl mx-auto", children: [
          "Launch Your High-Growth Tech Career with ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "VedhaAI" })
        ] }),

        /* Hero Description */
        /* @__PURE__ */ jsx("p", { className: "text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal", children: "Industry-standard live training in Java Full Stack, Python, Generative AI, SQL, and Data Analytics. Real commercial capstones, 1-on-1 code reviews, and guaranteed corporate placement." }),

        /* CTAs */
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1", children: [
          /* @__PURE__ */ jsxs("button", {
            type: "button",
            onClick: () => onOpenBookDemo(),
            className: "w-full sm:w-auto px-7 py-3.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-sm transition-all shadow-lg hover:shadow-emerald-900/40 cursor-pointer font-medium flex items-center justify-center gap-2 group",
            children: [
              /* @__PURE__ */ jsx(CalendarCheck, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: "Book Free Live Demo" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform" })
            ]
          }),
          /* @__PURE__ */ jsxs("button", {
            type: "button",
            onClick: () => onNavigate("courses"),
            className: "w-full sm:w-auto px-6 py-3.5 bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700/80 rounded-xl text-sm transition-colors cursor-pointer font-medium flex items-center justify-center gap-2 backdrop-blur-md",
            children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-emerald-400" }),
              /* @__PURE__ */ jsx("span", { children: "Explore All 12 Courses" })
            ]
          }),
          /* @__PURE__ */ jsxs("button", {
            type: "button",
            onClick: () => onOpenCounseling(),
            className: "w-full sm:w-auto px-5 py-3.5 text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm transition-colors cursor-pointer font-medium flex items-center justify-center gap-2 backdrop-blur-md",
            children: [
              /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 text-emerald-400" }),
              /* @__PURE__ */ jsx("span", { children: "Free 1-on-1 Counseling" })
            ]
          })
        ] }),

        /* Glassmorphic Quick Stat Cards */
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto pt-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-stone-900/70 border border-stone-800/90 backdrop-blur-md text-left space-y-1 hover:border-[#2c9320]/50 transition-colors shadow-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-emerald-400", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-bold font-['Space_Grotesk'] text-white", children: "100%" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-stone-200", children: "Guaranteed Placement" }),
            /* @__PURE__ */ jsx("div", { className: "text-[11px] text-stone-400", children: "Direct Corporate Internship" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-stone-900/70 border border-stone-800/90 backdrop-blur-md text-left space-y-1 hover:border-[#2c9320]/50 transition-colors shadow-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-emerald-400", children: [
              /* @__PURE__ */ jsx(Code2, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-bold font-['Space_Grotesk'] text-white", children: "12 Tracks" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-stone-200", children: "Full Stack & AI" }),
            /* @__PURE__ */ jsx("div", { className: "text-[11px] text-stone-400", children: "Java, Python, AI, SQL" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-stone-900/70 border border-stone-800/90 backdrop-blur-md text-left space-y-1 hover:border-[#2c9320]/50 transition-colors shadow-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-emerald-400", children: [
              /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-bold font-['Space_Grotesk'] text-white", children: "1-on-1" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-stone-200", children: "Senior Mentorship" }),
            /* @__PURE__ */ jsx("div", { className: "text-[11px] text-stone-400", children: "Daily Live Code Reviews" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-stone-900/70 border border-stone-800/90 backdrop-blur-md text-left space-y-1 hover:border-[#2c9320]/50 transition-colors shadow-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-emerald-400", children: [
              /* @__PURE__ */ jsx(Building2, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-bold font-['Space_Grotesk'] text-white", children: "450+" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-stone-200", children: "Hiring Partners" }),
            /* @__PURE__ */ jsx("div", { className: "text-[11px] text-stone-400", children: "Top IT Corporate Network" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white border-b border-stone-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12 space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-[#2c9320] font-medium", children: "Why Learn With VedhaAI" }),
        /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-medium", children: "Engineered for Real-World Tech Employment" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm font-normal", children: "We bridge the gap between academic theory and high-paying engineering roles through structured mentorship." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#2c9320]/40 transition-colors space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center font-medium", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "100% Guaranteed Internship" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: "Every graduate is matched with a verified commercial internship in software engineering, cloud APIs, or data analytics with corporate certification." }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigate("internships"),
              className: "text-xs text-[#2c9320] hover:underline flex items-center gap-1 pt-1 font-medium cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("span", { children: "Read Internship Policy" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#2c9320]/40 transition-colors space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center font-medium", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "Modern AI-Infused Curriculum" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: "Learn modern Java 21 with Spring AI, Python with LangChain and RAG, plus automated unit testing and agentic workflows." }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigate("ai-programs"),
              className: "text-xs text-[#2c9320] hover:underline flex items-center gap-1 pt-1 font-medium cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("span", { children: "View AI Programs" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#2c9320]/40 transition-colors space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center font-medium", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "1-on-1 Code Reviews & Mentorship" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: "Receive line-by-line pull request feedback from senior architects, mock technical interviews, and resume optimization." }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigate("about"),
              className: "text-xs text-[#2c9320] hover:underline flex items-center gap-1 pt-1 font-medium cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("span", { children: "About Our Mentors" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      CollegeAISummitSection,
      {
        onOpenBookDemo,
        onOpenCounseling
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-stone-50/50 border-b border-stone-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-[#2c9320] font-medium", children: "Industry-Standard Tracks" }),
          /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-medium", children: "Popular Learning Pathways" }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-xs sm:text-sm font-normal", children: "Select a pathway to view complete week-by-week syllabus and book a free live demo." })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => onNavigate("courses"),
            className: "px-4 py-2.5 bg-white border border-stone-200 hover:border-[#2c9320] text-stone-800 hover:text-[#2c9320] rounded-xl text-xs flex items-center gap-2 transition-colors self-start md:self-auto cursor-pointer font-medium shadow-xs",
            children: [
              /* @__PURE__ */ jsx("span", { children: "View All 12 Courses" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: featuredCourses.map((course) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-2xl border border-stone-200 hover:border-[#2c9320]/50 overflow-hidden flex flex-col justify-between transition-all hover:shadow-sm group",
          children: [
            course.imageUrl && /* @__PURE__ */ jsxs("div", { className: "relative h-44 w-full overflow-hidden bg-stone-100", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: course.imageUrl,
                  alt: course.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 flex items-center gap-1.5", children: /* @__PURE__ */ jsx("span", { className: "text-[11px] px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[#2c9320] font-medium shadow-xs", children: course.category }) }),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px]", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 font-normal text-white/90", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
                  course.duration
                ] }),
                course.highlightTag && /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-[#2c9320] text-white text-[10px] font-medium shadow-xs", children: course.highlightTag })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-3 flex-1 flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium group-hover:text-[#2c9320] transition-colors", children: course.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 line-clamp-2 leading-relaxed font-normal", children: course.shortDesc }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: course.technologies.slice(0, 4).map((tech, idx) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-normal",
                    children: tech
                  },
                  idx
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pt-5 mt-4 border-t border-stone-100 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      onSelectCourse(course);
                      onNavigate("course-detail", course.id);
                    },
                    className: "flex-1 py-2 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-lg text-xs transition-colors text-center font-medium cursor-pointer",
                    children: "View Syllabus"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => onOpenBookDemo(course.id),
                    className: "px-3 py-2 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-lg text-xs transition-colors flex items-center gap-1 font-medium cursor-pointer shrink-0",
                    children: [
                      /* @__PURE__ */ jsx(CalendarCheck, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Demo" })
                    ]
                  }
                )
              ] })
            ] })
          ]
        },
        course.id
      )) })
    ] }) }),
    /* Training Mode Section */
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white border-b border-stone-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* Header */
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12 space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-[#2c9320] font-medium", children: "Flexible Learning Experience" }),
        /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-medium", children: "Choose Your Training Mode" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm font-normal", children: "Learn the way that suits your lifestyle — join live interactive sessions from anywhere, or attend hands-on lab classes at our campus." })
      ] }),
      /* Cards */
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* Online Card */
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden border border-[#2c9320]/20 bg-gradient-to-br from-[#2c9320]/5 via-white to-[#2c9320]/10 p-6 sm:p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow group", children: [
          /* Header above image */
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-xl sm:text-2xl text-stone-900 font-semibold", children: "Live Online Training" }),
          /* Image container */
          /* @__PURE__ */ jsx("div", { className: "relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden shadow-xs border border-stone-100", children: /* @__PURE__ */ jsx("img", { src: onlineTrainingImg, alt: "Live Online Training", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
          /* Description */
          /* @__PURE__ */ jsx("p", { className: "text-sm text-stone-600 leading-relaxed", children: "Attend daily live sessions with senior instructors via a virtual classroom. Get real-time doubt resolution, screen-sharing, whiteboard sessions, and collaborative coding — all from the comfort of your home." }),
          /* Features */
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-xs text-stone-700", children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Live interactive classes — Morning, Afternoon & Evening batches" })] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-xs text-stone-700", children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Session recordings available 24/7 for revision" })] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-xs text-stone-700", children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Real-time code review & doubt resolution via shared IDE" })] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-xs text-stone-700", children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Flexible weekend batches for working professionals" })] })
          ] }),
          /* CTA */
          /* @__PURE__ */ jsx("div", { className: "pt-2 mt-auto", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => onOpenBookDemo(), className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer shadow-sm", children: [/* @__PURE__ */ jsx(PlayCircle, { className: "w-4 h-4" }), "Book Free Online Demo"] }) }),
          /* Decorative glow */
          /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#2c9320]/10 blur-2xl pointer-events-none" })
        ] }),
        /* Offline Card */
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden border border-stone-200 bg-gradient-to-br from-stone-50 via-white to-amber-50/40 p-6 sm:p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow group", children: [
          /* Header above image */
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-xl sm:text-2xl text-stone-900 font-semibold", children: "Offline / Classroom Training" }),
          /* Image container */
          /* @__PURE__ */ jsx("div", { className: "relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden shadow-xs border border-stone-100", children: /* @__PURE__ */ jsx("img", { src: offlineTrainingImg, alt: "Offline Classroom Training", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
          /* Description */
          /* @__PURE__ */ jsx("p", { className: "text-sm text-stone-600 leading-relaxed", children: "Experience immersive in-person learning at our state-of-the-art coding lab. Sit alongside peer developers, pair-program on lab machines, and get face-to-face mentorship from senior architects on our campus." }),
          /* Features */
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-xs text-stone-700", children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-stone-700 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "In-person coding labs with high-spec developer workstations" })] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-xs text-stone-700", children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-stone-700 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Face-to-face mentorship & structured daily lab schedule" })] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-xs text-stone-700", children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-stone-700 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Peer learning environment with group code reviews" })] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-xs text-stone-700", children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-stone-700 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Free access to campus Wi-Fi, study lounge & cafeteria" })] })
          ] }),
          /* CTA */
          /* @__PURE__ */ jsx("div", { className: "pt-2 mt-auto", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => onOpenCounseling(), className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-800 hover:bg-stone-900 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer shadow-sm", children: [/* @__PURE__ */ jsx(Coffee, { className: "w-4 h-4" }), "Visit Campus & Talk to Us"] }) })
        ] })
      ] }),
      /* Bottom note */
      /* @__PURE__ */ jsxs("div", { className: "mt-10 text-center p-5 rounded-2xl bg-[#2c9320]/5 border border-[#2c9320]/15 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-stone-700 font-medium", children: [/* @__PURE__ */ jsx("span", { className: "text-[#2c9320]", children: "✦ Hybrid Mode Available" }), " — Start online, finish in the campus lab. Or switch modes anytime."] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 mt-1", children: "Both modes include the same curriculum, capstone projects, and 100% Guaranteed Internship." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white border-b border-stone-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "p-8 sm:p-10 rounded-3xl bg-[#2c9320]/5 border border-[#2c9320]/20 bg-pattern-dots relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 max-w-xl text-center lg:text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-medium", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { children: "Next-Gen Engineering Curriculum" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-medium", children: "Master Java & Python with Integrated Generative AI" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-stone-600 leading-relaxed font-normal", children: "Don't just write boilerplate code. Build intelligent enterprise microservices with Spring AI, LangChain agents, Vector Databases, and automated RAG pipelines." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-stone-600 font-normal", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320]" }),
            /* @__PURE__ */ jsx("span", { children: "Spring AI & Function Calling" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320]" }),
            /* @__PURE__ */ jsx("span", { children: "LangChain & Vector DBs" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320]" }),
            /* @__PURE__ */ jsx("span", { children: "Autonomous Agents" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => onNavigate("ai-programs"),
          className: "px-6 py-3.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs transition-colors flex items-center justify-center gap-2 font-medium cursor-pointer shadow-xs",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Explore AI Programs" }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-stone-50/50 border-b border-stone-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12 space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-[#2c9320] font-medium", children: "Guaranteed Career Trajectory" }),
        /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-medium", children: "The 3-Stage Internship Guarantee Pathway" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-xs sm:text-sm font-normal", children: "Structured to ensure every student transitions from classroom to live commercial production." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 relative space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[#2c9320] text-white flex items-center justify-center text-xs font-medium", children: "1" }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "Live Interactive Mastery" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: "Hands-on coding with daily lab assignments, algorithm challenges, and mentor-led architectural deep dives." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 relative space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[#2c9320] text-white flex items-center justify-center text-xs font-medium", children: "2" }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "Commercial Capstone Build" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: "Build real production-grade applications under enterprise code standards, Git workflow, CI/CD, and code reviews." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 relative space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[#2c9320] text-white flex items-center justify-center text-xs font-medium", children: "3" }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "Direct Corporate Internship" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: "100% matched to our network of 450+ partner companies with commercial experience certificates and stipend support." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => onNavigate("internships"),
          className: "px-5 py-2.5 bg-white hover:bg-stone-50 border border-stone-200 hover:border-[#2c9320] text-stone-800 rounded-xl text-xs font-medium transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Learn More About the 100% Internship Process" }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 text-[#2c9320]" })
          ]
        }
      ) })
    ] }) }),

    /* ── NEW SECTION 1: Dedicated Placement Cell ── */
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white border-b border-stone-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* Left Column: Image */
      /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-lg border border-stone-100 group", children: /* @__PURE__ */ jsx("img", { src: placementCellImg, alt: "Dedicated Corporate Placement Cell", className: "w-full h-auto max-h-[420px] object-cover group-hover:scale-105 transition-transform duration-500" }) }),
      /* Right Column: Content */
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-medium border border-[#2c9320]/20", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsx("span", { children: "Dedicated Placement Division" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl text-stone-900 font-normal leading-tight", children: "Dedicated Placement Cell & Corporate Hiring Network" }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed font-normal", children: "Our placement division actively bridges the gap between students and engineering teams at 450+ corporate partners. We don't just send resumes — we prepare you to excel in technical panel interviews." })
        ] }),
        /* Feature list */
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 pt-1", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-normal", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Dedicated Placement Officer — 1-on-1 guidance for interview scheduling & company matching." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-normal", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Resume & LinkedIn Transformation — Recruiter-optimized profiling highlighting live projects." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-normal", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Mock Technical Panels — Whiteboard algorithm problem-solving & live system design practice." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-normal", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Direct Corporate Hiring Referrals — Priority interview slots with stipend support for interns." })
          ] })
        ] }),
        /* Button */
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => onNavigate("internships"), className: "px-6 py-3 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-medium transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm", children: [
          /* @__PURE__ */ jsx("span", { children: "Explore Placement & Internship Network" }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] })
    ] }) }) }),

    /* ── NEW SECTION 2: Live Capstone Studio ── */
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-stone-50/60 border-b border-stone-100 bg-pattern-grid", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* Left Column: Content */
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 lg:order-1 order-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-medium border border-[#2c9320]/20", children: [
            /* @__PURE__ */ jsx(Code2, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsx("span", { children: "Commercial Capstone Studio" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl text-stone-900 font-normal leading-tight", children: "Build Real Software Products in a Live Production Studio" }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm leading-relaxed font-normal", children: "Stop practicing on toy examples. At VedhaAI, students write enterprise-grade Java & Python software using real commercial tools, Git branches, CI/CD automated pipelines, and cloud hosting." })
        ] }),
        /* Feature list */
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 pt-1", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-normal", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "GitHub Enterprise Workflow — Branching, pull-request reviews, and mentor code inspections." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-normal", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Docker & AWS Cloud Deployment — Deploy production containers with live URL endpoints." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-normal", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Automated Unit Testing & CI/CD — Maintain 80%+ test coverage with JUnit 5 & PyTest." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-normal", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Commercial Portfolio Certificate — Showcase verified capstone code directly on your GitHub resume." })
          ] })
        ] }),
        /* Button */
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => onOpenBookDemo(), className: "px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-medium transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm", children: [
          /* @__PURE__ */ jsx("span", { children: "Book Free Demo & Experience Studio" }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] }),
      /* Right Column: Image */
      /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-lg border border-stone-100 group lg:order-2 order-1", children: /* @__PURE__ */ jsx("img", { src: capstoneStudioImg, alt: "Commercial Capstone Engineering Studio", className: "w-full h-auto max-h-[420px] object-cover group-hover:scale-105 transition-transform duration-500" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-medium", children: [
        /* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "Next Cohort Starting Soon" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-3xl sm:text-4xl text-stone-900 font-medium", children: "Take the First Step Toward Your Tech Internship Today" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm max-w-xl mx-auto leading-relaxed font-normal", children: "Attend a free live demo coding class with our lead architects or speak 1-on-1 with an academic counselor to choose your track." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-2", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => onOpenBookDemo(),
            className: "w-full sm:w-auto px-6 py-3.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs transition-colors flex items-center justify-center gap-2 font-medium cursor-pointer",
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
            onClick: () => onOpenCounseling(),
            className: "w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 font-medium cursor-pointer",
            children: [
              /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 text-[#2c9320]" }),
              /* @__PURE__ */ jsx("span", { children: "Get Free 1-on-1 Counseling" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  HomePage
};
