// Tilt removed for resume layout
import { motion } from "framer-motion";

import { styles } from "../styles";
// services removed; this component will display resume details
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Resume layout - service cards removed

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[16px] max-w-4xl leading-[28px] flex flex-col gap-6'
      >
        <div>
          <h1 className='text-white text-3xl font-bold'>NANDIKA MOHITH</h1>
          <p className='text-tertiary'>Bachelor of Technology — Computer Science and Engineering</p>
        </div>

        <div className='flex flex-col sm:flex-row sm:justify-between gap-4'>
          <div className='space-y-1'>
            <p className='text-white font-medium'>Professional Summary</p>
            <p className='text-secondary'>Computer Science undergraduate skilled in AI, Machine Learning, and Web Development. Proficient in Python, Java, SQL, and data science tools. Dedicated to applying DSA and model deployment for real-world solutions.</p>
          </div>

          <div className='space-y-1'>
            <p className='text-white font-medium'>Contact</p>
            <p className='text-secondary'><a href='tel:+918309533562' className='text-white'>+91-8309533562</a></p>
            <p className='text-secondary'><a href='mailto:nandikamohith@gmail.com' className='text-white'>nandikamohith@gmail.com</a></p>
            <div className='flex gap-3'>
              <a href='https://github.com/Mohith737' target='_blank' rel='noreferrer' className='text-white underline'>GitHub</a>
              <a href='https://www.linkedin.com/in/mohith-nandika/' target='_blank' rel='noreferrer' className='text-white underline'>LinkedIn</a>
            </div>
            <div className='mt-2'>
              <a href='/Mohith_BResume.pdf' target='_blank' rel='noreferrer' className='inline-block px-4 py-2 bg-secondary text-white rounded-md hover:opacity-90'>Download Resume</a>
            </div>
          </div>
        </div>

        <section>
          <h3 className='text-white font-semibold'>Education</h3>
          <ul className='list-disc list-inside text-secondary mt-2 space-y-1'>
            <li>
              <span className='text-white font-medium'>Vellore Institute of Technology, Amaravati</span> — Bachelor of Technology in Computer Science and Engineering (2022–26) · CGPA: 8.03
            </li>
            <li>
              <span className='text-white font-medium'>Tirumala Junior College, Visakhapatnam</span> — Board of Intermediate Education, Andhra Pradesh (2019–21) · Percentage: 97.4
            </li>
            <li>
              <span className='text-white font-medium'>St Josephs School, Vizianagaram</span> — Board of Secondary Education, Andhra Pradesh (2018–19) · CGPA: 10.0
            </li>
          </ul>
        </section>

        <section>
          <h3 className='text-white font-semibold'>Personal Projects</h3>
          <div className='mt-2 flex flex-col gap-3'>
            <div className='bg-tertiary p-4 rounded-md'>
              <div className='flex items-center justify-between'>
                <div>
                  <h4 className='text-white font-bold'>Snack Squad App</h4>
                  <div className='text-xs text-secondary'>June 2024 · Kotlin, XML, SQLite</div>
                </div>
                <a href='https://github.com/Mohith737' target='_blank' rel='noreferrer' className='text-sm text-white underline'>GitHub</a>
              </div>
              <p className='mt-2 text-secondary text-sm'>Developed an intuitive food delivery app using Kotlin and XML. Adopted MVVM architecture and integrated SQLite for efficient local data storage.</p>
            </div>

            <div className='bg-tertiary p-4 rounded-md'>
              <div className='flex items-center justify-between'>
                <div>
                  <h4 className='text-white font-bold'>Online Sports Booking Website</h4>
                  <div className='text-xs text-secondary'>Aug 2024 – Nov 2024 · HTML, CSS, JavaScript, PHP, MySQL</div>
                </div>
                <a href='https://github.com/Mohith737' target='_blank' rel='noreferrer' className='text-sm text-white underline'>GitHub</a>
              </div>
              <p className='mt-2 text-secondary text-sm'>Built a comprehensive sports booking website with responsive UI and efficient database management using PHP and MySQL.</p>
            </div>

            <div className='bg-tertiary p-4 rounded-md'>
              <div className='flex items-center justify-between'>
                <div>
                  <h4 className='text-white font-bold'>Chat App — Realtime Messaging with Style</h4>
                  <div className='text-xs text-secondary'>Oct 2024 – Feb 2025 · MERN, Socket.IO, TailwindCSS, DaisyUI</div>
                </div>
                <a href='https://github.com/Mohith737' target='_blank' rel='noreferrer' className='text-sm text-white underline'>GitHub</a>
              </div>
              <p className='mt-2 text-secondary text-sm'>Built a real-time chat application using Socket.IO for bidirectional communication and a modern, responsive UI.</p>
            </div>

            <div className='bg-tertiary p-4 rounded-md'>
              <div className='flex items-center justify-between'>
                <div>
                  <h4 className='text-white font-bold'>Fake News Detection System</h4>
                  <div className='text-xs text-secondary'>Oct 2024 – Feb 2025 · NLP, ML</div>
                </div>
                <span className='text-sm text-tertiary'>—</span>
              </div>
              <p className='mt-2 text-secondary text-sm'>Designed an ML pipeline to classify news articles with ~92% accuracy using NLP preprocessing and TF-IDF features.</p>
            </div>

            <div className='bg-tertiary p-4 rounded-md'>
              <div className='flex items-center justify-between'>
                <div>
                  <h4 className='text-white font-bold'>Quiz Application</h4>
                  <div className='text-xs text-secondary'>Oct 2024 – Feb 2025 · Java Swing, AWT</div>
                </div>
                <a href='https://github.com/Mohith737' target='_blank' rel='noreferrer' className='text-sm text-white underline'>GitHub</a>
              </div>
              <p className='mt-2 text-secondary text-sm'>Created a desktop quiz application with Java Swing and AWT, focusing on responsive event handling and an engaging UI.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className='text-white font-semibold'>Technical Skills & Interests</h3>
          <div className='mt-2 flex flex-wrap gap-2'>
            {['Java','Python','HTML','CSS','JavaScript','MySQL','MongoDB','AWS','Git/GitHub','DSA','Model Deployment'].map((s,i)=> (
              <span key={i} className='px-3 py-1 bg-tertiary text-white rounded-full text-sm'>{s}</span>
            ))}
          </div>
        </section>

        <section>
          <h3 className='text-white font-semibold'>Certifications</h3>
          <ul className='list-disc list-inside text-secondary mt-2'>
            <li>MongoDB Database Administration (Global Certification)</li>
            <li>AWS Cloud Foundation with Amazon Web Services</li>
          </ul>
        </section>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
