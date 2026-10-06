import { jsx, jsxs } from "react/jsx-runtime";
import {
  Building,
  Users,
  CheckCircle2,
  Terminal,
  ShieldCheck
} from "lucide-react";
const AboutUs = ({
  onOpenCounseling,
  onBookDemo
}) => {
  const values = [
    {
      title: "Zero Rote Learning",
      desc: "We replace outdated slideshows with production GitHub repos, continuous integration, and real bug triage."
    },
    {
      title: "1-on-1 Senior Code Reviews",
      desc: "Every assignment and capstone you write is critiqued by working tech leads to enforce industry clean code standards."
    },
    {
      title: "100% Guaranteed Internship",
      desc: "We do not abandon students after the last lecture. Our hiring partner pipeline directly places every eligible graduate."
    },
    {
      title: "Modern Tech Stack",
      desc: "From Java 21 virtual threads and Spring Boot 3 to Flutter, Python AI Agents, and Power BI DAX."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "about-us", className: "py-20 bg-white border-b border-stone-200", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider", children: [
        /* @__PURE__ */ jsx(Terminal, { className: "w-3.5 h-3.5 text-stone-900" }),
        /* @__PURE__ */ jsx("span", { children: "About VedhaAI" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight leading-snug", children: "Bridging the Chasm Between Textbook Coding and Commercial Software Engineering." }),
      /* @__PURE__ */ jsxs("p", { className: "text-stone-600 text-sm sm:text-base leading-relaxed", children: [
        "Founded with the singular conviction that tech education should lead to verifiable employment,",
        /* @__PURE__ */ jsx("strong", { className: "text-stone-900", children: " VedhaAI" }),
        " has transformed thousands of aspiring developers, non-tech graduates, and working professionals into job-ready software engineers, AI developers, and data analysts."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm sm:text-base leading-relaxed", children: "Instead of passive video lectures, our cohorts operate like modern engineering teams: with daily standups, sprint milestones, live coding labs, and direct 100% guaranteed internships across our vetted partner network." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2", children: values.map((v, i) => /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-stone-50 border border-stone-200/80", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-amber-500 shrink-0" }),
          /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-xs font-bold text-stone-900", children: v.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] text-stone-600 leading-relaxed", children: v.desc })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 pt-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: onBookDemo,
            className: "px-5 py-2.5 bg-stone-950 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer",
            children: "Experience a Free Demo Class"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: onOpenCounseling,
            className: "px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer",
            children: "Talk to Academic Counselor"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "p-7 rounded-3xl bg-stone-900 text-stone-100 border border-stone-800 space-y-6 shadow-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-amber-400 uppercase tracking-wider", children: "Our Impact at a Glance" }),
        /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-xl font-bold text-white", children: "Engineering Careers Built" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-stone-950/80 border border-stone-800 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold font-['Space_Grotesk'] text-amber-400", children: "10,000+" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-stone-400", children: "Alumni in Top Tech Roles" })
          ] }),
          /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-stone-600" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-stone-950/80 border border-stone-800 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold font-['Space_Grotesk'] text-white", children: "100%" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-stone-400", children: "Internship Placement Delivery" })
          ] }),
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-6 h-6 text-amber-400" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-stone-950/80 border border-stone-800 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold font-['Space_Grotesk'] text-emerald-400", children: "450+" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-stone-400", children: "Active Hiring Tech Firms" })
          ] }),
          /* @__PURE__ */ jsx(Building, { className: "w-6 h-6 text-emerald-500" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-stone-400 border-t border-stone-800 pt-4 leading-relaxed", children: [
        '"Our promise is simple: we provide rigorous instruction and stand behind our graduates with guaranteed internships."',
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-stone-200 font-semibold", children: "\u2014 VedhaAI Academic Board" })
      ] })
    ] }) })
  ] }) }) });
};
export {
  AboutUs
};
