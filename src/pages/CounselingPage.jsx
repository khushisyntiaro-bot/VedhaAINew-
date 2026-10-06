import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import {
  UserCheck,
  CheckCircle2,
  Phone,
  Mail
} from "lucide-react";
import { ALL_COURSES } from "../data/coursesData";
const CounselingPage = ({ onShowToast, prefilledCourse }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [educationBackground, setEducationBackground] = useState("B.Tech / B.E (CS/IT)");
  const [interestedCourse, setInterestedCourse] = useState(prefilledCourse || "Core Java + Advanced Java");
  const [experienceLevel, setExperienceLevel] = useState("Fresh Graduate (2025/2026 Batch)");
  const [preferredSlot, setPreferredSlot] = useState("Morning (10:00 AM - 1:00 PM)");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      return;
    }
    setIsSubmitted(true);
    onShowToast(`Counseling session scheduled for ${fullName}! Forwarded to WhatsApp (+91 88055 79 222).`);
    const msg = `*New 1-on-1 Counseling Request - VedhaAI*%0A%0A*Name:* ${encodeURIComponent(fullName)}%0A*Phone:* ${encodeURIComponent(phone)}${email ? `%0A*Email:* ${encodeURIComponent(email)}` : ""}%0A*Course Interest:* ${encodeURIComponent(interestedCourse)}%0A*Education:* ${encodeURIComponent(educationBackground)}%0A*Experience Level:* ${encodeURIComponent(experienceLevel)}%0A*Preferred Slot:* ${encodeURIComponent(preferredSlot)}`;
    window.open(`https://wa.me/918805579222?text=${msg}`, "_blank");
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "pt-12 pb-12 bg-gradient-to-b from-[#2c9320]/10 via-[#2c9320]/5 to-white border-b border-stone-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-medium border border-[#2c9320]/20", children: [
        /* @__PURE__ */ jsx(UserCheck, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: "Personalized Career Guidance" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-medium tracking-tight", children: [
        "Free 1-on-1 Academic & ",
        /* @__PURE__ */ jsx("span", { className: "text-[#2c9320]", children: "Career Counseling" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm sm:text-base leading-relaxed font-normal", children: "Confused between Java Full Stack, Python with AI, or Data Analytics? Speak directly with our senior industry counselors to map your background to the right program and guaranteed internship." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl border border-stone-200 p-8 shadow-xs", children: isSubmitted ? /* @__PURE__ */ jsxs("div", { className: "text-center py-10 space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-[#2c9320]/10 text-[#2c9320] mx-auto flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-8 h-8 text-[#2c9320]" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-2xl text-stone-900 font-medium", children: "Counseling Request Confirmed!" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-normal", children: [
          "Thank you, ",
          /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900", children: fullName }),
          ". Our lead academic advisor has reserved your slot for ",
          /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900", children: preferredSlot }),
          ". We will call you on ",
          /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900", children: phone }),
          "."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsSubmitted(false),
            className: "px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-medium transition-colors",
            children: "Book Another Session"
          }
        ) })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-b border-stone-100 pb-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-xl text-stone-900 font-medium", children: "Schedule Your 15-Minute Consultation" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 font-normal", children: "100% Free \u2022 No obligation \u2022 Personalized career roadmap" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Full Name *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                required: true,
                value: fullName,
                onChange: (e) => setFullName(e.target.value),
                placeholder: "Enter your full name",
                className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Phone Number (with WhatsApp) *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                required: true,
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                placeholder: "Enter your contact number",
                className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "Enter your email address",
              className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Education Background" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: educationBackground,
                onChange: (e) => setEducationBackground(e.target.value),
                className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors",
                children: [
                  /* @__PURE__ */ jsx("option", { children: "B.Tech / B.E (CS/IT)" }),
                  /* @__PURE__ */ jsx("option", { children: "B.Tech / B.E (Non-CS)" }),
                  /* @__PURE__ */ jsx("option", { children: "BCA / MCA / B.Sc Computer Science" }),
                  /* @__PURE__ */ jsx("option", { children: "Non-IT Graduate / Career Transition" }),
                  /* @__PURE__ */ jsx("option", { children: "Working Professional Upskilling" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Program of Interest" }),
            /* @__PURE__ */ jsx(
              "select",
              {
                value: interestedCourse,
                onChange: (e) => setInterestedCourse(e.target.value),
                className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors",
                children: ALL_COURSES.map((c) => /* @__PURE__ */ jsx("option", { value: c.title, children: c.title }, c.id))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Current Experience Level" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: experienceLevel,
                onChange: (e) => setExperienceLevel(e.target.value),
                className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors",
                children: [
                  /* @__PURE__ */ jsx("option", { children: "Complete Beginner (No prior code)" }),
                  /* @__PURE__ */ jsx("option", { children: "Fresh Graduate (2025/2026 Batch)" }),
                  /* @__PURE__ */ jsx("option", { children: "Working in Non-Tech, switching to IT" }),
                  /* @__PURE__ */ jsx("option", { children: "Junior Developer upskilling to AI/Spring" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Preferred Call Time Slot" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: preferredSlot,
                onChange: (e) => setPreferredSlot(e.target.value),
                className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors",
                children: [
                  /* @__PURE__ */ jsx("option", { children: "Morning (10:00 AM - 1:00 PM)" }),
                  /* @__PURE__ */ jsx("option", { children: "Afternoon (1:00 PM - 5:00 PM)" }),
                  /* @__PURE__ */ jsx("option", { children: "Evening (5:00 PM - 8:00 PM)" }),
                  /* @__PURE__ */ jsx("option", { children: "Weekend Consultation" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            className: "w-full py-3.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs",
            children: [
              /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: "Confirm Free Counseling Call" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] text-stone-400 text-center font-normal", children: "We value your privacy. No spam calls. You will be matched with an academic specialist in your desired tech domain." })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-base text-stone-900 font-medium", children: "What to Expect in Your Session" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-stone-600 font-normal", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Evaluation of your current technical resume and GitHub portfolio." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Personalized advice on Java vs Python vs AI based on current hiring demand." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Clear breakdown of our 100% Guaranteed Internship contract and stipend rules." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Batch schedules, hybrid lab locations, and scholarship eligibility." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-3xl bg-[#2c9320]/5 border border-[#2c9320]/20 space-y-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-[#2c9320] font-medium", children: "Immediate Assistance" }),
          /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-sm text-stone-900 font-medium", children: "Need to speak right away?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 font-normal", children: "Call our admissions desk directly Monday - Saturday (9:00 AM to 8:00 PM IST)." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 text-xs font-medium text-stone-800 space-y-1.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-[#2c9320]" }),
              /* @__PURE__ */ jsx("a", { href: "tel:+918805579222", className: "hover:text-[#2c9320] transition-colors", children: "+91 88055 79 222" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-[#2c9320]" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:info@vedhaai.in", className: "hover:text-[#2c9320] transition-colors", children: "info@vedhaai.in" })
            ] })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
};
export {
  CounselingPage
};
