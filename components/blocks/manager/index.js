import React from 'react';
import Image from 'next/image'

const Manager = () => {
  return <article className="relative py-28 lg:my-40">
      <div className="absolute z-10 lg:z-0 right-0 bottom-0 lg:top-0 bg-blue w-full lg:w-5/12 h-1/3 lg:h-2/3">
        {/* Blue Box */}
      </div>
      <div className="container">
        <div className="relative z-20 lg:z-0 grid lg:grid-cols-2 gap-10">
          <div className="max-w-xs md:max-w-lg g:pr-24 lg:pb-52">
            <h2 className="font-bold font-heading text-2xl md:text-4xl leading-8 md:leading-10 mb-5 md:mb-8">From HR Manager to Strategic Partner</h2>
            <p className="mb-6 md:mb-8">Whether it s employer branding, onboarding, or organizational development you could do so much for your employees, but you can only be truly strategic once HR operations are running smoothly. Set a course right now for longterm corporate success.</p>
          </div>
          <div className="relative max-w-xs md:max-w-lg lg:max-w-full w-full h-80 lg:h-full lg:mt-12">
            <Image src="/assets/design/manager.jpg" alt="From HR Manager to Strategic Partner" layout="fill" objectFit="cover" quality={90} />
          </div>
        </div>
      </div>
  </article>;
};

export default Manager;
