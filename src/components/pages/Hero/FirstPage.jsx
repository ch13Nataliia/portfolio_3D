// import React from 'react'
import myPhoto from '../../../assets/my_cv_photo1.jpg';
const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="w-full h-full bg-secondary page-shadow">
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
              <p className="uppercase">Hi :) </p>
              <p className="text-3xl md:text-6xl font-bold text-black/80">
                I am Nataliia
              </p>
              <p className="text-black/75 text-left">Full Stack Developer</p>
              <p className="text-black/75">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                labore sint autem quos incidunt magnam provident modi voluptate
                eaque reprehenderit libero, rem quisquam porro accusamus dolor
                dolore sequi cum excepturi.
              </p>
              <a
                className="inline-block primary-btn"
                href="mailto:tcirulnatalya@gmail.com"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
