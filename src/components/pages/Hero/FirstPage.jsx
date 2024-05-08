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
              <p className="uppercase text-slate-500"> Hello  </p>
              <p className="text-3xl md:text-6xl font-bold text-slate-500">
                I am Nataliia
              </p>
              <p className="text-slate-500 text-left">Full Stack Developer</p>
              <p className="text-slate-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                labore sint autem quos incidunt magnam provident modi voluptate
                eaque reprehenderit libero, rem quisquam porro accusamus dolor
                dolore sequi cum excepturi.
              </p>
       
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
