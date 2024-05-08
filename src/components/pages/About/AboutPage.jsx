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
          <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* details  */}
        <div className="text-slate-500 mt-14 py-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            tenetur, at aut veritatis optio, corrupti nam dicta sit
            necessitatibus quidem voluptates eligendi ullam laudantium ad
            tempore error hic facere voluptatum?
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis saepe
            repudiandae inventore molestiae, explicabo quo commodi repellendus
            impedit voluptates a, nam accusantium obcaecati deleniti voluptatem
            tempore. Eligendi eum commodi culpa.
          </p>
        </div>
        {/* social links */}
        <div className=" flex text-slate-500 gap-6">
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
        </div>
        {/* button links */}
        <div className="flex  gap-6">
          <button className="  mt-10">
            <a
              href="#"
              className="text-white font-bold bg-primary rounded-md py-2 px-6 hover:bg-primary/70"
            >
              Download CV
            </a>
          </button>
          <button className="mt-10">
            <a
              href="#"
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
