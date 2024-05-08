// import React from 'react'
import myPhoto from '../../../assets/my_cv_photo1.jpg';
// import { CiFaceSmile } from 'react-icons/ci';

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="w-full h-full bg-white page-shadow">
        <div className="px-10 space-y-4">
          {/* image container */}
          <div>
            <img
              src={myPhoto}
              alt="my photo"
              className="w-[250px] mx-auto h-[400px] py-2 rounded-lg"
            />
          </div>
          {/* text container */}
          <div className="text-black">
            <div className="space-y-3">
              <p className="uppercase text-slate-500"> Hello </p>
              <p className="text-3xl md:text-6xl font-bold text-slate-500">
                I am Nataliia
              </p>
              <p className="text-slate-500 text-left">Full Stack Developer</p>
              <p className="text-slate-500 text-sm">
                I am Full-Stack Software Engineer with experience in JavaScript:
                ES6+, AJAX and API - REST and GraphQL, Next.js, React, OAuth. I
                test my projects using TypeScript, Cypress, Vitest, Vite. My
                projects based on Node.js: Vanilla and Express, using databases:
                SQL - Postgres, NoSQL - MongoDB with Mongoose.js, Redis,
                Firebase. In my work I use HTML, CSS 3: responsive design,
                Flexbox and CSS Grid, preprocessors (SASS) and CSS frameworks.
              </p>

              {/* button links */}
              <div className="flex  gap-6">
                <button className="  mt-4">
                  <a
                    href="/Nataliia Tsirul CV.pdf"
                    target="_blank"
                    className="text-white font-bold bg-primary rounded-md py-2 px-6 hover:bg-primary/70"
                  >
                    Download CV
                  </a>
                </button>
                <button className="mt-4">
                  <a
                    href="mailto:tcirulnatalya@gmail.com"
                    className="text-primary font-bold bg-secondary border-[2px] rounded-md py-2 px-6 hover:bg-primary hover:text-white"
                  >
                    Contact Me
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
