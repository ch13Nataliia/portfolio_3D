// import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
const AboutPage = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      <div>
        {/* heading */}
        <div className="space-y-4 flex flex-col items-center">
          <h1 className="text-black inline-block text-3xl text-center font-bold md-3 border-b-2 border-primary pb-1">
            About Me
          </h1>
        </div>
        {/* details  */}
        <div className="text-slate-500 mt-14 py-8">
          <p>
            The diversity in my experience has served me well thus far. My
            commitment to maintaining high standards and my ability to work
            effectively both independently and within a team make me a strong
            candidate for any potential role.
          </p>
          <br />
          <p>
            Having developed a solid foundation in customer service, I am eager
            to transition into a role where I can apply my passion for software
            development and my knowledge of technologies such as JavaScript,
            HTML5, and CSS3. I have actively pursued learning opportunities to
            expand my skill set. I am excited about the prospect of working with
            emerging technologies like React, Nodejs, and Next. My dedication to
            continuous learning and my attention to detail align well with the
            qualities and skills desired for my profession.
          </p>
          <br />
          <p>
            I am enthusiastic about opportunities that can further develop my
            skills through work. I look forward to discussing how my experience,
            skills and values can benefit your company.
          </p>
        </div>
        {/* social links */}
        <div className=" flex text-slate-500 gap-6 justify-end">
        <a href="https://github.com/ch13Nataliia" target="_blank"><AiFillGithub className="social-btn"  /></a>
        <a href="https://www.linkedin.com/in/nataliia-tsirul-242079168/" target="_blank"> <AiFillLinkedin className="social-btn" /></a>
          
         
        </div>
        {/* button links */}
        <div className="flex justify-end gap-6">
          <button className="  mt-10">
            <a
              href="/Nataliia Tsirul CV.pdf"
              target="_blank"
              className="text-white font-bold bg-primary rounded-md py-2 px-6 hover:bg-primary/70"
            >
              Download CV
            </a>
          </button>
          <button className="mt-10">
            <a
              href="mailto:tcirulnatalya@gmail.com"
              target="_blank"
              className="text-primary font-bold bg-secondary border-[2px] rounded-md py-2 px-6 hover:bg-primary hover:text-white"
            >
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
