import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ALL_COURSES } from "../data/coursesData";
import {
  X,
  Compass,
  Sparkles,
  ArrowRight,
  RotateCcw,
  BookOpen,
  CalendarCheck
} from "lucide-react";
const CareerPathFinderModal = ({
  isOpen,
  onClose,
  onSelectCourse,
  onBookDemo
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    interest: "",
    experience: "",
    goal: ""
  });
  if (!isOpen) return null;
  const questions = [
    {
      title: "1. What area of technology excites you the most?",
      subtitle: "Choose your primary interest",
      key: "interest",
      options: [
        { label: "Backend Architecture & Systems (Enterprise Java, APIs, DBs)", value: "backend_java" },
        { label: "Generative AI, LLMs & Machine Learning (Python + AI)", value: "ai_python" },
        { label: "Data Analysis, SQL & Business Dashboards (Power BI, Excel)", value: "data_analytics" },
        { label: "Full-Stack & Mobile Apps (Java + Flutter)", value: "mobile_fullstack" }
      ]
    },
    {
      title: "2. What is your current coding background?",
      subtitle: "We cater from absolute zero to advanced",
      key: "experience",
      options: [
        { label: "Complete Beginner (No coding experience at all)", value: "beginner" },
        { label: "Know basic syntax (Loops, variables, basic logic)", value: "intermediate" },
        { label: "Working professional looking to switch/upskill to AI & Cloud", value: "upskill" }
      ]
    },
    {
      title: "3. What is your immediate career milestone?",
      subtitle: "Target outcome in the next 3 to 6 months",
      key: "goal",
      options: [
        { label: "Land a paid IT internship with guaranteed placement", value: "internship" },
        { label: "Transition from non-tech to full-time data / software engineer", value: "career_switch" },
        { label: "Crack Product Company SDE interviews (DSA + System Design)", value: "sde_interview" }
      ]
    }
  ];
  const handleSelectOption = (value) => {
    const currentKey = questions[step].key;
    const newAnswers = { ...answers, [currentKey]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length);
    }
  };
  const handleReset = () => {
    setStep(0);
    setAnswers({ interest: "", experience: "", goal: "" });
  };
  const getRecommendation = () => {
    if (answers.interest === "ai_python") {
      return ALL_COURSES.find((c) => c.id === "python-with-ai") || ALL_COURSES[10];
    }
    if (answers.interest === "data_analytics") {
      return ALL_COURSES.find((c) => c.id === "data-analysis") || ALL_COURSES[11];
    }
    if (answers.interest === "mobile_fullstack") {
      return ALL_COURSES.find((c) => c.id === "java-backend-flutter") || ALL_COURSES[3];
    }
    if (answers.goal === "sde_interview") {
      return ALL_COURSES.find((c) => c.id === "core-java-advanced-java-dsa-basic") || ALL_COURSES[2];
    }
    return ALL_COURSES.find((c) => c.id === "core-java-advanced-java") || ALL_COURSES[1];
  };
  const recommended = getRecommendation();
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl border border-stone-200 w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-stone-100 bg-stone-50/80 flex items-start justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[#2c9320] text-white flex items-center justify-center font-medium", children: /* @__PURE__ */ jsx(Compass, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-xl text-stone-900 font-medium", children: "VedhaAI Career Path Finder" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 font-normal", children: "Find the ideal track with 100% internship match in 3 questions." })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "p-1.5 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer",
          children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-6 overflow-y-auto", children: step < questions.length ? /* @__PURE__ */ jsxs("div", { className: "space-y-5 animate-in fade-in duration-150", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-stone-500 font-normal", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Question ",
          step + 1,
          " of ",
          questions.length
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-1.5", children: questions.map((_, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `w-6 h-1.5 rounded-full ${i <= step ? "bg-[#2c9320]" : "bg-stone-200"}`
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-lg text-stone-900 font-medium", children: questions[step].title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 mt-0.5 font-normal", children: questions[step].subtitle })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: questions[step].options.map((opt) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => handleSelectOption(opt.value),
          className: "w-full text-left p-3.5 rounded-xl border border-stone-200 hover:border-[#2c9320] hover:bg-[#2c9320]/5 transition-all text-xs font-normal text-stone-800 flex items-center justify-between group cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("span", { children: opt.label }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-stone-400 group-hover:text-[#2c9320] group-hover:translate-x-0.5 transition-all" })
          ]
        },
        opt.value
      )) })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 animate-in fade-in duration-200 py-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-medium", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: "Your Personalized Match" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-2xl bg-stone-50 border border-stone-200 text-left space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-stone-500 font-normal", children: "Recommended Track" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase px-2 py-0.5 rounded bg-[#2c9320]/10 text-[#2c9320] font-medium border border-[#2c9320]/20", children: "100% Guaranteed Internship" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-xl text-stone-950 font-medium", children: recommended.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: recommended.shortDesc }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs pt-1 font-normal", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-2.5 rounded-xl border border-stone-200/80", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-stone-400 block font-normal", children: "Duration" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-900 font-medium", children: recommended.duration })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-2.5 rounded-xl border border-stone-200/80", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-stone-400 block font-normal", children: "Placement Role" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#2c9320] font-medium", children: recommended.internshipRole })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 pt-2", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              onClose();
              onSelectCourse(recommended);
            },
            className: "w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsx("span", { children: "View Full Syllabus" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              onClose();
              onBookDemo(recommended.id);
            },
            className: "w-full py-2.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx(CalendarCheck, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsx("span", { children: "Book Free Demo For This" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: handleReset,
          className: "text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 mx-auto pt-2 cursor-pointer font-normal",
          children: [
            /* @__PURE__ */ jsx(RotateCcw, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsx("span", { children: "Retake Assessment" })
          ]
        }
      )
    ] }) })
  ] }) });
};
export {
  CareerPathFinderModal
};
