import React from "react";
import {
  Building2,
  Sparkles,
  Award,
  ArrowRight,
  CalendarCheck,
  UserCheck,
  Laptop,
  CheckCircle2,
  GraduationCap,
  Star,
  ExternalLink,
  Zap,
  TrendingUp,
  ShieldCheck,
  Code2,
  Users,
  Compass,
  Briefcase
} from "lucide-react";
import aiSummitImage from "../assets/AISUBMMITIMG2.webp";
import aiSummitMainImage from "../assets/AI Summit.webp";

export const CollegeAISummitSection = ({
  onOpenBookDemo,
  onOpenCounseling
}) => {
  const summitPillars = [
    {
      icon: Users,
      step: "01",
      title: "Industry Experts On-Campus",
      badge: "Visiting Architects",
      description:
        "Senior AI architects, engineering leads, and technology practitioners visit campuses directly to deliver keynote masterclasses and enterprise system breakdowns."
    },
    {
      icon: Laptop,
      step: "02",
      title: "Hands-On GenAI Workshops",
      badge: "Real-Time Coding",
      description:
        "Interactive live coding workshops where students build production-ready LLM pipelines, Spring AI microservices, LangChain agents, and RAG architectures."
    },
    {
      icon: Award,
      step: "03",
      title: "100% Guaranteed Internships",
      badge: "Direct Hiring",
      description:
        "Direct pre-placement selections and verified commercial internship cohorts for participating engineering batches with corporate stipend letters."
    },
    {
      icon: Building2,
      step: "04",
      title: "TPO & Academic Alignment",
      badge: "NEP 2020 Aligned",
      description:
        "Equipping college placement cells and faculty with current industry hiring benchmarks, AI lab enablement, and academic credit frameworks."
    }
  ];

  const impactMetrics = [
    {
      value: "25+",
      label: "Partner Campuses",
      subtext: "Tier-1 & Autonomous Colleges"
    },
    {
      value: "12,000+",
      label: "Student Engineers",
      subtext: "Upskilled in Full-Stack & GenAI"
    },
    {
      value: "100%",
      label: "Internship Pathway",
      subtext: "Guaranteed Corporate Selection"
    },
    {
      value: "4.9 / 5.0",
      label: "Campus Rating",
      subtext: "From Deans, TPOs & Students"
    }
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-stone-50/80 via-white to-stone-50/50 border-b border-stone-200 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#2c9320]/6 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Institutional Partnership Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2c9320]/10 border border-[#2c9320]/25 text-[#2c9320] text-xs font-medium shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategic Institutional Partnership &bull; VedhaAI ✕ VMANOUS</span>
          </div>

          {/* Heading */}
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-3xl text-stone-900 font-medium tracking-tight">
            Nationwide College <span className="text-[#2c9320]">AI Summits</span> & Workshops
          </h2>

          {/* Subtitle */}
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            Bridging academia and the modern tech industry. Senior software architects and AI leaders visit college campuses to deliver immersive <strong className="text-stone-900 font-medium">AI Summit Workshops</strong>, live hands-on coding, and <strong className="text-[#2c9320] font-medium">guaranteed corporate internship placement pathways</strong>.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {impactMetrics.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-[#2c9320]/40 hover:shadow-sm transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl font-['Space_Grotesk'] font-medium text-stone-900 group-hover:text-[#2c9320] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-['Space_Grotesk'] font-medium text-stone-800 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-stone-500 mt-0.5 font-normal">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#2c9320] font-semibold">
                Summit Highlights
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-medium mt-1">
                What Happens at the Campus AI Summit?
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
              <GraduationCap className="w-4 h-4 text-[#2c9320]" />
              <span>2–3 Days Intensive On-Campus Program</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {summitPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#2c9320]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center font-medium group-hover:bg-[#2c9320] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-['Space_Grotesk'] font-medium text-stone-400 group-hover:text-[#2c9320] transition-colors">
                        {pillar.step}
                      </span>
                    </div>

                    <h4 className="font-['Space_Grotesk'] text-base text-stone-900 font-medium group-hover:text-[#2c9320] transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs font-medium text-[#2c9320]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2c9320]" />
                    <span>{pillar.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Visual Showcase & Institutional Endorsement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Keynote Banner - AISUBMMITIMG2 fully visible (6 cols) */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-950 min-h-[480px] lg:min-h-[520px] flex flex-col justify-end group">
            <img
              src={aiSummitImage}
              alt="AI Summit Keynote Stage - The Evolution of Geeks in the Age of AI"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            <div className="relative p-6 sm:p-8 text-white z-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320] text-white text-xs font-medium w-fit mb-1 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live On-Campus AI Masterclasses & Keynotes</span>
              </div>
              <h4 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-medium text-white">
                Industry Architects & Tech Leaders on Stage
              </h4>
              <p className="text-xs sm:text-sm text-stone-200 font-normal max-w-lg">
                Delivering live system design breakdowns, Spring AI, LangChain, and real-world GenAI deployment workflows directly to students.
              </p>
            </div>
          </div>

          {/* Testimonial, Benefits & Campus Auditorium (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2c9320]">
                  Institutional Benefits
                </span>
                <ShieldCheck className="w-5 h-5 text-[#2c9320]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Visiting senior industry software architects & AI leads",
                  "100% Guaranteed commercial internship selection drives",
                  "NEP 2020 curriculum credits & modern AI lab enablement",
                  "Jointly verified tamper-proof digital completion certificates"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#2c9320] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Auditorium Photo Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 group h-44 sm:h-48 shadow-xs">
              <img
                src={aiSummitMainImage}
                alt="Campus Auditorium Full of Engineering Students"
                className="w-full h-full object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <div className="flex items-center justify-between w-full text-white text-xs">
                  <div>
                    <div className="font-['Space_Grotesk'] font-medium">Over 1,500+ Engineers in Single Hall</div>
                    <div className="text-[11px] text-stone-300 font-normal">Active university auditoriums across India</div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded bg-[#2c9320] text-white font-medium shrink-0">Nationwide</span>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="p-4 rounded-2xl bg-[#2c9320]/5 border border-[#2c9320]/15 space-y-2">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
                <span className="text-[11px] text-stone-500 ml-1.5 font-normal">Verified Campus Review</span>
              </div>
              <p className="text-xs text-stone-700 italic leading-relaxed font-normal">
                "Having industry AI experts on campus gave our 800+ engineering students direct practical GenAI exposure that converted into real corporate internships."
              </p>
              <div className="text-[11px] text-stone-900 font-medium pt-1">
                — Campus Placement Cell Lead & Summit Coordinator
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-medium text-white">
              Ready to Host the AI Summit Workshop at Your College?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl font-normal">
              Partner with VedhaAI & VMANOUS to bring visiting industry architects directly to your institution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={() => window.open("https://vmanous.com/enroll", "_blank")}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm font-['Space_Grotesk']"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Enroll in AI Summit Workshop</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>

            <button
              type="button"
              onClick={() => onOpenCounseling("College AI Summit (VedhaAI x VMANOUS)")}
              className="w-full sm:w-auto px-6 py-3.5 bg-stone-800 hover:bg-stone-700 text-white border border-stone-700 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer font-['Space_Grotesk']"
            >
              <UserCheck className="w-4 h-4 text-[#2c9320]" />
              <span>Host Workshop at Your College</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
