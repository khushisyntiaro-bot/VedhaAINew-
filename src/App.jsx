import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
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
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#/", "").replace("#", "");
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
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  const handleNavigate = (page, param) => {
    if (page === "course-detail") {
      const cId = typeof param === "string" ? param : param?.id || ALL_COURSES[0].id;
      setSelectedCourseId(cId);
      window.location.hash = `#/course/${cId}`;
    } else if (page === "ai-programs") {
      if (param === "genai-agentic") {
        setAiProgramFilter("genai-agentic");
        window.location.hash = "#/ai-programs-genai";
      } else if (param === "ai-ml") {
        setAiProgramFilter("ai-ml");
        window.location.hash = "#/ai-programs-ml";
      } else {
        setAiProgramFilter("all");
        window.location.hash = "#/ai-programs";
      }
    } else if (page === "counseling") {
      handleOpenCounseling(typeof param === "string" ? param : void 0);
      return;
    } else if (page === "book-demo") {
      handleOpenBookDemo(typeof param === "string" ? param : void 0);
      return;
    } else {
      window.location.hash = `#/${page === "home" ? "" : page}`;
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
