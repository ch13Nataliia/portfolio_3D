// import React from 'react'

import SkillsLevel from './SkillsLevel';

const SkillsPage = () => {
  return (
    <div className="h-full page-shadow bg-white px-10">
      <div className="  ">
        {/* heading */}
        <div>
          <div className="relative ">
          <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 ">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl text-black">
              Skills
            </h1>
          </div>
        </div>
        {/* skills */}
        <div className='space-y-6'>
          <SkillsLevel skillName="JavaScript" percentage={'90%'} />
          <SkillsLevel skillName="Node.js" percentage="75%" />
          <SkillsLevel skillName="React" percentage="80%" />
          <SkillsLevel skillName="Next.js" percentage="80%" />
          <SkillsLevel skillName="Tailwindcss" percentage="80%" />
          <SkillsLevel skillName="MUI" percentage="80%" />
          <SkillsLevel skillName="MongoDB" percentage="50%" />
          <SkillsLevel skillName="SQL" percentage="30%" />
          <SkillsLevel skillName="Hygraph" percentage="50%" />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
