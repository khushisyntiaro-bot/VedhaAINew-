import React, { useState } from "react";
import {
  ShieldCheck,
  Award,
  Building2,
  CheckCircle2,
  FileCheck,
  UserCheck,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Briefcase,
  Layers,
  Check
} from "lucide-react";
import { INTERNSHIP_PARTNERS, FAQ_LIST } from "../data/coursesData";
import placementCellImg from "../assets/placement-cell.webp";
import capstoneStudioImg from "../assets/capstone-studio.webp";
import certificateImg from "../assets/certificate.webp";

export const InternshipsPage = ({
  onNavigate,
  onOpenCounseling,
  onOpenBookDemo
}) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleCounselingAction = () => {
    if (onOpenCounseling) onOpenCounseling();
    else onNavigate("counseling");
  };

  const handleBookDemoAction = () => {
    if (onOpenBookDemo) onOpenBookDemo();
    else onNavigate("book-demo");
  };

  return (
    <div className="bg-white min-h-screen text-stone-800 font-sans">
      {/* Hero Section */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-[#2c9320]/10 via-stone-50/50 to-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-normal border border-[#2c9320]/20">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Guaranteed Commercial Placement</span>
              </div>

              <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal tracking-tight leading-tight">
                Verified Commercial Tech Internships for{" "}
                <span className="text-[#2c9320]">Every Graduate</span>
              </h1>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                Every student who completes our curriculum is directly onboarded into a verifiable commercial internship with one of our 450+ hiring partner tech companies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCounselingAction}
                  className="px-6 py-3 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-normal transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Talk to a Placement Counselor</span>
                </button>
                <button
                  type="button"
                  onClick={handleBookDemoAction}
                  className="px-6 py-3 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-normal transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Explore Partner Companies</span>
                  <ArrowRight className="w-4 h-4 text-stone-400" />
                </button>
              </div>

              {/* Key Trust Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/80">
                <div>
                  <div className="text-xl sm:text-2xl font-['Space_Grotesk'] font-normal text-stone-900">450+</div>
                  <div className="text-xs text-stone-500 font-normal">Hiring Partners</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-['Space_Grotesk'] font-normal text-[#2c9320]">100%</div>
                  <div className="text-xs text-stone-500 font-normal">Verifiable Roles</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-['Space_Grotesk'] font-normal text-stone-900">3-6 Mo</div>
                  <div className="text-xs text-stone-500 font-normal">Internship Duration</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 shadow-md group">
                <img
                  src={placementCellImg}
                  alt="Placement Cell & Enterprise Onboarding"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#2c9320] text-white font-normal shadow-xs">
                    Corporate Hiring Network
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-lg font-normal text-white">
                    Direct Bridge from Classroom to Production Studio
                  </h3>
                  <p className="text-xs text-stone-200 font-normal line-clamp-2">
                    Work directly under senior IT architects on active client repositories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3-Step Framework Section */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#2c9320] font-normal">
              Structured Pathway
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal">
              How the 100% Guaranteed Internship Works
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-normal">
              A transparent, 3-step transition from foundational learning to corporate onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 hover:border-[#2c9320]/50 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center font-['Space_Grotesk'] text-lg font-normal">
                  01
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 font-normal">Phase 1</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg text-stone-900 font-normal">
                Skill Mastery & Code Reviews
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Complete daily live interactive sessions, solve algorithmic assignments, and master clean code practices in Java, Python, SQL, or AI with weekly assessments.
              </p>
              <div className="pt-3 border-t border-stone-100 space-y-2 text-xs text-stone-600 font-normal">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Daily hands-on lab exercises</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>1-on-1 Pull Request code reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Weekly skill benchmarking tests</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 hover:border-[#2c9320]/50 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center font-['Space_Grotesk'] text-lg font-normal">
                  02
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 font-normal">Phase 2</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg text-stone-900 font-normal">
                Commercial Capstone Studio
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Build real-world client-specification projects adhering to production standards: GitHub workflows, Jira sprint tracking, unit testing, Docker, and CI/CD pipelines.
              </p>
              <div className="pt-3 border-t border-stone-100 space-y-2 text-xs text-stone-600 font-normal">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Production cloud deployments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Senior architect project sign-off</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Real sprint & standup experience</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 hover:border-[#2c9320]/50 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center font-['Space_Grotesk'] text-lg font-normal">
                  03
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#2c9320]/10 text-[#2c9320] font-normal">Guaranteed</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg text-stone-900 font-normal">
                Commercial Internship Placement
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Direct placement matching with our 450+ partner companies. Receive an official Offer Letter, live team onboarding, stipend remuneration, and verifiable credentials.
              </p>
              <div className="pt-3 border-t border-stone-100 space-y-2 text-xs text-stone-600 font-normal">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Official Letter of Recommendation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Pre-Placement Offer (PPO) opportunity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Stipend-backed enterprise projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Studio Spotlight */}
      <section className="py-16 bg-stone-50/60 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
                <span className="text-xs uppercase tracking-wider text-[#2c9320] font-normal">
                  Live Production Studio
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal leading-snug">
                  Build Software That Deploys to Real Enterprise Users
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  We don't teach toy projects. Our interns write backend microservices, train machine learning models, and build responsive frontend dashboards that execute in real production environments.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-normal">
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
                    <div className="font-normal text-stone-900">Agile Workflows</div>
                    <div className="text-stone-500 text-[11px]">Jira sprint planning & daily standup meetings</div>
                  </div>
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
                    <div className="font-normal text-stone-900">Enterprise Stack</div>
                    <div className="text-stone-500 text-[11px]">Spring Boot, Docker, React, AWS, Postgres</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 h-full min-h-[300px]">
                <img
                  src={capstoneStudioImg}
                  alt="Capstone Studio Environment"
                  className="w-full h-full object-cover min-h-[320px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Hiring Network Section */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#2c9320] font-normal">
              Corporate Network
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal">
              Where Our Interns Get Placed
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-normal">
              Active hiring relationships across Tier-1 IT services, product startups, and global analytics firms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERNSHIP_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 p-5 space-y-4 hover:border-[#2c9320]/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#2c9320]/10 text-[#2c9320] flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-[#2c9320]" />
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 font-normal">
                    {partner.industry}
                  </span>
                </div>

                <div>
                  <h4 className="font-['Space_Grotesk'] text-base text-stone-900 font-normal">
                    {partner.name}
                  </h4>
                  <span className="text-[11px] text-stone-400 font-normal">Hiring Partner</span>
                </div>

                <div className="pt-3 border-t border-stone-100 space-y-1.5">
                  <span className="text-[11px] text-stone-500 block font-normal">Open Internship Roles:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.rolesAvailable.map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-stone-50 text-stone-700 border border-stone-200/60 font-normal"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verifiable Certificate Card */}
      <section className="py-16 bg-stone-50/50 border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9320]/10 text-[#2c9320] text-xs font-normal border border-[#2c9320]/20">
                <FileCheck className="w-4 h-4" />
                <span>Industry-Recognized Credential</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal">
                Verifiable Commercial Internship Certificate
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Upon program completion, you receive an official commercial experience letter and certificate featuring a verifiable digital QR code, corporate registration identification, and verified technology stack accreditation.
              </p>
              <div className="space-y-2 pt-2 text-xs text-stone-600 font-normal">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Unique Verification URL for recruiters and LinkedIn profile</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Detailed breakdown of commercial modules delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c9320] shrink-0" />
                  <span>Signed endorsement from lead engineering architects</span>
                </div>
              </div>
            </div>

            {/* Real Verifiable Certificate Showcase */}
            <div className="w-full md:w-96 shrink-0">
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-white p-2 group hover:shadow-lg transition-all">
                <img
                  src={certificateImg}
                  alt="Official VedhaAI Certificate of Completion & Internship"
                  className="w-full h-auto rounded-xl object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-3 bg-stone-50 rounded-xl mt-2 border border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-normal">
                      Government Recognized
                    </span>
                    <span className="text-xs font-normal text-stone-900">
                      ISO 9001 & MSME Certified
                    </span>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-md bg-[#2c9320]/10 text-[#2c9320] font-normal">
                    100% Verifiable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#2c9320] font-normal">Got Questions?</span>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl text-stone-900 font-normal">
              Internship Guarantee FAQ
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-normal">
              Common questions about our guaranteed placement process, stipends, and partner onboarding.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.slice(0, 5).map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-colors hover:border-stone-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h4 className="font-['Space_Grotesk'] text-sm sm:text-base text-stone-900 font-normal">
                    {faq.q}
                  </h4>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#2c9320] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              type="button"
              onClick={handleCounselingAction}
              className="px-6 py-3 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-normal transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <UserCheck className="w-4 h-4" />
              <span>Talk to a Placement Counselor</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#2c9320] font-normal">Start Your Journey Today</span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-normal text-white">
            Ready to Secure Your Commercial Tech Internship?
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto font-normal leading-relaxed">
            Schedule a 1-on-1 counseling session with our senior placement advisor to review your profile and match with our partner companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleCounselingAction}
              className="w-full sm:w-auto px-6 py-3 bg-[#2c9320] hover:bg-[#257d1b] text-white rounded-xl text-xs font-normal transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <UserCheck className="w-4 h-4" />
              <span>Schedule Free Counseling</span>
            </button>
            <button
              type="button"
              onClick={handleBookDemoAction}
              className="w-full sm:w-auto px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded-xl text-xs font-normal transition-colors cursor-pointer"
            >
              <span>Book a Free Demo Class</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
