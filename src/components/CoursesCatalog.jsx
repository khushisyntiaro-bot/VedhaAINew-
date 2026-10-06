import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { ALL_COURSES } from "../data/coursesData";
import {
  Search,
  Filter,
  Sparkles,
  Clock,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  Code2,
  ChevronRight,
  ShieldCheck,
  Star
} from "lucide-react";
const CoursesCatalog = ({
  onSelectCourse,
  onBookDemo,
  onOpenCounseling,
  searchQuery,
  setSearchQuery
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const categories = [
    "All",
    "Java Ecosystem",
    "Python & AI",
    "Data & Analytics",
    "AI Programs"
  ];
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      if (activeCategory === "AI Programs") {
        if (!course.isAIProgram && course.category !== "AI Programs") return false;
      } else if (activeCategory !== "All" && course.category !== activeCategory) {
        return false;
      }
      if (selectedLevel !== "All" && course.level !== selectedLevel && !course.level.includes(selectedLevel)) {
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
  }, [activeCategory, selectedLevel, searchQuery]);
  return /* @__PURE__ */ jsx("section", { id: "courses", className: "py-20 bg-stone-100/70 border-b border-stone-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 max-w-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-200/90 text-stone-800 text-xs font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx(Code2, { className: "w-3.5 h-3.5 text-stone-900" }),
          /* @__PURE__ */ jsx("span", { children: "Full Curriculum Catalog (12 Certified Tracks)" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight", children: "Industry-Aligned Programs with Guaranteed Internships" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm sm:text-base leading-relaxed", children: "Every course is engineered with live coding labs, enterprise architecture practices, and an official guaranteed internship placement upon completion." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => onOpenCounseling(),
          className: "px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors flex items-center gap-2 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Need help choosing a track?" }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 text-stone-400" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm mb-10 space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0", id: "course-category-filter-tabs", children: categories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = cat === "All" ? ALL_COURSES.length : cat === "AI Programs" ? ALL_COURSES.filter((c) => c.isAIProgram).length : ALL_COURSES.filter((c) => c.category === cat).length;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            className: `px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${isActive ? "bg-stone-900 text-white shadow-sm" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`,
            children: [
              cat === "AI Programs" && /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-emerald-400" }),
              /* @__PURE__ */ jsx("span", { children: cat }),
              /* @__PURE__ */ jsx("span", { className: `text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? "bg-stone-700 text-stone-200" : "bg-stone-200 text-stone-600"}`, children: count })
            ]
          },
          cat
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full sm:w-auto flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl px-3 py-1.5", children: [
          /* @__PURE__ */ jsx(Filter, { className: "w-3.5 h-3.5 text-stone-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-stone-500 font-medium", children: "Level:" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: selectedLevel,
              onChange: (e) => setSelectedLevel(e.target.value),
              className: "bg-transparent text-xs font-semibold text-stone-800 focus:outline-none cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("option", { value: "All", children: "All Levels" }),
                /* @__PURE__ */ jsx("option", { value: "Beginner", children: "Beginner" }),
                /* @__PURE__ */ jsx("option", { value: "Intermediate", children: "Intermediate" }),
                /* @__PURE__ */ jsx("option", { value: "Advanced", children: "Advanced" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:w-64", children: [
          /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: "Filter 12 courses...",
              className: "w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all"
            }
          ),
          searchQuery && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setSearchQuery(""),
              className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700",
              children: "\xD7"
            }
          )
        ] })
      ] })
    ] }) }),
    filteredCourses.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "p-12 text-center bg-white rounded-2xl border border-stone-200 max-w-lg mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-stone-500 text-sm", children: [
        'No courses found matching "',
        searchQuery,
        '".'
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setSearchQuery("");
            setActiveCategory("All");
            setSelectedLevel("All");
          },
          className: "px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold",
          children: "Reset Filters"
        }
      )
    ] }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", id: "courses-cards-grid", children: filteredCourses.map((course) => /* @__PURE__ */ jsxs(
      "div",
      {
        id: `course-card-${course.id}`,
        className: "bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:border-stone-400 hover:shadow-lg transition-all duration-200 group relative",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200", children: course.category }),
              course.highlightTag && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-900 border border-amber-400/40", children: course.highlightTag }),
              course.isAIProgram && !course.highlightTag && /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "w-2.5 h-2.5" }),
                " AI Track"
              ] })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-lg font-bold text-stone-950 mb-2 group-hover:text-amber-600 transition-colors leading-snug", children: course.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed mb-4 line-clamp-2", children: course.shortDesc }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4 text-[11px] text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-stone-400 shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: course.duration })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(GraduationCap, { className: "w-3.5 h-3.5 text-stone-400 shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "truncate", children: course.level })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono uppercase text-stone-400 tracking-wider mb-1.5", children: "Core Stack & Tools:" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1", children: [
                course.technologies.slice(0, 4).map((tech) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-800 font-medium",
                    children: tech
                  },
                  tech
                )),
                course.technologies.length > 4 && /* @__PURE__ */ jsxs("span", { className: "text-[11px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-500", children: [
                  "+",
                  course.technologies.length - 4,
                  " more"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 mb-5 flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-amber-600 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-amber-950 block", children: "100% Internship Placement:" }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] text-amber-800 font-medium", children: course.internshipRole })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 pt-3 border-t border-stone-100", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  id: `view-syllabus-btn-${course.id}`,
                  onClick: () => onSelectCourse(course),
                  className: "py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Syllabus" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  id: `book-demo-btn-${course.id}`,
                  onClick: () => onBookDemo(course.id),
                  className: "py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx(CalendarCheck, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ jsx("span", { children: "Book Demo" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-[11px] text-stone-500 pt-1 px-1", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 text-amber-500 fill-amber-500" }),
                /* @__PURE__ */ jsx("strong", { className: "text-stone-700", children: course.rating }),
                " (",
                course.enrolledStudents,
                "+ trained)"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-stone-500", children: course.batchStarts })
            ] })
          ] })
        ]
      },
      course.id
    )) })
  ] }) });
};
export {
  CoursesCatalog
};
