import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { updatePageMetadata, addStructuredData, generateCourseSchema, generateFAQSchema, generateBreadcrumbSchema } from "./utils/seoHelper";
import { PAGE_METADATA, COURSE_METADATA } from "./data/pageMetadata";

import { MessageCircle } from "lucide-react";
import WhatsAppFloating from "./components/WhatsAppFloating";
import { ALL_COURSES } from "./data/coursesData";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { GoogleReviewsSection } from "./components/GoogleReviewsSection";
import { ToastNotification } from "./components/ToastNotification";
import { CounselingModal } from "./components/CounselingModal";
import { EnquiryModal } from "./components/EnquiryModal";
import { BookDemoModal } from "./components/BookDemoModal";
import { DownloadSyllabusModal } from "./components/DownloadSyllabusModal";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CoursesPage } from "./pages/CoursesPage";
import { AIProgramsPage } from "./pages/AIProgramsPage";
import { InternshipsPage } from "./pages/InternshipsPage";
import { CounselingPage } from "./pages/CounselingPage";
import { BookDemoPage } from "./pages/BookDemoPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCourseId, setSelectedCourseId] = useState(ALL_COURSES[0].id);
  const [aiProgramFilter, setAiProgramFilter] = useState("all");
  const [isCounselingModalOpen, setIsCounselingModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(true);
  const [isBookDemoModalOpen, setIsBookDemoModalOpen] = useState(false);
  const [isDownloadSyllabusModalOpen, setIsDownloadSyllabusModalOpen] = useState(false);
  const [modalCounselingCourse, setModalCounselingCourse] = useState(void 0);
  const [modalDemoCourseId, setModalDemoCourseId] = useState(void 0);
  const [modalSyllabusCourseId, setModalSyllabusCourseId] = useState(void 0);
  const [toastMessage, setToastMessage] = useState(null);
  useEffect(() => {
    const handlePathChange = () => {
      const hash = window.location.pathname.replace(/^\/+/, "");
      if (!hash) {
        setCurrentPage("home");
        return;
      }
      if (hash.startsWith("course/")) {
        const cId = hash.replace("course/", "");
        const exists = ALL_COURSES.find((c) => c.id === cId);
        if (exists) {
          setSelectedCourseId(cId);
          setCurrentPage("course-detail");
        }
      } else if (hash === "ai-programs-genai") {
        setAiProgramFilter("genai-agentic");
        setCurrentPage("ai-programs");
      } else if (hash === "ai-programs-ml") {
        setAiProgramFilter("ai-ml");
        setCurrentPage("ai-programs");
      } else if (["about", "courses", "ai-programs", "internships", "counseling", "book-demo"].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("home");
      }
    };
    handlePathChange();
    window.addEventListener("popstate", handlePathChange);
    return () => window.removeEventListener("popstate", handlePathChange);
  }, []);
  const handleNavigate = (page, param) => {
    if (page === "course-detail") {
      const cId = typeof param === "string" ? param : param?.id || ALL_COURSES[0].id;
      setSelectedCourseId(cId);
      window.history.pushState({}, "", `/course/${cId}`); window.dispatchEvent(new Event("popstate"));
    } else if (page === "ai-programs") {
      if (param === "genai-agentic") {
        setAiProgramFilter("genai-agentic");
        window.history.pushState({}, "", "/ai-programs-genai"); window.dispatchEvent(new Event("popstate"));
      } else if (param === "ai-ml") {
        setAiProgramFilter("ai-ml");
        window.history.pushState({}, "", "/ai-programs-ml"); window.dispatchEvent(new Event("popstate"));
      } else {
        setAiProgramFilter("all");
        window.history.pushState({}, "", "/ai-programs"); window.dispatchEvent(new Event("popstate"));
      }
    } else if (page === "counseling") {
      handleOpenCounseling(typeof param === "string" ? param : void 0);
      return;
    } else if (page === "book-demo") {
      handleOpenBookDemo(typeof param === "string" ? param : void 0);
      return;
    } else {
      window.history.pushState({}, "", `/${page === "home" ? "" : page}`); window.dispatchEvent(new Event("popstate"));
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleOpenCounseling = (course) => {
    setModalCounselingCourse(course);
    setIsCounselingModalOpen(true);
  };
  const handleOpenBookDemo = (courseId) => {
    setModalDemoCourseId(courseId);
    setIsBookDemoModalOpen(true);
  };
  const handleOpenDownloadSyllabus = (courseId) => {
    setModalSyllabusCourseId(courseId);
    setIsDownloadSyllabusModalOpen(true);
  };
  const handleSelectCourse = (course) => {
    setSelectedCourseId(course.id);
  };

  useEffect(() => {
    let meta;
    if (currentPage === "course-detail") {
      meta = COURSE_METADATA[selectedCourseId];
      if (meta) {
        meta = { ...meta, canonical: "https://vedhaai.in/course/" + selectedCourseId };
      }
    } else {
      const pageKey = currentPage === "ai-programs" ? "aiPrograms" : 
                      currentPage === "book-demo" ? "bookDemo" : 
                      currentPage === "course-detail" ? "courseDetail" : currentPage;
      meta = PAGE_METADATA[pageKey];
      if (meta && currentPage !== "home") {
        meta = { ...meta, canonical: "https://vedhaai.in/" + currentPage };
      }
    }
    if (meta) {
      updatePageMetadata(meta);
    }

    if (currentPage === "course-detail") {
      const course = ALL_COURSES.find(c => c.id === selectedCourseId);
      if (course) {
        addStructuredData(generateCourseSchema(course), "course-schema");
        const breadcrumbs = [
          { name: "Home", url: "https://vedhaai.in/" },
          { name: "Courses", url: "https://vedhaai.in/courses" },
          { name: course.title, url: "https://vedhaai.in/course/" + course.id }
        ];
        addStructuredData(generateBreadcrumbSchema(breadcrumbs), "breadcrumb-schema");
        // FAQ Schema if course has syllabus/faqs
        const faqs = [];
        if (course.syllabus) {
          course.syllabus.forEach(item => {
            faqs.push({ question: "What will I learn in " + item.module + "?", answer: item.topics.join(", ") });
          });
        }
        if (faqs.length > 0) {
          addStructuredData(generateFAQSchema(faqs), "faq-schema");
        }
      }
    } else {
      // Remove specific schemas if not on course detail
      ["course-schema", "breadcrumb-schema", "faq-schema"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
      
      if (currentPage === "home") {
        const homeFaqs = [
          { question: "What is the course fee?", answer: "Our courses are affordably priced with easy EMI options available." },
          { question: "Is internship guaranteed in writing?", answer: "Yes, we provide a 100% written guarantee for corporate internships." },
          { question: "Are classes offline in Pune or online?", answer: "We offer blended learning with both offline classes in Pune and online options." }
        ];
        addStructuredData(generateFAQSchema(homeFaqs), "faq-schema");
      }
    }

  }, [currentPage, selectedCourseId]);

  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-stone-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal selection:bg-[#2c9320] selection:text-white", children: [
    /* @__PURE__ */ jsx(
      Navbar,
      {
        currentPage,
        onNavigate: handleNavigate,
        onOpenCounseling: handleOpenCounseling,
        onOpenBookDemo: handleOpenBookDemo
      }
    ),
    /* @__PURE__ */ jsx(WhatsAppFloating, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1", children: [
      currentPage === "home" && /* @__PURE__ */ jsx(
        HomePage,
        {
          onNavigate: handleNavigate,
          onSelectCourse: handleSelectCourse,
          onOpenCounseling: handleOpenCounseling,
          onOpenBookDemo: handleOpenBookDemo,
          onOpenDownloadSyllabus: handleOpenDownloadSyllabus
        }
      ),
      currentPage === "about" && /* @__PURE__ */ jsx(
        AboutPage,
        {
          onNavigate: handleNavigate,
          onOpenCounseling: handleOpenCounseling,
          onOpenBookDemo: handleOpenBookDemo
        }
      ),
      currentPage === "courses" && /* @__PURE__ */ jsx(
        CoursesPage,
        {
          onNavigate: handleNavigate,
          onSelectCourse: handleSelectCourse,
          onOpenCounseling: handleOpenCounseling,
          onOpenBookDemo: handleOpenBookDemo,
          onOpenDownloadSyllabus: handleOpenDownloadSyllabus,
          onShowToast: (msg) => setToastMessage(msg)
        }
      ),
      currentPage === "ai-programs" && /* @__PURE__ */ jsx(
        AIProgramsPage,
        {
          onNavigate: handleNavigate,
          onSelectCourse: handleSelectCourse,
          onOpenCounseling: handleOpenCounseling,
          onOpenBookDemo: handleOpenBookDemo,
          onOpenDownloadSyllabus: handleOpenDownloadSyllabus,
          initialFilter: aiProgramFilter
        }
      ),
      currentPage === "internships" && /* @__PURE__ */ jsx(
        InternshipsPage,
        {
          onNavigate: handleNavigate,
          onOpenCounseling: handleOpenCounseling,
          onOpenBookDemo: handleOpenBookDemo
        }
      ),
      currentPage === "counseling" && /* @__PURE__ */ jsx(
        CounselingPage,
        {
          onShowToast: (msg) => setToastMessage(msg),
          prefilledCourse: modalCounselingCourse
        }
      ),
      currentPage === "book-demo" && /* @__PURE__ */ jsx(
        BookDemoPage,
        {
          onShowToast: (msg) => setToastMessage(msg),
          prefilledCourseId: modalDemoCourseId
        }
      ),
      currentPage === "course-detail" && /* @__PURE__ */ jsx(
        CourseDetailPage,
        {
          courseId: selectedCourseId,
          onNavigate: handleNavigate,
          onOpenCounseling: handleOpenCounseling,
          onOpenBookDemo: handleOpenBookDemo,
          onOpenDownloadSyllabus: handleOpenDownloadSyllabus,
          onShowToast: (msg) => setToastMessage(msg)
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Footer,
      {
        onNavigate: handleNavigate,
        onSelectCourse: handleSelectCourse,
        onOpenCounseling: handleOpenCounseling,
        onOpenBookDemo: handleOpenBookDemo
      }
    ),
    /* @__PURE__ */ jsx(
      CounselingModal,
      {
        isOpen: isCounselingModalOpen,
        onClose: () => setIsCounselingModalOpen(false),
        onShowToast: (msg) => setToastMessage(msg),
        prefilledCourse: modalCounselingCourse
      }
    ),
    /* @__PURE__ */ jsx(
      BookDemoModal,
      {
        isOpen: isBookDemoModalOpen,
        onClose: () => setIsBookDemoModalOpen(false),
        onShowToast: (msg) => setToastMessage(msg),
        prefilledCourseId: modalDemoCourseId
      }
    ),
    /* @__PURE__ */ jsx(
      DownloadSyllabusModal,
      {
        isOpen: isDownloadSyllabusModalOpen,
        onClose: () => setIsDownloadSyllabusModalOpen(false),
        onShowToast: (msg) => setToastMessage(msg),
        prefilledCourseId: modalSyllabusCourseId
      }
    ),
    /* @__PURE__ */ jsx(
      EnquiryModal,
      {
        isOpen: isEnquiryModalOpen,
        onClose: () => setIsEnquiryModalOpen(false),
        onShowToast: (msg) => setToastMessage(msg)
      }
    ),
    /* @__PURE__ */ jsx(
      ToastNotification,
      {
        message: toastMessage,
        onClose: () => setToastMessage(null)
      }
    )
  ] });
}
export {
  App as default
};
