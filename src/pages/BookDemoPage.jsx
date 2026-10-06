import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Laptop,
  Building2
} from "lucide-react";
import { ALL_COURSES } from "../data/coursesData";
const BookDemoPage = ({ onShowToast, prefilledCourseId }) => {
  const defaultCourse = ALL_COURSES.find((c) => c.id === prefilledCourseId) || ALL_COURSES[0];
  const [selectedCourseId, setSelectedCourseId] = useState(defaultCourse.id);
  const [mode, setMode] = useState("online");
  const [selectedSlot, setSelectedSlot] = useState("Tomorrow, 7:00 PM - 8:30 PM (Evening Batch)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const activeCourse = ALL_COURSES.find((c) => c.id === selectedCourseId) || ALL_COURSES[0];
  const demoSlots = [
    { id: "1", time: "Tomorrow, 7:00 PM - 8:30 PM (Evening Batch)", seats: 3, label: "Fast Filling" },
    { id: "2", time: "This Saturday, 11:00 AM - 1:00 PM (Weekend Batch)", seats: 7, label: "Weekend Special" },
    { id: "3", time: "This Sunday, 4:00 PM - 6:00 PM (Weekend Batch)", seats: 5, label: "Popular" },
    { id: "4", time: "Next Tuesday, 8:00 AM - 9:30 AM (Morning Batch)", seats: 9, label: "Morning Slot" }
  ];
  const handleBooking = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setIsBooked(true);
    onShowToast(`Live demo class confirmed for ${name} in ${activeCourse.title}!`);
    const msg = `*New Live Demo Booking - VedhaAI*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}${email ? `%0A*Email:* ${encodeURIComponent(email)}` : ""}%0A*Course:* ${encodeURIComponent(activeCourse.title)}%0A*Preferred Slot:* ${encodeURIComponent(selectedSlot)}%0A*Mode:* ${encodeURIComponent(mode)}`;
    window.open(`https://wa.me/918805579222?text=${msg}`, "_blank");
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "pt-12 pb-12 bg-gradient-to-b from-[#2c9320]/10 via-[#2c9320]/5 to-white border-b border-stone-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-medium border border-[#2c9320]/20", children: [
        /* @__PURE__ */ jsx(CalendarCheck, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: "Experience Before You Enroll" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-medium tracking-tight", children: [
        "Book a Free Live ",
        /* @__PURE__ */ jsx("span", { className: "text-[#2c9320]", children: "Interactive Demo Class" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-sm sm:text-base leading-relaxed font-normal", children: "Experience the VedhaAI live coding dojo. Write code with our senior architects, inspect sample capstone repositories, and test-drive our 100% Guaranteed Internship framework." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl border border-stone-200 p-8 shadow-xs", children: isBooked ? /* @__PURE__ */ jsxs("div", { className: "text-center py-10 space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-[#2c9320]/10 text-[#2c9320] mx-auto flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-8 h-8 text-[#2c9320]" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-2xl text-stone-900 font-medium", children: "Demo Class Seat Reserved!" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-normal", children: [
          "Welcome, ",
          /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900", children: name }),
          ". You are registered for the ",
          /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900", children: activeCourse.title }),
          " live demo on ",
          /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900", children: selectedSlot }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-stone-50 border border-stone-200 max-w-sm mx-auto text-xs text-left space-y-1.5 font-normal", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-stone-500", children: [
            /* @__PURE__ */ jsx("span", { children: "Delivery Mode:" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900 uppercase", children: mode })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-stone-500", children: [
            /* @__PURE__ */ jsx("span", { children: "Meeting Platform:" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-[#2c9320]", children: "Google Meet HD Live" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-stone-500", children: [
            /* @__PURE__ */ jsx("span", { children: "Confirmation sent to:" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-900 truncate", children: phone })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsBooked(false),
            className: "px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-medium transition-colors cursor-pointer",
            children: "Book for Another Track"
          }
        ) })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleBooking, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-b border-stone-100 pb-3", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-['Space_Grotesk'] text-xl text-stone-900 font-medium", children: "Reserve Your Free Live Demo Seat" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 font-normal", children: "No credit card required. Live interactive class with code editor." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1.5", children: "1. Select Course Track *" }),
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
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1.5", children: "2. Select Attendance Mode" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setMode("online"),
                className: `p-3 rounded-xl border text-xs text-left transition-all cursor-pointer font-normal ${mode === "online" ? "border-[#2c9320] bg-[#2c9320]/5 text-stone-900" : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"}`,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsx(Laptop, { className: `w-4 h-4 ${mode === "online" ? "text-[#2c9320]" : "text-stone-400"}` }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Live Online Interactive" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] text-stone-500 block", children: "Join via Google Meet from anywhere" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setMode("hybrid"),
                className: `p-3 rounded-xl border text-xs text-left transition-all cursor-pointer font-normal ${mode === "hybrid" ? "border-[#2c9320] bg-[#2c9320]/5 text-stone-900" : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"}`,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsx(Building2, { className: `w-4 h-4 ${mode === "hybrid" ? "text-[#2c9320]" : "text-stone-400"}` }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Campus Coding Lab" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] text-stone-500 block", children: "Attend in-person at our IT hub lab" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1.5", children: "3. Choose Upcoming Demo Slot" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: demoSlots.map((slot) => {
            const isSelected = selectedSlot === slot.time;
            return /* @__PURE__ */ jsxs(
              "div",
              {
                onClick: () => setSelectedSlot(slot.time),
                className: `p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all text-xs font-normal ${isSelected ? "border-[#2c9320] bg-[#2c9320]/5 text-stone-900" : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"}`,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsx(Clock, { className: `w-3.5 h-3.5 ${isSelected ? "text-[#2c9320]" : "text-stone-400"}` }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: slot.time })
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 font-normal", children: [
                    slot.seats,
                    " seats remaining"
                  ] })
                ]
              },
              slot.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Your Full Name *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                required: true,
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: "e.g. Priya Sharma",
                className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "WhatsApp / Phone Number *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                required: true,
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                placeholder: "+91 98765 43210",
                className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-stone-700 mb-1", children: "Email Address (for Google Meet Link)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "you@gmail.com",
              className: "w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            className: "w-full py-3.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs",
            children: [
              /* @__PURE__ */ jsx(CalendarCheck, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: "Confirm Free Demo Seat" })
            ]
          }
        ) })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-3xl bg-white border border-stone-200 space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("span", { className: "text-xs px-2.5 py-0.5 rounded-full bg-[#2c9320]/10 text-[#2c9320] font-medium border border-[#2c9320]/20", children: "Selected Course Overview" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Space_Grotesk'] text-lg text-stone-900 font-medium", children: activeCourse.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-600 leading-relaxed font-normal", children: activeCourse.shortDesc }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t border-stone-100 space-y-2 text-xs text-stone-600 font-normal", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "Duration:" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-800", children: activeCourse.duration })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "Guaranteed Role:" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-[#2c9320]", children: activeCourse.internshipRole })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "Batch Schedule:" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-stone-800", children: activeCourse.batchStarts })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] text-stone-400 block mb-1 font-normal", children: "Tools & Frameworks:" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: activeCourse.technologies.slice(0, 5).map((t, idx) => /* @__PURE__ */ jsx("span", { className: "text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-normal", children: t }, idx)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-3 text-xs text-stone-600 font-normal", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-['Space_Grotesk'] text-sm text-stone-900 font-medium", children: "Live Demo Session Agenda (90 Mins)" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-[#2c9320] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "00-20 Min:" }),
                " Core concept architectural breakdown & live code demo."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-[#2c9320] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "20-60 Min:" }),
                " Hands-on live project building with instructor."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-[#2c9320] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "60-75 Min:" }),
                " Commercial capstone repository walkthrough & PR workflow."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-[#2c9320] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "75-90 Min:" }),
                " Open Q&A and 100% Internship policy briefing."
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
};
export {
  BookDemoPage
};
