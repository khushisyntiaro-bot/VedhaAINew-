import { useState, useEffect } from "react";
import {
  X,
  UserCheck,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Laptop,
  AlertCircle
} from "lucide-react";
import { ALL_COURSES } from "../data/coursesData";

// Validation helper functions
const validateEmail = (email) => {
  if (!email) return true; // Email is optional
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/; // 10-digit Indian phone number starting with 6-9
  return phoneRegex.test(phone.replace(/\D/g, ""));
};

const validateName = (name) => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

const CounselingModal = ({
  isOpen,
  onClose,
  onShowToast,
  prefilledCourse
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [courseInterest, setCourseInterest] = useState(prefilledCourse || "Core Java + Advanced Java");
  const [background, setBackground] = useState("Final Year Engineering / MCA");
  const [mode, setMode] = useState("online");
  const [preferredTime, setPreferredTime] = useState("Morning (10 AM - 1 PM)");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Validation state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (prefilledCourse) {
      setCourseInterest(prefilledCourse);
    }
  }, [prefilledCourse]);

  if (!isOpen) return null;

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!validateName(firstName)) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number (e.g., 9876543210)";
    }

    if (email && !validateEmail(email)) {
      newErrors.email = "Enter a valid email address";
    }

    return newErrors;
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    const newErrors = validateForm();
    setErrors(newErrors);
  };

  const fullName = `${firstName} ${lastName}`.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ firstName: true, phone: true, email: true });
      onShowToast && onShowToast("Please fix the errors in the form");
      return;
    }

    setIsSubmitted(true);
    onShowToast && onShowToast(`Counseling request received for ${fullName}! Forwarded to WhatsApp (+91 88055 79 222).`);
    const msg = `*New 1-on-1 Career Counseling Request - VedhaAI*%0A%0A*Name:* ${encodeURIComponent(fullName)}%0A*Phone:* ${encodeURIComponent(phone)}${email ? `%0A*Email:* ${encodeURIComponent(email)}` : ""}%0A*Course Interest:* ${encodeURIComponent(courseInterest)}%0A*Background:* ${encodeURIComponent(background)}%0A*Preferred Mode:* ${encodeURIComponent(mode)}%0A*Preferred Slot:* ${encodeURIComponent(preferredTime)}${message ? `%0A*Message:* ${encodeURIComponent(message)}` : ""}`;
    window.open(`https://wa.me/918805579222?text=${msg}`, "_blank");
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setErrors({});
    setTouched({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-stone-200 w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-stone-100 bg-stone-50/80 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center font-medium">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-['Space_Grotesk'] text-xl text-stone-900 font-medium">Free 1-on-1 Career Counseling</h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#2c9320]/10 text-[#2c9320] font-medium border border-[#2c9320]/20">100% Free</span>
              </div>
              <p className="text-xs text-stone-500 font-normal mt-0.5">Connect with our senior technical advisors for tailored roadmap & internship eligibility.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4 animate-in fade-in duration-150">
              <div className="w-14 h-14 rounded-full bg-[#2c9320]/10 text-[#2c9320] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#2c9320]" />
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl text-stone-900 font-medium">Counseling Session Scheduled!</h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-normal">
                Thank you, <span className="font-medium text-stone-900">{fullName}</span>. A senior career counselor has been assigned to review your profile for <span className="font-medium text-stone-900">{courseInterest}</span>.
              </p>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 max-w-sm mx-auto text-xs text-left space-y-1.5 font-normal">
                <div className="flex items-center justify-between text-stone-500">
                  <span>Contact Number:</span>
                  <span className="font-medium text-stone-900">{phone}</span>
                </div>
                <div className="flex items-center justify-between text-stone-500">
                  <span>Preferred Callback Time:</span>
                  <span className="font-medium text-stone-900">{preferredTime}</span>
                </div>
                <div className="flex items-center justify-between text-stone-500">
                  <span>Internship Evaluation:</span>
                  <span className="font-medium text-[#2c9320]">100% Guaranteed Track</span>
                </div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                <a
                  href={`https://wa.me/918805579222?text=*VedhaAI%20Counseling%20Follow-up*%0A*Name:*%20${encodeURIComponent(fullName)}%0A*Phone:*%20${encodeURIComponent(phone)}%0A*Interest:*%20${encodeURIComponent(courseInterest)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-semibold transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Chat on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name & Last Name (Side by Side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={() => handleBlur("firstName")}
                    placeholder="Enter first name"
                    className={`w-full px-3.5 py-2.5 bg-stone-50/50 border ${touched.firstName && errors.firstName ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#2c9320]"} focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors`}
                  />
                  {touched.firstName && errors.firstName && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-red-600 text-xs">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.firstName}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Contact & Email (Side by Side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">WhatsApp / Contact Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    placeholder="Enter contact number"
                    className={`w-full px-3.5 py-2.5 bg-stone-50/50 border ${touched.phone && errors.phone ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#2c9320]"} focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors`}
                  />
                  {touched.phone && errors.phone && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-red-600 text-xs">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="Enter email address"
                    className={`w-full px-3.5 py-2.5 bg-stone-50/50 border ${touched.email && errors.email ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#2c9320]"} focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors`}
                  />
                  {touched.email && errors.email && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-red-600 text-xs">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Primary Course of Interest */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Primary Course of Interest *</label>
                <select
                  value={courseInterest}
                  onChange={(e) => setCourseInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
                >
                  {ALL_COURSES.map((course) => (
                    <option key={course.id} value={course.title}>
                      {course.title} ({course.category})
                    </option>
                  ))}
                  <option value="College AI Summit (VedhaAI x VMANOUS)">College AI Summit (VedhaAI × VMANOUS Collaboration)</option>
                  <option value="Not Sure - Need Guidance">Not Sure - Need Expert Guidance</option>
                </select>
              </div>

              {/* Current Background & Preferred Callback Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Your Current Background</label>
                  <select
                    value={background}
                    onChange={(e) => setBackground(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
                  >
                    <option value="Final Year Engineering / MCA">Final Year B.Tech / BE / MCA</option>
                    <option value="Recent Graduate (Fresher)">Recent Graduate (Fresher)</option>
                    <option value="Non-Tech Career Switcher">Non-Tech Career Switcher</option>
                    <option value="Working Professional (Upskilling)">Working Professional (Upskilling)</option>
                    <option value="Diploma / BCA / B.Sc IT">Diploma / BCA / B.Sc IT</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Preferred Callback Time</label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                    <option value="Weekend Slot">Weekend Slot</option>
                  </select>
                </div>
              </div>

              {/* Preferred Learning Mode */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Preferred Learning Mode</label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setMode("online")}
                    className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer font-normal ${mode === "online" ? "border-[#2c9320] bg-[#2c9320]/5 text-stone-900" : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Laptop className={`w-3.5 h-3.5 ${mode === "online" ? "text-[#2c9320]" : "text-stone-400"}`} />
                      <span className="font-medium">Live Online Interactive</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("hybrid")}
                    className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer font-normal ${mode === "hybrid" ? "border-[#2c9320] bg-[#2c9320]/5 text-stone-900" : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Building2 className={`w-3.5 h-3.5 ${mode === "hybrid" ? "text-[#2c9320]" : "text-stone-400"}`} />
                      <span className="font-medium">Campus Coding Lab</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-[#2c9320] hover:bg-[#257d1b] active:scale-95 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Request Submit</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export {
  CounselingModal
};
