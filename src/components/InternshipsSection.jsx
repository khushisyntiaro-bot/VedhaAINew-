import { jsx, jsxs } from "react/jsx-runtime";
import { HIRING_PARTNERS } from "../data/coursesData";
import {
  ShieldCheck,
  Briefcase,
  CheckCircle2,
  Award,
  FileCheck,
  DollarSign
} from "lucide-react";
const InternshipsSection = ({
  onOpenCounseling,
  onBookDemo
}) => {
  const steps = [
    {
      step: "01",
      title: "Deep-Tech Training & Live Labs",
      description: "Master core frameworks, OOPs architecture, clean coding practices, and unit testing under senior mentor guidance."
    },
    {
      step: "02",
      title: "Industry-Grade Capstone Deployment",
      description: "Build and deploy full-stack or AI systems with Git version control, Docker containers, and rigorous peer code reviews."
    },
    {
      step: "03",
      title: "100% Guaranteed Internship Placement",
      description: "Receive direct offer letters with partner tech companies or startups. Earn live project experience and stipend eligibility."
    }
  ];
  const benefits = [
    {
      icon: /* @__PURE__ */ jsx(Briefcase, { className: "w-5 h-5 text-amber-500" }),
      title: "Official Internship Offer Letter",
      desc: "Signed appointment letter from verified tech organizations to boost your CV from day one."
    },
    {
      icon: /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-emerald-500" }),
      title: "Verifiable Experience Certificate",
      desc: "Dual credentials validating your technical mastery and commercial project contributions."
    },
    {
      icon: /* @__PURE__ */ jsx(DollarSign, { className: "w-5 h-5 text-sky-500" }),
      title: "Paid Stipend Opportunities",
      desc: "Top-performing candidates unlock stipends ranging from \u20B915,000 to \u20B935,000/month."
    },
    {
      icon: /* @__PURE__ */ jsx(FileCheck, { className: "w-5 h-5 text-purple-500" }),
      title: "1-on-1 Resume & LinkedIn Audit",
      desc: "Personalized profile restructuring, GitHub portfolio spotlighting, and mock interview rounds."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "internships", className: "py-20 bg-stone-50 border-b border-stone-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mb-14 space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/20 text-amber-900 border border-amber-400/40 text-xs font-bold uppercase tracking-wider", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-amber-700" }),
        /* @__PURE__ */ jsx("span", { children: "100% Guaranteed Placement Guarantee" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight", children: "How Our 100% Internship Program Works" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm sm:text-base leading-relaxed", children: "At VedhaAI, we reject theoretical learning without outcome. Every student who completes their track is guaranteed an internship placement to bridge the bridge from student to working professional." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-14", children: steps.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative group hover:border-stone-400 transition-colors",
        children: [
          /* @__PURE__ */ jsx("div", { className: "font-['Space_Grotesk'] text-4xl font-extrabold text-stone-200 group-hover:text-amber-400 transition-colors mb-3", children: item.step }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base font-bold text-stone-900 mb-2", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed", children: item.description })
        ]
      },
      item.step
    )) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-3", children: benefit.icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-sm font-bold text-stone-900 mb-1", children: benefit.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed", children: benefit.desc })
          ] })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-stone-900 text-stone-100 p-8 sm:p-10 rounded-3xl border border-stone-800 shadow-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-stone-800 pb-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-amber-400 uppercase tracking-wider mb-1", children: "Verified Recruiter Network" }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-2xl font-bold text-white", children: "450+ Active Hiring & Internship Partners" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: onOpenCounseling,
            className: "px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl transition-all self-start md:self-auto cursor-pointer",
            children: "Get Placement Counseling"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3", children: HIRING_PARTNERS.map((partner) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-stone-950/70 border border-stone-800 p-3.5 rounded-xl flex flex-col justify-between hover:border-stone-700 transition-colors",
          children: [
            /* @__PURE__ */ jsx("div", { className: "font-['Space_Grotesk'] font-bold text-sm text-stone-200", children: partner.name }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-[11px] text-stone-400 mt-2", children: [
              /* @__PURE__ */ jsx("span", { className: "truncate", children: partner.category }),
              /* @__PURE__ */ jsx("span", { className: "text-emerald-400 font-mono font-medium", children: partner.hiresCount })
            ] })
          ]
        },
        partner.name
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: "Direct interview pipelines for high-demand Java, Python, AI & Data Analyst roles" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-stone-500 font-mono", children: "Average placement turnaround: 14-21 days post-completion" })
      ] })
    ] })
  ] }) });
};
export {
  InternshipsSection
};
