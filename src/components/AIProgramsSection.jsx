import { jsx, jsxs } from "react/jsx-runtime";
import { ALL_COURSES } from "../data/coursesData";
import {
  Sparkles,
  Bot,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Zap,
  Database
} from "lucide-react";
const AIProgramsSection = ({
  onSelectCourse,
  onBookDemo
}) => {
  const aiCourses = ALL_COURSES.filter(
    (c) => c.isAIProgram || c.title.includes("AI") || c.id === "data-analysis" || c.id === "python-libraries"
  );
  return /* @__PURE__ */ jsxs("section", { id: "ai-programs", className: "py-20 bg-stone-950 text-stone-100 border-b border-stone-800 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mb-14 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { children: "Next-Generation Intelligence Tracks" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-white", children: "AI-Infused Software Engineering & Analytics" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-300 text-sm sm:text-base leading-relaxed", children: "Traditional programming alone is no longer enough. At VedhaAI, we teach you how to build with LLMs, Spring AI, Python LangChain, Gemini API, and Vector Databases to secure high-growth AI roles." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center", children: /* @__PURE__ */ jsx(Bot, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base font-bold text-white", children: "Autonomous AI Agents & RAG" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-400 leading-relaxed", children: "Build Retrieval-Augmented Generation systems using PGVector, ChromaDB, and multi-agent tool execution pipelines." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center", children: /* @__PURE__ */ jsx(Terminal, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base font-bold text-white", children: "Spring AI & Enterprise Java GenAI" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-400 leading-relaxed", children: "Connect mission-critical Java microservices to Google Gemini and open-source models with strict type safety." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center", children: /* @__PURE__ */ jsx(Database, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base font-bold text-white", children: "AI-Enhanced Data Pipelines" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-400 leading-relaxed", children: "Automate SQL query generation, predictive analytics, and executive business dashboards with Python and Power BI." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: aiCourses.slice(0, 4).map((course) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "p-6 rounded-2xl bg-gradient-to-b from-stone-900 to-stone-900/60 border border-stone-800 hover:border-amber-400/50 transition-all flex flex-col justify-between",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-mono font-semibold text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20", children: course.title.includes("AI") ? "GenAI Specialization" : "Modern Analytics" }),
                /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-stone-400", children: [
                  course.duration,
                  " \u2022 ",
                  course.mode
                ] })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-xl font-bold text-white mb-2", children: course.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-300 leading-relaxed mb-4", children: course.shortDesc }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2 mb-5", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[11px] font-mono text-stone-400 uppercase tracking-wider", children: "Hands-on Capstones:" }),
                course.capstoneProjects.slice(0, 2).map((proj, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-xs text-stone-300", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: proj })
                ] }, idx))
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs text-amber-300 font-medium", children: [
                /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-amber-400" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Internship: ",
                  course.internshipRole
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => onSelectCourse(course),
                    className: "px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors",
                    children: "View Curriculum"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => onBookDemo(course.id),
                    className: "px-3.5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-colors flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ jsx("span", { children: "Book AI Demo" }),
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
                    ]
                  }
                )
              ] })
            ] })
          ]
        },
        course.id
      )) })
    ] })
  ] });
};
export {
  AIProgramsSection
};
