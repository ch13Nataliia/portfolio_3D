// import React from 'react'

const Cover = ({ coverImg, title, subtitle }) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '600px',
  };
  return (
    <div className="h-full" style={coverImgStyle}>
      <div className="h-full flex flex-col  py-14 items-center gap-6">
        <h1 className="text-primary text-6xl font-bold font-outline-2">{subtitle}</h1>
       <br />
        <h2 className="text-primary text-4xl font-bold font-outline-2">{title}</h2>
      </div>
    </div>
  );
};

export default Cover;
