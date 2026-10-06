import { useState, useEffect } from "react";
import {
  X,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Laptop,
  Building2,
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
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\D/g, ""));
};

const validateName = (name) => {
  return name.trim().length >= 2 && name.trim().length <= 100;
};

const BookDemoModal = ({
  isOpen,
  onClose,
  onShowToast,
  prefilledCourseId
}) => {
  const defaultCourse = ALL_COURSES.find((c) => c.id === prefilledCourseId) || ALL_COURSES[0];
  const [selectedCourseId, setSelectedCourseId] = useState(defaultCourse.id);
  const [mode, setMode] = useState("online");
  const [selectedSlot, setSelectedSlot] = useState("Tomorrow, 7:00 PM - 8:30 PM (Evening Batch)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  
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
  const demoSlots = [
    { id: "1", time: "Monday, 8:00 AM - 9:30 AM (Morning Batch)", seats: 3, label: "Morning" },
    { id: "2", time: "Tuesday, 7:00 PM - 8:30 PM (Evening Batch)", seats: 7, label: "Evening" },
    { id: "3", time: "Wednesday, 8:00 AM - 9:30 AM (Morning Batch)", seats: 6, label: "Morning" },
    { id: "4", time: "Thursday, 7:00 PM - 8:30 PM (Evening Batch)", seats: 5, label: "Evening" },
    { id: "5", time: "Friday, 8:00 AM - 9:30 AM (Morning Batch)", seats: 8, label: "Morning" }
  ];

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

  const handleBooking = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, phone: true, email: true });
      onShowToast && onShowToast("Please fix the errors in the form");
      return;
    }

    setIsBooked(true);
    onShowToast && onShowToast(`Live demo class seat confirmed for ${name} in ${activeCourse.title}!`);
    const msg = `*New Live Demo Booking - VedhaAI*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}${email ? `%0A*Email:* ${encodeURIComponent(email)}` : ""}%0A*Course:* ${encodeURIComponent(activeCourse.title)}%0A*Preferred Slot:* ${encodeURIComponent(selectedSlot)}%0A*Mode:* ${encodeURIComponent(mode)}`;
    window.open(`https://wa.me/918805579222?text=${msg}`, "_blank");
  };

  const handleReset = () => {
    setIsBooked(false);
    setName("");
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
            <div className="w-10 h-10 rounded-xl bg-[#2c9320] text-white flex items-center justify-center font-medium">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-['Space_Grotesk'] text-xl text-stone-900 font-medium">Book a Free Live Demo Class</h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#2c9320]/10 text-[#2c9320] font-medium border border-[#2c9320]/20">90 Mins Live</span>
              </div>
              <p className="text-xs text-stone-500 font-normal mt-0.5">Code live with senior architects and experience our hands-on dojo.</p>
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
        <div className="p-6 overflow-y-auto flex-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {isBooked ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#2c9320]/10 text-[#2c9320] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#2c9320]" />
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl text-stone-900 font-medium">Demo Class Seat Reserved!</h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-normal">
                Welcome, <span className="font-medium text-stone-900">{name}</span>. You are registered for the <span className="font-medium text-stone-900">{activeCourse.title}</span> demo on <span className="font-medium text-stone-900">{selectedSlot}</span>.
              </p>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 max-w-sm mx-auto text-xs text-left space-y-1.5 font-normal">
                <div className="flex items-center justify-between text-stone-500">
                  <span>Delivery Mode:</span>
                  <span className="font-medium text-stone-900 uppercase">{mode}</span>
                </div>
                <div className="flex items-center justify-between text-stone-500">
                  <span>Meeting Platform:</span>
                  <span className="font-medium text-[#2c9320]">Google Meet HD Live</span>
                </div>
                <div className="flex items-center justify-between text-stone-500">
                  <span>Confirmation sent to WhatsApp:</span>
                  <span className="font-medium text-stone-900 truncate">{phone}</span>
                </div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                <a
                  href={`https://wa.me/918805579222?text=*VedhaAI%20Demo%20Follow-up*%0A*Name:*%20${encodeURIComponent(name)}%0A*Course:*%20${encodeURIComponent(activeCourse.title)}%0A*Phone:*%20${encodeURIComponent(phone)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-semibold transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Open WhatsApp Chat
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
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-stone-500 font-normal">Active Course Track:</span>
                  <span className="font-medium text-[#2c9320]">100% Guaranteed Internship</span>
                </div>
                <div className="font-['Space_Grotesk'] text-sm text-stone-900 font-medium">{activeCourse.title}</div>
                <div className="text-[11px] text-stone-500 flex items-center gap-3">
                  <span>Duration: {activeCourse.duration}</span>
                  <span>•</span>
                  <span>Batch: {activeCourse.batchStarts}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">1. Select Track / Program *</label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
                >
                  {ALL_COURSES.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">2. Select Attendance Mode</label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setMode("online")}
                    className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer font-normal ${mode === "online" ? "border-[#2c9320] bg-[#2c9320]/5 text-stone-900" : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"}`}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Laptop className={`w-3.5 h-3.5 ${mode === "online" ? "text-[#2c9320]" : "text-stone-400"}`} />
                      <span className="font-medium">Live Online</span>
                    </div>
                    <span className="text-[10px] text-stone-500 block">Join from home via Google Meet</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("hybrid")}
                    className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer font-normal ${mode === "hybrid" ? "border-[#2c9320] bg-[#2c9320]/5 text-stone-900" : "border-stone-200 bg-white hover:bg-stone-50 text-stone-600"}`}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Building2 className={`w-3.5 h-3.5 ${mode === "hybrid" ? "text-[#2c9320]" : "text-stone-400"}`} />
                      <span className="font-medium">Campus Lab</span>
                    </div>
                    <span className="text-[10px] text-stone-500 block">In-person IT corridor lab</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">3. Choose Upcoming Demo Slot</label>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 focus:border-[#2c9320] focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors"
                >
                  {demoSlots.map((slot) => (
                    <option key={slot.id} value={slot.time}>
                      {slot.time}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => handleBlur("name")}
                    placeholder="Enter your full name"
                    className={`w-full px-3.5 py-2.5 bg-stone-50/50 border ${touched.name && errors.name ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#2c9320]"} focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors`}
                  />
                  {touched.name && errors.name && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-red-600 text-xs">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    placeholder="Enter your contact number"
                    className={`w-full px-3.5 py-2.5 bg-stone-50/50 border ${touched.phone && errors.phone ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#2c9320]"} focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors`}
                  />
                  {touched.phone && errors.phone && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-red-600 text-xs">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Email (for Google Meet Link)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="Enter your email address"
                  className={`w-full px-3.5 py-2.5 bg-stone-50/50 border ${touched.email && errors.email ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#2c9320]"} focus:bg-white rounded-xl text-xs text-stone-900 outline-none transition-colors`}
                />
                {touched.email && errors.email && (
                  <div className="flex items-center gap-1.5 mt-1.5 text-red-600 text-xs">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-[#2c9320] hover:bg-[#257d1b] active:scale-95 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Confirm Free Demo Seat</span>
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
  BookDemoModal
};
