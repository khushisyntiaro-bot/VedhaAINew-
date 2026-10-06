import React, { useState, useEffect } from "react";
import { ALL_COURSES } from "../data/coursesData";
import {
  Sparkles,
  Cpu,
  Bot,
  Database,
  CalendarCheck,
  CheckCircle2,
  Zap,
  Clock,
  UserCheck,
  Download,
  ArrowRight,
  Code2,
  Check
} from "lucide-react";
import onlineTrainingImg from "../assets/online-training.jpg";

export const AIProgramsPage = ({
  onNavigate,
  onSelectCourse,
  onOpenCounseling,
  onOpenBookDemo,
  onOpenDownloadSyllabus,
  initialFilter = "all"
}) => {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (
      initialFilter === "genai-agentic" ||
      initialFilter === "ai-ml" ||
      initialFilter === "all"
    ) {
      setActiveTab(initialFilter);
    }
  }, [initialFilter]);

  const handleBookDemo = (courseId) => {
    if (onOpenBookDemo) {
      onOpenBookDemo(courseId);
    } else {
      onNavigate("book-demo", courseId);
    }
  };

  const handleCounseling = (courseTitle) => {
    if (onOpenCounseling) {
      onOpenCounseling(courseTitle);
    } else {
      onNavigate("counseling", courseTitle);
    }
  };

  const aiCourses = ALL_COURSES.filter((c) => {
    if (activeTab === "genai-agentic") {
      return (
        c.id === "java-with-ai" ||
        c.id === "python-with-ai" ||
        c.isAIProgram
      );
    }
    if (activeTab === "ai-ml") {
      return (
        c.id === "python-with-ai" ||
        c.id === "python-libs" ||
        c.id === "data-analysis" ||
        c.isAIProgram
      );
    }
    return c.isAIProgram || c.id.includes("ai") || c.id.includes("python");
  });

  return (
    <div className="bg-white min-h-screen text-stone-800 font-sans">
      {/* Hero Header Section */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-[#2c9320]/10 via-stone-50/50 to-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-normal border border-[#2c9320]/20">
                <Sparkles className="w-4 h-4" />
                <span>Next-Generation AI Engineering & 100% Internship</span>
              </div>

              <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal tracking-tight leading-tight">
                Master Modern Software with{" "}
                <span className="text-[#2c9320]">Generative AI & Agentic Systems</span>
              </h1>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                Build production autonomous AI agents, enterprise RAG pipelines, and deep learning models with guaranteed commercial internship placement.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-xl text-xs transition-all cursor-pointer font-normal ${
                    activeTab === "all"
                      ? "bg-[#2c9320] text-white shadow-xs"
                      : "bg-white text-stone-700 border border-stone-200 hover:border-[#2c9320]/40"
                  }`}
                >
                  All AI Specializations
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("genai-agentic")}
                  className={`px-4 py-2 rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer font-normal ${
                    activeTab === "genai-agentic"
                      ? "bg-[#2c9320] text-white shadow-xs"
                      : "bg-white text-stone-700 border border-stone-200 hover:border-[#2c9320]/40"
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>GenAI & Agentic AI</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("ai-ml")}
                  className={`px-4 py-2 rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer font-normal ${
                    activeTab === "ai-ml"
                      ? "bg-[#2c9320] text-white shadow-xs"
                      : "bg-white text-stone-700 border border-stone-200 hover:border-[#2c9320]/40"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI & Machine Learning</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 shadow-md group">
                <img
                  src={onlineTrainingImg}
                  alt="AI Engineering Lab"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5">
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#2c9320] text-white font-normal shadow-xs">
                    Live AI Engineering Studio
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-base font-normal text-white">
                    Deploy AI Microservices to AWS & Azure
                  </h3>
                  <p className="text-xs text-stone-200 font-normal">
                    Hands-on vector indexing, LlamaIndex, Spring AI & LangChain frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Detail Banner */}
      {activeTab === "genai-agentic" && (
        <section className="py-10 bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#2c9320]/5 border border-[#2c9320]/20 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-normal">
                <Bot className="w-4 h-4" />
                <span>Track Overview: GenAI & Agentic AI</span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-stone-900 font-normal">
                GenAI & Agentic AI: Autonomous Intelligence in Production
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Move beyond prompt wrappers by architecting autonomous multi-agent systems, Retrieval-Augmented Generation (RAG), vector indexing with Chroma/Pinecone, Spring AI function calling, and Tool-Using AI Agents using LangChain, LlamaIndex, and AutoGen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-stone-700 font-normal">
                <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                  <div className="font-normal text-stone-900">RAG Pipelines & Vector DBs</div>
                  <div className="text-stone-500 text-[11px]">Chunking, high-dimension embeddings & cosine similarity retrieval</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                  <div className="font-normal text-stone-900">Agentic Tool Calling</div>
                  <div className="text-stone-500 text-[11px]">Autonomous query execution, database updates, and API webhooks</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                  <div className="font-normal text-stone-900">Enterprise Frameworks</div>
                  <div className="text-stone-500 text-[11px]">Spring AI for Java, LangChain for Python, LlamaIndex & CrewAI</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "ai-ml" && (
        <section className="py-10 bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#2c9320]/5 border border-[#2c9320]/20 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-normal">
                <Cpu className="w-4 h-4" />
                <span>Track Overview: AI & Machine Learning</span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-stone-900 font-normal">
                AI & Machine Learning: Statistical Intelligence & Deep Learning
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Learn the core mathematical and computational foundations of modern Artificial Intelligence. Develop predictive regression and classification models, neural network architectures with TensorFlow/PyTorch, Computer Vision pipelines with OpenCV, and automated exploratory data analysis.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-stone-700 font-normal">
                <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                  <div className="font-normal text-stone-900">Supervised & Unsupervised ML</div>
                  <div className="text-stone-500 text-[11px]">Decision Trees, Random Forests, XGBoost, Clustering & PCA</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                  <div className="font-normal text-stone-900">Deep Learning & Neural Nets</div>
                  <div className="text-stone-500 text-[11px]">CNNs for image processing, RNNs/Transformers for sequences</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                  <div className="font-normal text-stone-900">Model Deployment & MLOps</div>
                  <div className="text-stone-500 text-[11px]">Model containerization, FastAPI serving, and performance metrics</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AI Cohorts Grid Section */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#2c9320] font-normal">
              Dedicated AI Pathways
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal">
              Curated AI Cohorts with 100% Internship
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-normal">
              Select a course track below to view complete week-by-week curriculum, capstone projects, and schedule your free demo class.
            </p>
          </div>

          {/* AI Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:border-[#2c9320]/50 hover:shadow-md transition-all group"
              >
                {/* Course Top Image & Badge */}
                {course.imageUrl && (
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#2c9320] font-normal shadow-xs">
                        Flagship AI Cohort
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-normal">
                      <span className="flex items-center gap-1.5 text-stone-200">
                        <Clock className="w-3.5 h-3.5 text-[#2c9320]" />
                        {course.duration}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-[#2c9320] text-white text-[11px] font-normal shadow-xs">
                        100% Guaranteed Internship
                      </span>
                    </div>
                  </div>
                )}

                {/* Course Main Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-stone-900 font-normal group-hover:text-[#2c9320] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                      {course.fullDesc}
                    </p>

                    {/* Capstone List */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-normal text-stone-800 block">
                        Commercial AI Capstone Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 font-normal">
                        {course.capstoneProjects?.map((proj, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#2c9320] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{proj}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2">
                      <span className="text-[11px] text-stone-400 block mb-1.5 font-normal">
                        Technologies & Frameworks:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 font-normal"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 mt-4 border-t border-stone-100 space-y-2">
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          if (onSelectCourse) onSelectCourse(course);
                          onNavigate("course-detail", course.id);
                        }}
                        className="w-full sm:flex-1 py-2.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-normal transition-colors text-center cursor-pointer shadow-xs"
                      >
                        View Full Syllabus
                      </button>
                      <button
                        type="button"
                        onClick={() => handleBookDemo(course.id)}
                        className="w-full sm:flex-1 py-2.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-normal transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                      >
                        <CalendarCheck className="w-4 h-4" />
                        <span>Book Free Demo</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenDownloadSyllabus) {
                          onOpenDownloadSyllabus(course.id);
                        } else {
                          onNavigate("course-detail", course.id);
                        }
                      }}
                      className="w-full py-1.5 text-[11px] text-stone-500 hover:text-[#2c9320] flex items-center justify-center gap-1 font-normal cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Syllabus Outline (PDF)</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Features Section */}
      <section className="py-16 bg-stone-50/50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#2c9320] font-normal">
              Enterprise AI Engineering
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal">
              What You Will Build in Our AI Labs
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-normal">
              Every student deploys functional AI microservices and pipelines to production cloud environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-3 hover:border-[#2c9320]/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-['Space_Grotesk'] text-base text-stone-900 font-normal">
                Enterprise RAG & Vector Search
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Chunk enterprise documentation, generate high-dimensional embeddings, index into Chroma/Pinecone vector databases, and implement semantic retrieval with citations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-3 hover:border-[#2c9320]/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="font-['Space_Grotesk'] text-base text-stone-900 font-normal">
                Autonomous Agents & Function Calling
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Build autonomous agents capable of querying SQL databases, making external API calls, executing calculations, and triggering microservice workflows without human intervention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-3 hover:border-[#2c9320]/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-['Space_Grotesk'] text-base text-stone-900 font-normal">
                Spring AI & Gemini API Integration
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Seamlessly bridge enterprise Java/Spring Boot architectures with modern GenAI endpoints, streaming response buffers, prompt engineering, and structured JSON parsing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#2c9320] font-normal">Future-Proof Career</span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-normal text-white">
            Future-Proof Your Career as an AI Engineer
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto font-normal leading-relaxed">
            Attend a free live demo to see how we build intelligent applications from scratch in real time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleBookDemo()}
              className="w-full sm:w-auto px-6 py-3 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-normal transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Free AI Demo</span>
            </button>
            <button
              type="button"
              onClick={() => handleCounseling("Java with AI")}
              className="w-full sm:w-auto px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded-xl text-xs font-normal transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserCheck className="w-4 h-4 text-[#2c9320]" />
              <span>Consult an AI Advisor</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
