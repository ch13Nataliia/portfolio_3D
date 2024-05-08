import React from 'react';
import { AiFillLayout } from 'react-icons/ai';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { MdSecurity } from 'react-icons/md';
import { RxDividerVertical } from 'react-icons/rx';

const ServicesData = [
  {
    id:1,
    name: 'UX research',
    description: 'Lorem ipsum dolor sit amet.',
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: 'bg-blue-500/70',
  },
  {
    id:2,
    name: 'App Development',
    description: 'Lorem ipsum dolor sit.',
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: 'bg-lime-500/70',
  },
  {
    id:3,
    name: 'Web App Development',
    description: 'Lorem ipsum dolor sit amet.',
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: 'bg-fuchsia-500/70',
  },
  {
    id:4,
    name: 'Security',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    icon: <MdSecurity className="text-4xl" />,
    bgColor: 'bg-orange-500/70',
  },
];

const ServicesBox = () => {
  return (
    <div className='h-full mt-10 text-white'>
      <div className='grid grid-cols-2 gap-6'>
        {ServicesData.map((data) => (
          <div
          
          key={data.id} className={`${data.bgColor} p-3 min-h-[180px] rounded-lg`}>
            <div className='p-3 space-y-3'>
              {data.icon}
              <h1>{data.name}</h1>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
