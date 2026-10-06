import { useState } from "react";
import { X, User, Mail, BookOpen, ChevronDown, AlertCircle, CheckCircle2 } from "lucide-react";
import vedhaLogo from "../assets/vedhaailogo.png";

const LOOKING_FOR = [
  "Java / Full Stack Development",
  "Python / Data Science / ML",
  "AI & Generative AI",
  "DevOps & Cloud",
  "Testing & QA",
  "College AI Summit",
  "Internship Program",
  "Not Sure – Need Guidance"
];

const EnquiryModal = ({ isOpen, onClose, onShowToast }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  if (!isOpen) return null;

  // ── Validators ──
  const validators = {
    name: (v) => !v.trim() ? "Full name is required" : v.trim().length < 2 ? "Name must be at least 2 characters" : "",
    email: (v) => !v.trim() ? "Email address is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Enter a valid email address" : "",
    mobile: (v) => {
      const digits = v.replace(/\D/g, "");
      if (!v.trim()) return "Mobile number is required";
      if (digits.length < 10) return "Enter a valid 10-digit mobile number";
      if (digits.length > 10) return "Mobile number cannot exceed 10 digits";
      return "";
    },
    lookingFor: (v) => !v ? "Please select what you're looking for" : "",
  };

  const validateAll = () => {
    return {
      name: validators.name(name),
      email: validators.email(email),
      mobile: validators.mobile(mobile),
      lookingFor: validators.lookingFor(lookingFor),
    };
  };

  const handleBlur = (field, value) => {
    setTouched((p) => ({ ...p, [field]: true }));
    setErrors((p) => ({ ...p, [field]: validators[field] ? validators[field](value) : "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, mobile: true, lookingFor: true };
    setTouched(allTouched);
    const errs = validateAll();
    const hasErrors = Object.values(errs).some(Boolean);
    setErrors(errs);
    if (hasErrors) return;
    setIsSubmitted(true);
    onShowToast && onShowToast(`Thank you ${name}! Enquiry forwarded to WhatsApp (+91 8805579222).`);
    const textMsg = `*New Admission / Track Enquiry - VedhaAI*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Mobile:* ${encodeURIComponent(mobile)}%0A*Email:* ${encodeURIComponent(email)}${location ? `%0A*City:* ${encodeURIComponent(location)}` : ""}%0A*Looking For:* ${encodeURIComponent(lookingFor)}`;
    window.open(`https://wa.me/918805579222?text=${textMsg}`, "_blank");
  };

  const handleClose = () => {
    setName(""); setEmail(""); setMobile("");
    setLocation(""); setLookingFor("");
    setErrors({}); setTouched({});
    setIsSubmitted(false);
    onClose();
  };

  // ── Helpers ──
  const err = (field) => touched[field] && errors[field];

  const inputCls = (field) =>
    `w-full pl-9 pr-9 py-2.5 rounded-xl border text-sm outline-none transition-all bg-white text-stone-800 placeholder-stone-400 ${
      err(field)
        ? "border-red-400 focus:border-red-500 bg-red-50/30"
        : touched[field] && !errors[field] && (field === "name" || field === "email" || field === "mobile")
        ? "border-green-400 focus:border-green-500"
        : "border-stone-200 focus:border-[#2c9320] focus:ring-1 focus:ring-[#2c9320]/20"
    }`;

  const selectCls = (field) =>
    `w-full pl-9 pr-9 py-2.5 rounded-xl border text-sm outline-none transition-all bg-white appearance-none cursor-pointer ${
      err(field)
        ? "border-red-400 focus:border-red-500 bg-red-50/30 text-stone-700"
        : "border-stone-200 focus:border-[#2c9320] focus:ring-1 focus:ring-[#2c9320]/20 text-stone-700"
    }`;

  // Inline status icon (right side of input)
  const StatusIcon = ({ field }) => {
    if (!touched[field]) return null;
    if (errors[field]) return (
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400 pointer-events-none">
        <AlertCircle className="w-4 h-4" />
      </span>
    );
    if (field === "name" || field === "email" || field === "mobile") return (
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 pointer-events-none">
        <CheckCircle2 className="w-4 h-4" />
      </span>
    );
    return null;
  };

  const ErrorMsg = ({ field }) =>
    err(field) ? (
      <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1 pl-1 animate-in slide-in-from-top-1 duration-150">
        <AlertCircle className="w-3 h-3 shrink-0" />
        {errors[field]}
      </p>
    ) : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[340px] sm:max-w-[360px] overflow-hidden"
        style={{ maxHeight: "94vh", overflowY: "auto" }}
      >
        {/* ── Close Button ── */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/80 hover:bg-white text-stone-500 hover:text-stone-900 flex items-center justify-center shadow-xs transition-all cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Top Banner ── */}
        <div
          className="text-center pt-5 pb-3 px-6"
          style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" }}
        >
          <img src={vedhaLogo} alt="VedhaAI Logo" className="h-10 sm:h-11 w-auto object-contain mx-auto" />
        </div>

        {/* ── Body ── */}
        <div className="p-5 sm:p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#2c9320]/10 flex items-center justify-center mx-auto text-[#2c9320]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">Query Submitted!</h3>
              <p className="text-xs text-stone-600">Your details have been forwarded to our admissions desk on WhatsApp (+91 88055 79 222).</p>
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={`https://wa.me/918805579222?text=*VedhaAI%20Enquiry%20Follow-up*%0A*Name:*%20${encodeURIComponent(name)}%0A*Mobile:*%20${encodeURIComponent(mobile)}%0A*Course:*%20${encodeURIComponent(lookingFor)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  Chat with Us on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3">

              {/* ── Name ── */}
              <div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    id="enq-name"
                    placeholder="Name *"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (touched.name) setErrors((p) => ({ ...p, name: validators.name(e.target.value) }));
                    }}
                    onBlur={() => handleBlur("name", name)}
                    className={inputCls("name")}
                  />
                  <StatusIcon field="name" />
                </div>
                <ErrorMsg field="name" />
              </div>

              {/* ── Email ── */}
              <div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    id="enq-email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (touched.email) setErrors((p) => ({ ...p, email: validators.email(e.target.value) }));
                    }}
                    onBlur={() => handleBlur("email", email)}
                    className={inputCls("email")}
                  />
                  <StatusIcon field="email" />
                </div>
                <ErrorMsg field="email" />
              </div>

              {/* ── Mobile ── */}
              <div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 text-xs select-none pointer-events-none flex items-center gap-0.5">
                    🇮🇳 <span className="ml-0.5 font-medium">+91</span>
                  </span>
                  <input
                    type="tel"
                    id="enq-mobile"
                    placeholder="Mobile No. *"
                    value={mobile}
                    maxLength={10}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setMobile(v);
                      if (touched.mobile) setErrors((p) => ({ ...p, mobile: validators.mobile(v) }));
                    }}
                    onBlur={() => handleBlur("mobile", mobile)}
                    className={`w-full pl-14 pr-9 py-2.5 rounded-xl border text-sm outline-none transition-all bg-white text-stone-800 placeholder-stone-400 ${
                      err("mobile")
                        ? "border-red-400 focus:border-red-500 bg-red-50/30"
                        : touched.mobile && !errors.mobile
                        ? "border-green-400 focus:border-green-500"
                        : "border-stone-200 focus:border-[#2c9320] focus:ring-1 focus:ring-[#2c9320]/20"
                    }`}
                  />
                  {touched.mobile && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      {errors.mobile
                        ? <AlertCircle className="w-4 h-4 text-red-400" />
                        : <CheckCircle2 className="w-4 h-4 text-green-500" />}
                    </span>
                  )}
                </div>
                <ErrorMsg field="mobile" />
              </div>

              {/* ── Location (optional) ── */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                  <BookOpen className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Location (City)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-200 focus:border-[#2c9320] focus:ring-1 focus:ring-[#2c9320]/20 text-sm outline-none transition-all bg-white text-stone-800 placeholder-stone-400"
                />
              </div>

              {/* ── Looking For ── */}
              <div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <select
                    value={lookingFor}
                    onChange={(e) => {
                      setLookingFor(e.target.value);
                      if (touched.lookingFor) setErrors((p) => ({ ...p, lookingFor: validators.lookingFor(e.target.value) }));
                    }}
                    onBlur={() => handleBlur("lookingFor", lookingFor)}
                    className={selectCls("lookingFor")}
                  >
                    <option value="">Looking for? *</option>
                    {LOOKING_FOR.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </div>
                <ErrorMsg field="lookingFor" />
              </div>

              {/* ── Submit ── */}
              <div className="pt-1.5">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#2c9320] hover:bg-[#257d1b] active:scale-[0.99] text-white rounded-xl text-sm font-bold tracking-wider transition-all cursor-pointer shadow-md uppercase"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export { EnquiryModal };
