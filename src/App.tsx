/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Printer, Github, Linkedin, Globe, Code2 } from 'lucide-react';

const SectionHeader = ({ title }: { title: string }) => (
  <div className="mb-1">
    <h2 className="text-base font-extrabold tracking-[0.2em] text-slate-900 border-b-2 border-slate-900 pb-0.5 inline-block uppercase">
      {title}
    </h2>
    <div className="w-full h-[1px] bg-slate-200 -mt-[1px]"></div>
  </div>
);

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans selection:bg-slate-900 selection:text-white">
      {/* Floating Download Button - Outside Resume Flow */}
      <div className="fixed top-6 right-6 z-50 no-print outline-none border-none">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-xl active:scale-95 cursor-pointer no-print ring-offset-2 focus:ring-2 focus:ring-slate-900"
        >
          <Printer size={18} />
          Download A4 PDF
        </button>
      </div>

      {/* Helper Info */}
      <div className="max-w-[850px] mx-auto mb-6 no-print text-center">
        <p className="text-xs text-slate-400 font-medium italic">
          Optimized for A4 Page · Use "Save as PDF" in Print dialog
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="resume-container"
      >
        {/* Header */}
        <header className="flex flex-row print:flex print:flex-row justify-between items-start gap-4 mb-2 border-b border-slate-100 pb-2">
          <div className="flex-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-0 uppercase font-display">
              Rifat Miah
            </h1>
            <p className="text-[11px] font-medium tracking-[0.2em] text-slate-500 uppercase mb-0.5 leading-tight">
              Learner & Junior<br />Frontend Developer
            </p>
            
            {/* Portfolio and LeetCode Links */}
            <div className="flex flex-row flex-wrap print:flex print:flex-row print:flex-wrap gap-x-3 gap-y-1 text-[8.5px] font-bold uppercase tracking-widest text-slate-700">
              <a 
                href="https://rifat-miah-92.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 hover:text-slate-900 transition-colors group"
              >
                <div className="p-0.5 bg-slate-100 rounded group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Globe size={11} className="print:text-slate-900" />
                </div>
                Portfolio
              </a>
              <a 
                href="https://leetcode.com/u/oSqxNX2Db0/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 hover:text-slate-900 transition-colors group"
              >
                <div className="p-0.5 bg-slate-100 rounded group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Code2 size={11} className="print:text-slate-900" />
                </div>
                LeetCode
              </a>
            </div>
          </div>
          
          <div className="flex flex-col print:flex print:flex-col gap-0.5 text-[10px] text-slate-600 font-bold items-end shrink-0">
            <a href="tel:+8801314078510" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
              <span>+8801314078510</span>
              <div className="p-1.5 bg-slate-900 text-white rounded shrink-0">
                <Phone size={11} />
              </div>
            </a>
            <a href="mailto:hrrifat92@gmail.com" className="flex items-center gap-2 hover:text-slate-900 transition-colors text-slate-900">
              <span className="border-b border-slate-900/20">hrrifat92@gmail.com</span>
              <div className="p-1.5 bg-slate-900 text-white rounded shrink-0">
                <Mail size={11} />
              </div>
            </a>
            <a href="https://github.com/rifatmiah92" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
              <span>github.com/rifatmiah92</span>
              <div className="p-1.5 bg-slate-900 text-white rounded shrink-0">
                <Github size={11} />
              </div>
            </a>
            <a href="https://linkedin.com/in/rifat-miah-web-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
              <span>linkedin.com/in/rifat-miah-web-dev</span>
              <div className="p-1.5 bg-slate-900 text-white rounded shrink-0">
                <Linkedin size={11} />
              </div>
            </a>
            <div className="flex items-center gap-2">
              <span>Narayanganj, Bangladesh</span>
              <div className="p-1.5 bg-slate-900 text-white rounded shrink-0">
                <MapPin size={11} />
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-1.5">
          <section className="print:mt-0">
            <SectionHeader title="Portfolio Summary" />
            <p className="text-slate-600 leading-relaxed max-w-4xl text-[11px]">
              Computer Science Engineering Student and Driven MERN Stack Developer with a portfolio of 40+ projects and 50+ DSA problems solved. Combining technical grit—proven by 19-hour intensive dev sessions—with leadership training from Harvard’s Aspire program, I focus on building secure, user-centric web systems and scalable modern software architecture.
            </p>
          </section>

          {/* Projects as Experience */}
          <section>
            <SectionHeader title="Key Projects" />
            <div className="space-y-2">
              {[
                {
                  date: "2026",
                  title: "TechCore (Tactical Gear)",
                  company: "Next.js 14, Tailwind CSS, Firebase",
                  desc: "A responsive full-stack web application for gear management. Features seamless Firebase authentication and dynamic routing for specialized item catalogs.",
                  live: "https://tactical-gear.netlify.app/",
                  repo: "https://github.com/rifatmiah92/Tactical-Gear"
                },
                {
                  date: "2026",
                  title: "Book Nest BD",
                  company: "Next.js 14, Tailwind CSS, Firebase",
                  desc: "A Neubrutalist bookstore platform featuring bold borders and a bento-box layout. Implemented hard-shadow grid layouts with full mobile responsiveness.",
                  live: "https://book-nest-bd.netlify.app/",
                  repo: "https://github.com/rifatmiah92/BOOK-NEST"
                },
                {
                  date: "2025",
                  title: "SkillSwap - Learning Platform",
                  company: "React.js, Tailwind CSS, DaisyUI, Firebase",
                  desc: "A modern learning platform with a wide collection of optimized courses. Built with a focus on speed and performance utilizing Firestore.",
                  live: "https://skills-wap-learning.netlify.app/",
                  repo: "https://github.com/rifatmiah92/Skill-Sawp"
                }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-[70px_1fr] print:grid-cols-[70px_1fr] gap-4">
                  <div className="text-slate-500 font-bold uppercase tracking-wide text-[9px] pt-0.5">
                    {item.date}
                  </div>
                  <div>
                    <h3 className="text-[13px] font-extrabold text-slate-800 uppercase mb-0.5 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 font-semibold text-[8.5px] mb-0.5">
                      {item.company}
                    </p>
                    <p className="text-slate-600 leading-tight text-[10.5px] mb-1">
                      {item.desc}
                    </p>
                    <div className="flex gap-4 text-[7.5px] font-bold uppercase tracking-widest">
                      <a href={item.live} target="_blank" rel="noopener noreferrer" className="text-slate-900 border-b border-slate-900/10 hover:border-slate-900 transition-colors">Live Project</a>
                      <a href={item.repo} target="_blank" rel="noopener noreferrer" className="text-slate-900 border-b border-slate-900/10 hover:border-slate-900 transition-colors">Source Code</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6">
            <section>
              <SectionHeader title="Academic Path" />
              <div className="space-y-2">
                {[
                  {
                    date: "2024 - 2028",
                    degree: "B.Sc. in Computer Science",
                    college: "Presidency University, Bangladesh",
                    note: "Core focus on Algorithms, SE and MERN Stack."
                  },
                  {
                    date: "2021 - 2022",
                    degree: "Higher Secondary Certificate",
                    college: "Gov't Murapara College",
                    note: "Science | CGPA: 4.50/5.00"
                  }
                ].map((edu, idx) => (
                  <div key={idx} className="flex gap-3 print:flex">
                    <div className="text-slate-500 font-bold uppercase tracking-wide text-[8.5px] pt-1 min-w-[55px]">
                      {edu.date}
                    </div>
                    <div>
                      <h3 className="text-[11px] font-extrabold text-slate-800 uppercase tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-500 font-semibold text-[8.5px] uppercase tracking-wider mb-0.5">
                        {edu.college}
                      </p>
                      <p className="text-slate-600 text-[8.5px] leading-relaxed">
                        {edu.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="Technical Stack" />
              <div className="space-y-1.5">
                {[
                  { title: "Frontend", list: "React.js, Next.js, HTML5, CSS3, Tailwind CSS" },
                  { title: "Backend", list: "Node.js, Express.js" },
                  { title: "Databases", list: "MongoDB, Firebase" },
                  { title: "Programming", list: "Python, C++, Java, JS" },
                  { title: "Tools", list: "Git/GitHub, Figma, Adobe XD" }
                ].map((skill, idx) => (
                  <div key={idx}>
                    <h3 className="text-[8.5px] font-black text-slate-900 uppercase tracking-[0.1em] mb-0.5">{skill.title}</h3>
                    <p className="text-[11px] text-slate-600 font-medium">
                      {skill.list}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Certifications and Languages */}
          <section>
            <SectionHeader title="Key Credentials" />
            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-x-6 gap-y-1.5">
              {[
                { title: "Complete Web Development Course", place: "Programming Hero" },
                { title: "Aspire Leaders Program", place: "Aspire Institute (Harvard Business School)" },
                { title: "Major Cyber Security Incidents", place: "The Open University" },
                { title: "Basics of Machine Learning Algorithms", place: "Cambridge International Qualifications" },
                { title: "Net Zero 101", place: "United Nations University" },
                { title: "Human Rights", place: "Amnesty International" }
              ].map((cert, idx) => (
                <div key={idx} className="flex gap-2 print:flex">
                  <div className="text-slate-400 font-bold uppercase tracking-wide text-[7px] pt-1 min-w-[35px]">
                    Cert
                  </div>
                  <div>
                    <h3 className="text-[9px] font-extrabold text-slate-800 uppercase tracking-tight leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-slate-500 font-semibold text-[7.5px] uppercase tracking-wider">
                      {cert.place}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="Languages" />
            <div className="flex gap-10 text-[10px]">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                <div>
                  <h4 className="font-extrabold text-slate-800 uppercase inline mr-1.5 text-[11px]">Bangla</h4>
                  <span className="text-slate-500 font-bold uppercase italic text-[9px]">Native</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                <div>
                  <h4 className="font-extrabold text-slate-800 uppercase inline mr-1.5 text-[11px]">English</h4>
                  <span className="text-slate-500 font-bold uppercase italic text-[9px]">Professional</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
