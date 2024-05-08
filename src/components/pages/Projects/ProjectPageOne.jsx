// import React from 'react'
import ShopApp from '../../../assets/shop.jpg';

const ProjectData = [
  {
    id: 1,
    title: 'Shop',
    subTitle: 'React||MongoDB||Exspress||Node.js',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dignissimos illo sequi consectetur aperiam, provident aliquam nihil, voluptatibus quis, numquam eligendi odit ex fugit nostrum! Porro fuga dignissimos fugiat in!',
    image: ShopApp,
    gitLink: 'https://github.com/ch13Nataliia/shop-app',
    liveLink: 'https://shop-app-sigma.vercel.app/',
  },
  {
    id: 2,
    title: 'Shop',
    subTitle: 'React||MongoDB||Exspress||Node.js',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dignissimos illo sequi consectetur aperiam, provident aliquam nihil, voluptatibus quis, numquam eligendi odit ex fugit nostrum! Porro fuga dignissimos fugiat in!',
    image: ShopApp,
    gitLink: 'https://github.com/ch13Nataliia/shop-app',
    liveLink: 'https://shop-app-sigma.vercel.app/',
  },
];
const ProjectPageOne = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
    {/* heading */}
    <div className="space-y-4 flex flex-col items-center">
          <h1 className="text-black inline-block text-3xl text-center font-bold md-3 border-b-2 border-primary pb-1">
            Projects
          </h1>
          <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      <div className="grid grid-cols-2 gap-6 ">
        {ProjectData.map((data) => (
          <div 
          key={data.id}
          className={`${data.image} p-3 min-h-[180px] rounded-lg text-slate-500 shadow-md`}>
            <div className="p-3 space-y-3">
              <img src={data.image} />

              <h3 className='text-center font-bold uppercase'>{data.title}</h3>
              <h5 className='text-sm'>{data.subTitle}</h5>
              <p className='text-sm text-center'>{data.description}</p>
            </div>
            <div className="flex gap-6 items-center justify-center">
              <button className="text-white font-bold bg-primary rounded-md py-2 px-4 hover:bg-primary/70">
                <a href={data.gitLink}>GitHub</a>
              </button>
              <button className="text-primary font-bold bg-secondary border-[2px] rounded-md py-2 px-4 hover:bg-primary hover:text-white">
                <a href={data.liveLink}>Live</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPageOne;
