import { forwardRef } from 'react';

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
      <div className="text-white  h-full">{props.children}</div>
      <p className="text-xs text-end text-white pb-4 cursor-pointer">
        Page number: {props.number}
      </p>
    </div>
  );
});

export default Page;
