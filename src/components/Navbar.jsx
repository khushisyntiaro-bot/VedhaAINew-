import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  UserCheck,
  CalendarCheck
} from "lucide-react";
import vedhaLogo from "../assets/vedhaailogo.png";
const Navbar = ({
  currentPage,
  onNavigate,
  onOpenCounseling,
  onOpenBookDemo
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (pageId, param) => {
    onNavigate(pageId, param);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs(
    "header",
    {
      id: "main-navbar",
      className: `sticky top-0 left-0 right-0 z-40 transition-all duration-200 bg-white border-b ${isScrolled ? "border-stone-200 shadow-xs py-3" : "border-stone-100 py-3.5"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => handleNavClick("home"),
              className: "text-left group cursor-pointer",
              children: /* @__PURE__ */ jsx("img", { src: vedhaLogo, alt: "VedhaAI Logo", className: "h-12 object-contain" })
            }
          ),
          /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => handleNavClick("home"),
                className: `px-3.5 py-2 border-b-2 text-sm transition-all cursor-pointer font-bold ${currentPage === "home" ? "text-[#2c9320] border-[#2c9320] font-bold" : "text-stone-600 border-transparent hover:text-[#2c9320] hover:border-[#2c9320]"}`,
                children: "Home"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => handleNavClick("about"),
                className: `px-3.5 py-2 border-b-2 text-sm transition-all cursor-pointer font-bold ${currentPage === "about" ? "text-[#2c9320] border-[#2c9320] font-bold" : "text-stone-600 border-transparent hover:text-[#2c9320] hover:border-[#2c9320]"}`,
                children: "About Us"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => handleNavClick("courses"),
                className: `px-3.5 py-2 border-b-2 text-sm transition-all cursor-pointer font-bold ${currentPage === "courses" ? "text-[#2c9320] border-[#2c9320] font-bold" : "text-stone-600 border-transparent hover:text-[#2c9320] hover:border-[#2c9320]"}`,
                children: "Courses"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => handleNavClick("ai-programs"),
                className: `px-3.5 py-2 border-b-2 text-sm transition-all cursor-pointer font-bold ${currentPage === "ai-programs" ? "text-[#2c9320] border-[#2c9320] font-bold" : "text-stone-600 border-transparent hover:text-[#2c9320] hover:border-[#2c9320]"}`,
                children: "AI Programs"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => handleNavClick("internships"),
                className: `px-3.5 py-2 border-b-2 text-sm transition-all cursor-pointer font-bold ${currentPage === "internships" ? "text-[#2c9320] border-[#2c9320] font-bold" : "text-stone-600 border-transparent hover:text-[#2c9320] hover:border-[#2c9320]"}`,
                children: "Internship"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => onOpenCounseling(),
                className: "px-3.5 py-2 text-stone-700 hover:text-[#2c9320] hover:bg-[#2c9320]/5 rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer font-medium",
                children: [
                  /* @__PURE__ */ jsx(UserCheck, { className: "w-3.5 h-3.5 text-[#2c9320]" }),
                  /* @__PURE__ */ jsx("span", { children: "Counseling" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => onOpenBookDemo(),
                className: "px-4 py-2 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-xs cursor-pointer font-medium",
                children: [
                  /* @__PURE__ */ jsx(CalendarCheck, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsx("span", { children: "Book Free Demo" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:hidden flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setMobileMenuOpen(!mobileMenuOpen),
                className: "p-1.5 text-stone-800 hover:text-stone-950 cursor-pointer flex items-center justify-center focus:outline-none",
                "aria-label": "Toggle Navigation Menu",
                children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    className: "w-6 h-6",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ jsx("line", { x1: "4", y1: "8.5", x2: "20", y2: "8.5" }),
                      /* @__PURE__ */ jsx("line", { x1: "4", y1: "15.5", x2: "13", y2: "15.5" })
                    ]
                  }
                )
              }
            )
          ] })
        ] }) }),
        mobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 animate-in slide-in-from-top-3 duration-150", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleNavClick("home"),
                className: `w-full p-3 rounded-xl text-xs flex items-center justify-between text-left transition-colors font-normal ${currentPage === "home" ? "bg-[#2c9320]/10 text-[#2c9320] font-medium" : "text-stone-700 hover:bg-stone-50"}`,
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Home" }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5 text-stone-400" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleNavClick("about"),
                className: `w-full p-3 rounded-xl text-xs flex items-center justify-between text-left transition-colors font-normal ${currentPage === "about" ? "bg-[#2c9320]/10 text-[#2c9320] font-medium" : "text-stone-700 hover:bg-stone-50"}`,
                children: [
                  /* @__PURE__ */ jsx("span", { children: "About Us" }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5 text-stone-400" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleNavClick("courses"),
                className: `w-full p-3 rounded-xl text-xs flex items-center justify-between text-left transition-colors font-normal ${currentPage === "courses" ? "bg-[#2c9320]/10 text-[#2c9320] font-medium" : "text-stone-700 hover:bg-stone-50"}`,
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Courses" }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5 text-stone-400" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleNavClick("ai-programs"),
                className: `w-full p-3 rounded-xl text-xs flex items-center justify-between text-left transition-colors font-normal ${currentPage === "ai-programs" ? "bg-[#2c9320]/10 text-[#2c9320] font-medium" : "text-stone-700 hover:bg-stone-50"}`,
                children: [
                  /* @__PURE__ */ jsx("span", { children: "AI Programs" }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5 text-stone-400" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleNavClick("internships"),
                className: `w-full p-3 rounded-xl text-xs flex items-center justify-between text-left transition-colors font-normal ${currentPage === "internships" ? "bg-[#2c9320]/10 text-[#2c9320] font-medium" : "text-stone-700 hover:bg-stone-50"}`,
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Internship" }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5 text-stone-400" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-stone-100 space-y-2", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setMobileMenuOpen(false);
                  onOpenCounseling();
                },
                className: "w-full py-2 text-center bg-stone-50 border border-stone-200 text-stone-800 rounded-xl text-xs font-medium cursor-pointer",
                children: "Counseling"
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setMobileMenuOpen(false);
                  onOpenBookDemo();
                },
                className: "w-full py-2 text-center bg-[#2c9320] text-white rounded-xl text-xs font-medium cursor-pointer",
                children: "Book Live Demo"
              }
            )
          ] })
        ] })
      ]
    }
  );
};
export {
  Navbar
};
