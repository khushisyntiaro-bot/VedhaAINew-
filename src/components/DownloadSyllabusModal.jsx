import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import {
  X,
  Download,
  CheckCircle2,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { ALL_COURSES } from "../data/coursesData";

// Validation helper functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\D/g, ""));
};

const validateName = (name) => {
  return name.trim().length >= 2 && name.trim().length <= 100;
};

const DownloadSyllabusModal = ({
  isOpen,
  onClose,
  onShowToast,
  prefilledCourseId
}) => {
  const defaultCourse = ALL_COURSES.find((c) => c.id === prefilledCourseId) || ALL_COURSES[0];
  const [selectedCourseId, setSelectedCourseId] = useState(defaultCourse.id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Engineering Student / Fresher");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Validation state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (prefilledCourseId) {
      const found = ALL_COURSES.find((c) => c.id === prefilledCourseId);
      if (found) {
        setSelectedCourseId(found.id);
      }
    }
  }, [prefilledCourseId]);

  if (!isOpen) return null;

  const activeCourse = ALL_COURSES.find((c) => c.id === selectedCourseId) || ALL_COURSES[0];

  const validateForm = () => {
    const newErrors = {};

    if (!validateName(name)) {
      newErrors.name = "Name must be between 2 and 100 characters";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Enter a valid email address";
    }

    return newErrors;
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    const newErrors = validateForm();
    setErrors(newErrors);
  };

  const triggerFileDownload = () => {
    const syllabusText = `=====================================================
VEDHAAI IT ACADEMY - OFFICIAL COURSE CURRICULUM
Program: ${activeCourse.title}
Category: ${activeCourse.category}
Duration: ${activeCourse.duration} | Mode: ${activeCourse.mode}
Internship Role: ${activeCourse.internshipRole} (100% Guaranteed)
=====================================================

PROGRAM OVERVIEW:
${activeCourse.fullDesc}

PREREQUISITES:
${activeCourse.prerequisites}

CORE TECHNOLOGIES COVERED:
${activeCourse.technologies.join(", ")}

WEEK-BY-WEEK DETAILED SYLLABUS:
${activeCourse.syllabus.map((m) => `
[${m.weekOrPhase}] - ${m.title}
Topics:
${m.topics.map((t) => `  • ${t}`).join("\n")}
`).join("\n")}

COMMERCIAL CAPSTONE PROJECTS:
${activeCourse.capstoneProjects.map((p, idx) => `  ${idx + 1}. ${p}`).join("\n")}

CAREER OUTCOMES & TARGET ROLES:
${activeCourse.careerOutcomes.join(", ")}

=====================================================
CAMPUS & CONTACT INFORMATION:
VedhaAI Modern IT Classes
Website: https://vedhaai.in
Email: info@vedhaai.in | Phone: +91 88055 79 222
Address: ABC Junction Sector 26 Nigdi Pradhikaran Near Akurdi Railway Station Pune - 411044
=====================================================`;
    const blob = new Blob([syllabusText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `VedhaAI_${activeCourse.id}_Syllabus.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, phone: true, email: true });
      onShowToast("Please fix the errors in the form");
      return;
    }

    setIsSubmitted(true);
    triggerFileDownload();
    onShowToast(`Syllabus brochure for ${activeCourse.title} downloaded successfully!`);
    const msg = `*Syllabus Download Request - VedhaAI*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}${email ? `%0A*Email:* ${encodeURIComponent(email)}` : ""}%0A*Course:* ${encodeURIComponent(activeCourse.title)}%0A*Internship Role:* ${encodeURIComponent(activeCourse.internshipRole)}`;
    window.open(`https://wa.me/918805579222?text=${msg}`, "_blank");
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setErrors({});
    setTouched({});
    onClose();
  };

  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl border border-stone-200 w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-stone-100 bg-stone-50/80 flex items-start justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[#2c9320] text-white flex items-center justify-center font-medium", children: /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-xl text-stone-900 font-medium", children: "Download Course Syllabus" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-[#2c9320]/10 text-[#2c9320] font-medium border border-[#2c9320]/20", children: "PDF & Outline" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 font-normal mt-0.5", children: "Week-by-week curriculum, enterprise capstone specs & internship roadmap." })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "p-1.5 text-stone-400 hover:text-stone-900 transition-colors cursor-pointer",
          children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-6 overflow-y-auto", children: isSubmitted ? /* @__PURE__ */ jsxs("div", { className: "text-center py-6 space-y-4 animate-in fade-in duration-150", children: [
      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-[#2c9320]/10 text-[#2c9320] mx-auto flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-8 h-8 text-[#2c9320]" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-2xl text-stone-900 font-medium", children: "Syllabus Download Ready!" }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-normal", children: [
        "Thank you, ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900", children: name }),
        ". The detailed syllabus outline for ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900", children: activeCourse.title }),
        " has been downloaded. A copy has also been sent to your WhatsApp/Email."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-stone-50 border border-stone-200 max-w-sm mx-auto text-xs text-left space-y-2 font-normal", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-stone-500", children: [
          /* @__PURE__ */ jsx("span", { children: "Selected Program:" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900 truncate max-w-[180px]", children: activeCourse.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-stone-500", children: [
          /* @__PURE__ */ jsx("span", { children: "Guaranteed Role:" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-[#2c9320]", children: activeCourse.internshipRole })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-stone-500", children: [
          /* @__PURE__ */ jsx("span", { children: "WhatsApp Sent To:" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900", children: phone })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-3 flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: triggerFileDownload,
            className: "px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsx("span", { children: "Download Again" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleReset,
            className: "px-6 py-2.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-medium transition-colors cursor-pointer",
            children: "Done"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-[11px]", children: [
          /* @__PURE__ */ jsx("span", { className: "text-stone-500 font-normal", children: "Selected Syllabus:" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-[#2c9320]", children: "100% Internship Included" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "font-['Space_Grotesk'] text-sm text-stone-900 font-medium", children: activeCourse.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-stone-500 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Duration: ",
            activeCourse.duration
          ] }),
          /* @__PURE__ */ jsx("span", { children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Level: ",
            activeCourse.level
          ] }),
          /* @__PURE__ */ jsx("span", { children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            activeCourse.syllabus.length,
            " Phases / Modules"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "1. Select Course Program *" }),
        /* @__PURE__ */ jsx(
          "select",
          {
            value: selectedCourseId,
            onChange: (e) => setSelectedCourseId(e.target.value),
            className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors",
            children: ALL_COURSES.map((course) => /* @__PURE__ */ jsxs("option", { value: course.id, children: [
              course.title,
              " (",
              course.category,
              ")"
            ] }, course.id))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Your Full Name *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              required: true,
              value: name,
              onChange: (e) => setName(e.target.value),
              onBlur: () => handleBlur("name"),
              placeholder: "Enter your full name",
              className: `w-full px-3.5 py-2.5 bg-stone-50/50 border ${touched.name && errors.name ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#2c9320]"} focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors`
            }
          ),
          touched.name && errors.name && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 mt-1.5 text-red-600 text-xs", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsx("span", { children: errors.name })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "WhatsApp / Mobile Number *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              required: true,
              value: phone,
              onChange: (e) => setPhone(e.target.value),
              onBlur: () => handleBlur("phone"),
              placeholder: "Enter your contact number",
              className: `w-full px-3.5 py-2.5 bg-stone-50/50 border ${touched.phone && errors.phone ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#2c9320]"} focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors`
            }
          ),
          touched.phone && errors.phone && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 mt-1.5 text-red-600 text-xs", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsx("span", { children: errors.phone })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Email Address (to receive PDF brochure) *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            required: true,
            value: email,
            onChange: (e) => setEmail(e.target.value),
            onBlur: () => handleBlur("email"),
            placeholder: "Enter your email address",
            className: `w-full px-3.5 py-2.5 bg-stone-50/50 border ${touched.email && errors.email ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#2c9320]"} focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors`
          }
        ),
        touched.email && errors.email && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 mt-1.5 text-red-600 text-xs", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { children: errors.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Current Status / Background" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            value: experienceLevel,
            onChange: (e) => setExperienceLevel(e.target.value),
            className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors",
            children: [
              /* @__PURE__ */ jsx("option", { value: "Engineering Student / Fresher", children: "Engineering Student / Final Year Fresher" }),
              /* @__PURE__ */ jsx("option", { value: "Recent Graduate Looking for Job", children: "Recent Graduate Looking for Job" }),
              /* @__PURE__ */ jsx("option", { value: "Working IT Professional Upskilling", children: "Working IT Professional Upskilling" }),
              /* @__PURE__ */ jsx("option", { value: "Non-IT Background Career Switcher", children: "Non-IT Background Career Switcher" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          className: "w-full py-3.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs",
          children: [
            /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Download Complete Syllabus (Instant PDF)" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-[11px] text-stone-500 font-normal", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-[#2c9320]" }),
        /* @__PURE__ */ jsx("span", { children: "Instant direct file download + WhatsApp PDF delivery" })
      ] })
    ] }) })
  ] }) });
};
export {
  DownloadSyllabusModal
};
