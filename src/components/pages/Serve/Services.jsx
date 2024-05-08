// import React from 'react'

import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <div className="space-y-4 flex flex-col items-center">
        <h1 className="text-black inline-block text-3xl text-center font-bold md-3 border-b-2 border-primary pb-1">
          Services
        </h1>
        <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe illo
          sequi porro quo ullam necessitatibus atque quod quam. Autem, voluptas
          corporis? Nostrum consequatur reprehenderit incidunt corrupti, nemo
          explicabo non obcaecati!
        </p>
      </div>
      {/* Swrvices Card*/}
      <div><ServicesBox /></div>
    </div>
  );
};

export default Services;
