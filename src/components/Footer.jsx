import { jsx, jsxs } from "react/jsx-runtime";
import { ALL_COURSES } from "../data/coursesData";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  CalendarCheck,
  UserCheck,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle
} from "lucide-react";
import vedhaLogo from "../assets/vedhaailogo.png";
const Footer = ({
  onNavigate,
  onSelectCourse,
  onOpenCounseling,
  onOpenBookDemo
}) => {
  const javaCourses = ALL_COURSES.filter((c) => c.category === "Java Ecosystem" || c.id === "java-with-ai");
  const pythonCourses = ALL_COURSES.filter((c) => c.category === "Python & AI" || c.id === "python-with-ai");
  const dataCourses = ALL_COURSES.filter((c) => c.category === "Data & Analytics");
  const handleCounseling = () => {
    if (onOpenCounseling) {
      onOpenCounseling();
    } else {
      onNavigate("counseling");
    }
  };
  const handleBookDemo = () => {
    if (onOpenBookDemo) {
      onOpenBookDemo();
    } else {
      onNavigate("book-demo");
    }
  };
  return /* @__PURE__ */ jsx("footer", { className: "bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8 mb-10 text-xs font-normal items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3.5 min-w-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => onNavigate("home"),
            className: "text-left cursor-pointer block",
            children: /* @__PURE__ */ jsx("img", { src: vedhaLogo, alt: "VedhaAI Logo", className: "h-16 object-contain" })
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 leading-relaxed text-xs font-normal", children: "Outcome-driven IT training academy equipping engineering graduates with verified commercial internships across Java, Python, GenAI, and Analytics." }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-800/80 text-stone-300 text-[11px] border border-stone-700", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-[#2c9320] shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: "Govt. Reg. ISO Certified" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3.5 min-w-0", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-xs text-white uppercase tracking-wider font-medium", children: "Navigation" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-stone-400 font-normal", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onNavigate("home"),
              className: "hover:text-[#2c9320] transition-colors cursor-pointer text-left block",
              children: "Home"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onNavigate("about"),
              className: "hover:text-[#2c9320] transition-colors cursor-pointer text-left block",
              children: "About Us"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onNavigate("courses"),
              className: "hover:text-[#2c9320] transition-colors cursor-pointer text-left block",
              children: "All 12 Courses"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onNavigate("ai-programs"),
              className: "hover:text-[#2c9320] transition-colors cursor-pointer text-left block",
              children: "AI Programs"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onNavigate("internships"),
              className: "hover:text-[#2c9320] transition-colors cursor-pointer text-left block",
              children: "Internship Assurance"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onNavigate("counseling"),
              className: "hover:text-[#2c9320] transition-colors cursor-pointer text-left block",
              children: "Career Counseling"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3.5 min-w-0", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-xs text-white uppercase tracking-wider font-medium", children: "Java Tracks" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-stone-400 font-normal", children: javaCourses.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              onSelectCourse(c);
              onNavigate("course-detail", c.id);
            },
            className: "hover:text-[#2c9320] transition-colors text-left line-clamp-1 block cursor-pointer",
            title: c.title,
            children: c.title
          }
        ) }, c.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3.5 min-w-0", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-xs text-white uppercase tracking-wider font-medium", children: "Python & AI Tracks" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-stone-400 font-normal", children: [
          pythonCourses.slice(0, 3).map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                onSelectCourse(c);
                onNavigate("course-detail", c.id);
              },
              className: "hover:text-[#2c9320] transition-colors text-left line-clamp-1 block cursor-pointer",
              title: c.title,
              children: c.title
            }
          ) }, c.id)),
          dataCourses.slice(0, 2).map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                onSelectCourse(c);
                onNavigate("course-detail", c.id);
              },
              className: "hover:text-[#2c9320] transition-colors text-left line-clamp-1 block cursor-pointer",
              title: c.title,
              children: c.title
            }
          ) }, c.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3.5 min-w-0", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-xs text-white uppercase tracking-wider font-medium", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2.5 text-stone-400 text-xs font-normal", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-[#2c9320] shrink-0" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:info@vedhaai.in",
                className: "hover:text-[#2c9320] transition-colors truncate",
                title: "info@vedhaai.in",
                children: "info@vedhaai.in"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-[#2c9320] shrink-0" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "tel:+918805579222",
                className: "hover:text-[#2c9320] transition-colors whitespace-nowrap",
                children: "+91 88055 79 222"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4 text-[#2c9320] shrink-0" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://wa.me/918805579222?text=Hello%20VedhaAI%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-[#2c9320] transition-colors whitespace-nowrap",
                children: "WhatsApp Us"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-[#2c9320] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { className: "leading-relaxed text-stone-400 text-[11px]", children: "ABC Junction Sector 26 Nigdi Pradhikaran Near Akurdi Railway Station Pune - 411044" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-2.5 space-y-2 border-t border-stone-800", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-stone-400 font-medium block", children: "Connect With Us" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.instagram.com/vedhaai/",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "VedhaAI on Instagram",
                className: "w-8 h-8 rounded-lg bg-stone-800 hover:bg-[#2c9320] text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-700 hover:border-[#2c9320]",
                children: /* @__PURE__ */ jsx(Instagram, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.facebook.com/people/Vedhaai/61585318344797/?rdid=qGybSHrwhfr79im6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D72h6Q3Tc%2F",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "VedhaAI on Facebook",
                className: "w-8 h-8 rounded-lg bg-stone-800 hover:bg-[#2c9320] text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-700 hover:border-[#2c9320]",
                children: /* @__PURE__ */ jsx(Facebook, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.linkedin.com/company/vedhaai-pvt-ltd/",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "VedhaAI on LinkedIn",
                className: "w-8 h-8 rounded-lg bg-stone-800 hover:bg-[#2c9320] text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-700 hover:border-[#2c9320]",
                children: /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://wa.me/918805579222?text=Hello%20VedhaAI%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "VedhaAI on WhatsApp",
                className: "w-8 h-8 rounded-lg bg-stone-800 hover:bg-green-500 text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-700 hover:border-green-500",
                children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-6 pb-2 border-t border-stone-800 flex items-center justify-center text-xs text-stone-500 font-normal", children: "ALL rights Reserved By VedhaAI" })
  ] }) });
};
export {
  Footer
};
