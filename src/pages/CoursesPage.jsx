import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { ALL_COURSES } from "../data/coursesData";
import {
  Search,
  Sparkles,
  Clock,
  Layers,
  CalendarCheck,
  BookOpen,
  ArrowRight,
  Download,
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const CoursesPage = ({
  onNavigate,
  onSelectCourse,
  onOpenCounseling,
  onOpenBookDemo,
  onOpenDownloadSyllabus,
  onShowToast
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("All");

  const categories = [
    "All",
    "Java Ecosystem",
    "Python & AI",
    "Data & Analytics",
    "AI Programs"
  ];

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      if (selectedCategory === "AI Programs" && !course.isAIProgram) {
        return false;
      }
      if (selectedCategory !== "All" && selectedCategory !== "AI Programs" && course.category !== selectedCategory) {
        return false;
      }
      if (levelFilter !== "All" && !course.level.toLowerCase().includes(levelFilter.toLowerCase())) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesDesc = course.shortDesc.toLowerCase().includes(q) || course.fullDesc.toLowerCase().includes(q);
        const matchesTech = course.technologies.some((t) => t.toLowerCase().includes(q));
        const matchesRole = course.internshipRole.toLowerCase().includes(q);
        return matchesTitle || matchesDesc || matchesTech || matchesRole;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, levelFilter]);

  const handleDownloadSyllabusClick = (courseId) => {
    if (onOpenDownloadSyllabus) {
      onOpenDownloadSyllabus(courseId);
    } else if (onShowToast) {
      onShowToast(`Downloading complete syllabus brochure...`);
    }
  };

  const handleBookDemoClick = (courseId) => {
    if (onOpenBookDemo) {
      onOpenBookDemo(courseId);
    } else {
      onNavigate("book-demo", courseId);
    }
  };

  const handleCounselingClick = (courseTitle) => {
    if (onOpenCounseling) {
      onOpenCounseling(courseTitle);
    } else {
      onNavigate("counseling", courseTitle);
    }
  };

  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    
    /* ── HERO HEADER & FILTERS BAR ── */
    /* @__PURE__ */ jsx("section", { className: "pt-10 pb-8 bg-gradient-to-b from-[#2c9320]/5 via-white to-white border-b border-stone-100 bg-pattern-grid", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6", children: [
      /* Header Text */
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-medium border border-[#2c9320]/20", children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { children: "Industry-Standard Programs (12 Tracks)" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal tracking-tight leading-tight", children: ["Explore All Programs with ", /* @__PURE__ */ jsx("span", { className: "text-[#2c9320]", children: "100% Guaranteed Internship" })] }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm sm:text-base leading-relaxed font-normal", children: "Master enterprise technologies across Java, Python, Generative AI, SQL, Power BI, and Data Analytics with guaranteed stipend-backed commercial internships." })
      ] }),

      /* Search & Filter Row */
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 items-center justify-between pt-2", children: [
        /* Search Box */
        /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:w-96", children: [
          /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: "Search by technology (e.g. Spring, Python, SQL, AI)...",
              className: "w-full pl-10 pr-10 py-2.5 bg-white border border-stone-200 focus:border-[#2c9320] rounded-xl text-xs text-stone-800 placeholder:text-stone-400 outline-none transition-colors shadow-xs"
            }
          ),
          searchQuery && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setSearchQuery(""),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 font-medium cursor-pointer",
              children: "Clear"
            }
          )
        ] }),

        /* Level Selector */
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full sm:w-auto self-start sm:self-auto text-xs text-stone-600", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-500", children: "Level:" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: levelFilter,
              onChange: (e) => setLevelFilter(e.target.value),
              className: "px-3 py-2 bg-white border border-stone-200 rounded-xl text-xs text-stone-800 focus:border-[#2c9320] outline-none shadow-xs cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("option", { value: "All", children: "All Experience Levels" }),
                /* @__PURE__ */ jsx("option", { value: "Beginner", children: "Beginner" }),
                /* @__PURE__ */ jsx("option", { value: "Advanced", children: "Advanced / Intermediate" })
              ]
            }
          )
        ] })
      ] }),

      /* Category Tabs */
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1", children: categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setSelectedCategory(cat),
            className: `px-4 py-2 rounded-xl text-xs transition-all whitespace-nowrap cursor-pointer font-medium ${isSelected ? "bg-[#2c9320] text-white shadow-xs" : "bg-white hover:bg-stone-50 text-stone-700 border border-stone-200"}`,
            children: cat === "AI Programs" ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsx("span", { children: "AI Programs" })
            ] }) : cat
          },
          cat
        );
      }) })
    ] }) }),

    /* ── COURSES GRID ── */
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6", children: [
      /* Results counter bar */
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 pb-2 border-b border-stone-100", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-stone-500 font-normal", children: [
          "Showing ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-stone-900", children: filteredCourses.length }),
          " of ",
          ALL_COURSES.length,
          " available programs"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-2 text-xs text-[#2c9320] font-medium", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "All programs include 100% Guaranteed Internship" })
        ] })
      ] }),

      /* Empty State */
      filteredCourses.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "p-12 text-center bg-stone-50/60 rounded-3xl border border-stone-200 space-y-3", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-stone-600 text-sm font-normal", children: [
          'No programs found matching "',
          searchQuery,
          '".'
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setSearchQuery("");
              setSelectedCategory("All");
              setLevelFilter("All");
            },
            className: "px-4 py-2 bg-[#2c9320] text-white text-xs rounded-xl font-medium cursor-pointer shadow-xs",
            children: "Reset All Filters"
          }
        )
      ] }) : /* ── Courses Grid ── */
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: filteredCourses.map((course) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-3xl border border-stone-200 hover:border-[#2c9320]/40 overflow-hidden flex flex-col justify-between transition-all hover:shadow-md group",
          children: [
            /* Course Image Header */
            course.imageUrl && /* @__PURE__ */ jsxs("div", { className: "relative h-48 w-full shrink-0 overflow-hidden bg-stone-100", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: course.imageUrl,
                  alt: course.title,
                  className: "block w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ),
              /* Dark Gradient */
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent" }),
              
              /* Badges Top */
              /* @__PURE__ */ jsxs("div", { className: "absolute top-3 left-3 right-3 flex items-center justify-between gap-2", children: [
                /* Category badge */
                /* @__PURE__ */ jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-stone-900 font-semibold shadow-xs", children: course.category }),
                /* AI Badge if applicable */
                course.isAIProgram && /* @__PURE__ */ jsxs("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-stone-900/90 text-white font-medium flex items-center gap-1 backdrop-blur-xs border border-stone-700", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3 text-[#2c9320]" }),
                  /* @__PURE__ */ jsx("span", { children: "AI Integrated" })
                ] })
              ] }),

              /* Guaranteed Role Overlay Bottom */
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 left-3 right-3 text-white text-xs flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-[11px] bg-[#2c9320] text-white px-2.5 py-1 rounded-full font-medium shadow-xs", children: [
                  /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsx("span", { children: course.internshipRole })
                ] })
              ] })
            ] }),

            /* Course Details Content */
            /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4 flex-1 flex flex-col justify-between", children: [
              /* Main Info */
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* Title */
                /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-lg text-stone-900 group-hover:text-[#2c9320] transition-colors font-medium leading-snug", children: course.title }),
                /* Short Desc */
                /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed line-clamp-2 font-normal", children: course.shortDesc }),
                
                /* Duration & Level pills */
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 pt-1 text-xs text-stone-600 font-normal", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 p-2 rounded-xl bg-stone-50 border border-stone-100", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-[#2c9320] shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: course.duration })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 p-2 rounded-xl bg-stone-50 border border-stone-100", children: [
                    /* @__PURE__ */ jsx(Layers, { className: "w-3.5 h-3.5 text-stone-500 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: course.level })
                  ] })
                ] }),

                /* Tech Tags */
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
                  course.technologies.slice(0, 4).map((tech, idx) => /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-[10px] px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 font-normal border border-stone-200/60",
                      children: tech
                    },
                    idx
                  )),
                  course.technologies.length > 4 && /* @__PURE__ */ jsxs("span", { className: "text-[10px] px-2 py-1 rounded-lg bg-stone-50 text-stone-400 font-normal border border-stone-100", children: [
                    "+",
                    course.technologies.length - 4,
                    " more"
                  ] })
                ] })
              ] }),

              /* Actions Footer */
              /* @__PURE__ */ jsxs("div", { className: "pt-4 mt-2 border-t border-stone-100 space-y-2", children: [
                /* Buttons Row */
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* Detailed Syllabus Button */
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        onSelectCourse(course);
                        onNavigate("course-detail", course.id);
                      },
                      className: "py-2.5 px-3 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-xl text-xs font-medium transition-colors text-center cursor-pointer inline-flex items-center justify-center gap-1",
                      children: [
                        /* @__PURE__ */ jsx("span", { children: "Syllabus" }),
                        /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5 text-stone-500" })
                      ]
                    }
                  ),
                  /* Book Demo Button */
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleBookDemoClick(course.id),
                      className: "py-2.5 px-3 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs",
                      children: [
                        /* @__PURE__ */ jsx(CalendarCheck, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Book Demo" })
                      ]
                    }
                  )
                ] }),
                
                /* Download Syllabus PDF Link */
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleDownloadSyllabusClick(course.id),
                    className: "w-full py-1.5 text-[11px] text-stone-500 hover:text-[#2c9320] flex items-center justify-center gap-1.5 font-normal cursor-pointer transition-colors",
                    children: [
                      /* @__PURE__ */ jsx(Download, { className: "w-3 h-3 text-stone-400" }),
                      /* @__PURE__ */ jsx("span", { children: "Download Syllabus Brochure (PDF)" })
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

    /* ── BOTTOM ASSISTANCE BANNER ── */
    /* @__PURE__ */ jsx("section", { className: "py-14 bg-stone-50/70 border-t border-stone-100 bg-pattern-dots", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-xl sm:text-2xl text-stone-900 font-normal", children: "Not sure which track aligns best with your career goals?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-stone-600 max-w-lg mx-auto font-normal leading-relaxed", children: "Our senior academic counselors evaluate your educational background and target tech roles to recommend the optimal learning roadmap." }),
      /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => handleCounselingClick(),
          className: "px-6 py-3 bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 rounded-xl text-xs font-medium transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Get Free 1-on-1 Profile Assessment" }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 text-[#2c9320]" })
          ]
        }
      ) })
    ] }) })
  ] });
};

export {
  CoursesPage
};
