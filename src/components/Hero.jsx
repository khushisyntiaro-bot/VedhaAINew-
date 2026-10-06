import { jsx, jsxs } from "react/jsx-runtime";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  CalendarCheck,
  ShieldCheck,
  Users,
  Compass
} from "lucide-react";
const Hero = ({
  onExploreCourses,
  onBookDemo,
  onOpenCounseling,
  onOpenQuiz,
  searchQuery,
  setSearchQuery
}) => {
  const quickTags = [
    "Core Java",
    "Python + AI",
    "Data Analysis",
    "Spring Boot Microservices",
    "PowerBI",
    "Flutter + Java",
    "SQL Advanced"
  ];
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-stone-950 text-stone-100 overflow-hidden border-b border-stone-800", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2.5 mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-amber-400" }),
          /* @__PURE__ */ jsx("span", { children: "100% Guaranteed Internship Program" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-stone-300 text-xs font-medium", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
          /* @__PURE__ */ jsx("span", { children: "New Live Batches Starting This Week" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 space-y-6", children: [
          /* @__PURE__ */ jsxs("h1", { className: "font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]", children: [
            "Where Raw Code Meets ",
            /* @__PURE__ */ jsx("br", { className: "hidden sm:inline" }),
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-100", children: "Guaranteed Real-World Engineering." })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed font-normal", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-white font-semibold", children: "VedhaAI" }),
            " is an outcome-driven IT training academy. Master ",
            /* @__PURE__ */ jsx("strong", { className: "text-stone-100", children: "Java, Python, AI Agents, Data Analysis, SQL, and PowerBI" }),
            " through production-grade codebases, followed by a ",
            /* @__PURE__ */ jsx("strong", { className: "text-amber-300 font-semibold", children: "100% direct internship placement" }),
            " with our verified hiring network."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ jsx(Search, { className: "w-5 h-5 text-stone-400 absolute left-3.5 pointer-events-none" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "hero-course-search-input",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  placeholder: "Search courses (e.g. Java with AI, Data Analysis, SQL, Flutter)...",
                  className: "w-full pl-11 pr-28 py-3.5 bg-stone-900/90 border border-stone-700 text-sm text-stone-100 rounded-xl placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400/80 focus:border-transparent transition-all shadow-inner"
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  id: "hero-search-action-btn",
                  onClick: onExploreCourses,
                  className: "absolute right-2 px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "Filter" }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-1.5 mt-2.5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] text-stone-400 uppercase tracking-wider font-medium mr-1", children: "Trending:" }),
              quickTags.map((tag) => /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setSearchQuery(tag);
                    onExploreCourses();
                  },
                  className: "text-[11px] px-2 py-0.5 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors",
                  children: tag
                },
                tag
              ))
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 pt-2", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                id: "hero-book-demo-cta",
                onClick: () => onBookDemo(),
                className: "px-6 py-3.5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group",
                children: [
                  /* @__PURE__ */ jsx(CalendarCheck, { className: "w-4 h-4 text-stone-950" }),
                  /* @__PURE__ */ jsx("span", { children: "Book Free Live Demo Class" }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                id: "hero-free-counseling-cta",
                onClick: onOpenCounseling,
                className: "px-5 py-3.5 text-sm font-semibold text-stone-200 hover:text-white bg-stone-900 hover:bg-stone-800/90 border border-stone-700/80 rounded-xl transition-colors flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-stone-400" }),
                  /* @__PURE__ */ jsx("span", { children: "Free 1:1 Career Counseling" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                id: "hero-pathfinder-quiz-btn",
                onClick: onOpenQuiz,
                className: "px-4 py-3.5 text-xs font-semibold text-amber-300 hover:text-amber-200 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx(Compass, { className: "w-4 h-4 text-amber-400" }),
                  /* @__PURE__ */ jsx("span", { children: "Find My Perfect Track (Quiz)" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-5 shadow-xl relative backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-stone-800 pb-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-amber-400" }),
              /* @__PURE__ */ jsx("span", { className: "font-['Space_Grotesk'] text-xs uppercase tracking-wider font-semibold text-stone-300", children: "The VedhaAI Guarantee" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20", children: "100% PLACEMENT" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3.5 text-xs text-stone-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-white block font-medium", children: "Guaranteed Paid/Direct Internship" }),
                /* @__PURE__ */ jsx("span", { className: "text-stone-400 text-[11px]", children: "Official offer letter, mentor supervision & verified certificate." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-white block font-medium", children: "100% Live Instructor-Led Labs" }),
                /* @__PURE__ */ jsx("span", { className: "text-stone-400 text-[11px]", children: "Daily 1-on-1 code reviews with senior engineering architects." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-white block font-medium", children: "Enterprise Production Capstones" }),
                /* @__PURE__ */ jsx("span", { className: "text-stone-400 text-[11px]", children: "Deploy Spring Boot, Flutter, Python AI & Power BI dashboards." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-3 border-t border-stone-800", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-2.5 rounded-lg bg-stone-950/60 border border-stone-800", children: [
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold font-['Space_Grotesk'] text-white", children: "450+" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-stone-400 uppercase tracking-wide", children: "Hiring Partners" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-2.5 rounded-lg bg-stone-950/60 border border-stone-800", children: [
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold font-['Space_Grotesk'] text-amber-400", children: "4.96 / 5" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-stone-400 uppercase tracking-wide", children: "Student Rating" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: onExploreCourses,
              className: "w-full py-2.5 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5",
              children: [
                /* @__PURE__ */ jsx("span", { children: "View Full Curriculum Index (12 Tracks)" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 pt-8 border-t border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white", children: "100%" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-stone-400 font-medium", children: "Guaranteed Internship Placement" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-amber-400", children: "12 Tracks" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-stone-400 font-medium", children: "Java, Python, AI, SQL & Data" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white", children: "1-on-1" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-stone-400 font-medium", children: "Mentorship & Code Reviews" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-emerald-400", children: "Dual Credential" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-stone-400 font-medium", children: "Academy + Industry Experience" })
        ] })
      ] })
    ] })
  ] });
};
export {
  Hero
};
