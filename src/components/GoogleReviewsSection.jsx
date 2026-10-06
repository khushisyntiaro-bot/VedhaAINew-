import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";

const GoogleReviewsSection = () => {
  useEffect(() => {
    // Load Google Reviews Widget Script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/elfsight-app-google-reviews@latest/index.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-stone-50/50 border-b border-stone-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* Header */
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12 space-y-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-[#2c9320] font-medium", children: "What Our Students Say" }),
      /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-medium", children: "Real Reviews from Google" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm font-normal", children: "Live feedback from 500+ VedhaAI graduates — auto-updated from Google" })
    ] }),

    /* Google Reviews Widget - Auto-Updated */
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsx("div", { 
      className: "w-full max-w-4xl",
      "data-elfsight-app-87d7f5b7-2b8b-4a3b-9c6d-1a2b3c4d5e6f": true
    }) }),

    /* Fallback Link to Google Reviews */
    /* @__PURE__ */ jsxs("div", { className: "text-center p-6 rounded-2xl bg-white border border-stone-200", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-stone-600 mb-4 font-normal", children: "Can't see the reviews widget? Click below to visit our Google Business Profile." }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://share.google/2W8etcr1VHxq19cnO",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-base font-semibold transition-colors shadow-md cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("span", { children: "View All Reviews on Google Business" }),
            /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6v12h4m0-12v12m0-12l8-8m0 0l8 8m-8-8v12" }) })
          ]
        }
      )
    ] })
  ] }) });
};

export { GoogleReviewsSection };
