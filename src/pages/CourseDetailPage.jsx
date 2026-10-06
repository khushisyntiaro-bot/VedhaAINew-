import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ALL_COURSES } from "../data/coursesData";
import {
  CalendarCheck,
  CheckCircle2,
  ShieldCheck,
  Download,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Sparkles,
  UserCheck,
  Clock,
  Layers,
  Award,
  BookOpen,
  Briefcase
} from "lucide-react";

const CourseDetailPage = ({
  courseId,
  onNavigate,
  onOpenCounseling,
  onOpenBookDemo,
  onOpenDownloadSyllabus,
  onShowToast
}) => {
  const course = ALL_COURSES.find((c) => c.id === courseId) || ALL_COURSES[0];
  const [openModuleIndex, setOpenModuleIndex] = useState(0);

  const toggleModule = (idx) => {
    setOpenModuleIndex(openModuleIndex === idx ? null : idx);
  };

  const handleDownloadSyllabus = () => {
    if (onOpenDownloadSyllabus) {
      onOpenDownloadSyllabus(course.id);
    } else if (onShowToast) {
      onShowToast(`Downloading complete syllabus brochure for ${course.title}...`);
    }
  };

  const handleBookDemo = () => {
    if (onOpenBookDemo) {
      onOpenBookDemo(course.id);
    } else {
      onNavigate("book-demo", course.id);
    }
  };

  const handleCounseling = () => {
    if (onOpenCounseling) {
      onOpenCounseling(course.title);
    } else {
      onNavigate("counseling", course.title);
    }
  };

  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    
    /* ── BREADCRUMB HEADER ── */
    /* @__PURE__ */ jsx("div", { className: "border-b border-stone-100 bg-stone-50/70 py-3.5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs", children: [
      /* Back Button */
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => onNavigate("courses"),
          className: "text-stone-600 hover:text-[#2c9320] flex items-center gap-1.5 font-medium cursor-pointer transition-colors",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5 text-[#2c9320]" }),
            /* @__PURE__ */ jsx("span", { children: "Back to All Courses" })
          ]
        }
      ),
      /* Breadcrumb path */
      /* @__PURE__ */ jsxs("span", { className: "text-stone-400 font-normal hidden sm:inline-block", children: [
        course.category,
        " / ",
        /* @__PURE__ */ jsx("span", { className: "text-stone-800 font-medium", children: course.title })
      ] })
    ] }) }),

    /* ── HERO BANNER & ENROLLMENT CARD ── */
    /* @__PURE__ */ jsx("section", { className: "relative pt-10 pb-12 bg-gradient-to-b from-[#2c9320]/5 via-white to-white border-b border-stone-100 bg-pattern-grid", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", children: [
      
      /* Left Column (8 cols): Title & Description */
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 space-y-5", children: [
        /* Tags Row */
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* Category Pill */
          /* @__PURE__ */ jsx("span", { className: "text-xs px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] font-medium border border-[#2c9320]/20", children: course.category }),
          /* AI Badge */
          course.isAIProgram && /* @__PURE__ */ jsxs("span", { className: "text-xs px-3 py-1 rounded-full bg-stone-900 text-white font-medium flex items-center gap-1.5 shadow-xs", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3 text-[#2c9320]" }),
            /* @__PURE__ */ jsx("span", { children: "AI Integrated Curriculum" })
          ] }),
          /* Level Tag */
          /* @__PURE__ */ jsxs("span", { className: "text-xs px-3 py-1 rounded-full bg-stone-100 text-stone-600 font-normal border border-stone-200/80", children: [
            "Level: ",
            course.level
          ] })
        ] }),

        /* Title */
        /* @__PURE__ */ jsx("h1", { className: "font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal tracking-tight leading-tight", children: course.title }),

        /* Full Description */
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-3xl", children: course.fullDesc }),

        /* Key Metrics Grid */
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-normal", children: [
          /* Duration */
          /* @__PURE__ */ jsxs("div", { className: "p-3.5 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-stone-400 block text-[10px]", children: "Duration" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-stone-900", children: course.duration })
            ] })
          ] }),
          /* Delivery Mode */
          /* @__PURE__ */ jsxs("div", { className: "p-3.5 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Layers, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-stone-400 block text-[10px]", children: "Delivery Mode" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-stone-900", children: course.mode })
            ] })
          ] }),
          /* Guaranteed Role */
          /* @__PURE__ */ jsxs("div", { className: "p-3.5 rounded-2xl bg-[#2c9320]/10 border border-[#2c9320]/20 col-span-2 sm:col-span-1 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-xl bg-[#2c9320] text-white flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#2c9320] block text-[10px] font-medium", children: "Guaranteed Role" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#2c9320]", children: course.internshipRole })
            ] })
          ] })
        ] })
      ] }),

      /* Right Column (4 cols): Sticky Action Card */
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-lg sticky top-24", children: [
        /* Image Banner */
        course.imageUrl && /* @__PURE__ */ jsxs("div", { className: "relative h-48 w-full bg-stone-100 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: course.imageUrl,
              alt: course.title,
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-white/95 text-[#2c9320] font-semibold shadow-xs", children: course.category }) })
        ] }),

        /* Content & CTA Buttons */
        /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
          /* Assurance badge */
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-[#2c9320] font-semibold p-2.5 rounded-xl bg-[#2c9320]/10 border border-[#2c9320]/20", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "100% Guaranteed Internship Assurance" })
          ] }),

          /* Next Cohort Start */
          /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-stone-400 block font-normal", children: "Upcoming Cohort Starts:" }),
            /* @__PURE__ */ jsx("span", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-semibold", children: course.batchStarts })
          ] }),

          /* Action Buttons Stack */
          /* @__PURE__ */ jsxs("div", { className: "space-y-2.5 pt-2", children: [
            /* Book Free Live Demo */
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: handleBookDemo,
                className: "w-full py-3 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm",
                children: [
                  /* @__PURE__ */ jsx(CalendarCheck, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Book Free Live Demo Class" })
                ]
              }
            ),
            /* Speak to Advisor */
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: handleCounseling,
                className: "w-full py-3 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 text-[#2c9320]" }),
                  /* @__PURE__ */ jsx("span", { children: "Speak to Academic Advisor" })
                ]
              }
            ),
            /* Download Brochure PDF */
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: handleDownloadSyllabus,
                className: "w-full py-2 text-xs text-stone-500 hover:text-[#2c9320] flex items-center justify-center gap-1.5 font-normal cursor-pointer transition-colors",
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "w-3.5 h-3.5 text-stone-400" }),
                  /* @__PURE__ */ jsx("span", { children: "Download Full Syllabus (PDF)" })
                ]
              }
            )
          ] })
        ] })
      ] }) })
    ] }) }) }),

    /* ── DETAILED SYLLABUS & CAPSTONE PROJECTS SECTION ── */
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10", children: [
      
      /* Left Column (8 cols): Syllabus Accordion & Capstone Projects */
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 space-y-8", children: [
        /* Header */
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-[#2c9320] font-medium", children: "Detailed Curriculum" }),
          /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal", children: "Phase-by-Phase Learning Roadmap" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 font-normal", children: "Expand each phase to view topics, hands-on lab challenges, and practical exercises." })
        ] }),

        /* Accordion Stack */
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: course.syllabus.map((mod, idx) => {
          const isOpen = openModuleIndex === idx;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: `rounded-2xl border transition-all ${isOpen ? "border-[#2c9320]/40 bg-stone-50/60 shadow-xs" : "border-stone-200 bg-white hover:border-stone-300"}`,
              children: [
                /* Accordion Header */
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleModule(idx),
                    className: "w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-[#2c9320] shadow-2xs", children: mod.weekOrPhase }),
                        /* @__PURE__ */ jsx("span", { className: "font-['Space_Grotesk'] text-sm sm:text-base text-stone-900 font-medium", children: mod.title })
                      ] }),
                      /* Arrow Icon */
                      /* @__PURE__ */ jsx("div", { className: "p-1.5 rounded-lg bg-stone-100 text-stone-600 shrink-0", children: isOpen ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" }) })
                    ]
                  }
                ),
                /* Accordion Content */
                isOpen && /* @__PURE__ */ jsxs("div", { className: "px-5 pb-5 pt-1 border-t border-stone-200/50 space-y-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] text-stone-400 block font-normal", children: "Key Modules & Lab Topics:" }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700 font-normal", children: mod.topics.map((topic, tIdx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: topic })
                  ] }, tIdx)) })
                ] })
              ]
            },
            idx
          );
        }) }),

        /* Capstone Projects Box */
        /* @__PURE__ */ jsxs("div", { className: "pt-4 space-y-4", children: [
          /* Section Header */
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-[#2c9320] font-medium", children: "Practical Portfolio" }),
            /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-xl sm:text-2xl text-stone-900 font-normal", children: "Commercial Capstone Software Projects" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 font-normal", children: "You will write, test, and deploy these production-grade applications to your GitHub portfolio." })
          ] }),

          /* 3 Project Cards */
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: course.capstoneProjects.map((proj, pIdx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "p-5 rounded-2xl bg-stone-50/80 border border-stone-200 space-y-2.5 hover:border-[#2c9320]/30 transition-colors",
              children: [
                /* Number Badge */
                /* @__PURE__ */ jsxs("div", { className: "w-8 h-8 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center font-['Space_Grotesk'] text-xs font-semibold", children: [
                  "0",
                  pIdx + 1
                ] }),
                /* Title */
                /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-xs sm:text-sm text-stone-900 font-medium leading-snug", children: proj })
              ]
            },
            pIdx
          )) })
        ] })
      ] }),

      /* Right Column (4 cols): Sidebar Cards */
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 space-y-6", children: [
        /* Tech Stack Card */
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-3xl bg-white border border-stone-200 space-y-3.5 shadow-2xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-[#2c9320]" }),
            /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-sm text-stone-900 font-medium", children: "Technologies Mastered" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: course.technologies.map((t, idx) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs px-2.5 py-1 rounded-lg bg-stone-100 text-stone-800 font-normal border border-stone-200/60",
              children: t
            },
            idx
          )) })
        ] }),

        /* Target Roles Card */
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-3xl bg-white border border-stone-200 space-y-3.5 shadow-2xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "w-4 h-4 text-[#2c9320]" }),
            /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-sm text-stone-900 font-medium", children: "Target Job Roles" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2 text-xs text-stone-700 font-normal", children: course.careerOutcomes.map((role, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: role })
          ] }, idx)) })
        ] }),

        /* Prerequisites Card */
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-2 text-xs text-stone-600 font-normal", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-sm text-stone-900 font-medium", children: "Prerequisites" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: course.prerequisites })
        ] })
      ] })

    ] }) }) })
  ] });
};

export {
  CourseDetailPage
};
