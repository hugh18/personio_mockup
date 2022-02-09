import React from 'react';
import Image from 'next/image'
import ButtonArrow from '/components/elements/buttonarrow'

const Introduction = () => {
  return <article className="py-28 md:py-40">
      <div className="container">
        <div className="lg:flex">
          <div className="w-full lg:w-5/12">
            <div className="w-full xl:w-3/4 mb-10 lg:mb-40">
              <h2 className="font-bold font-heading text-2xl md:text-4xl leading-8 md:leading-10 mb-5 md:mb-8">H.U.G <br/> Your HR Happening</h2>
              <p className="mb-6 md:mb-8">A digital-first (for now), hybrid conference that prepares HR for the future of work. Invigorating content, a range of formats, and plenty of opportunities to connect. The future of HR is happening right here.</p>
              <ButtonArrow title="Sign Up Here" />
            </div>
          </div>
          <div className="relative w-full lg:w-7/12 ml-0 lg:ml-20">
            <a href="https://www.youtube.com/watch?v=v4f6wiCpBPM" rel="noreferrer" target="_blank" className="flex items-center justify-center absolute w-9 md:w-full md:h-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Image src="/assets/icons/play.svg" height={56} width={56} alt="Play Icon" />
            </a>
            <div className="relative h-80 lg:h-full">
              <Image src="/assets/design/intro-pic.jpg" alt="H.U.G Your HR Happening" layout="fill" objectFit="cover" quality={80} />
            </div>
          </div>
        </div>
      </div>
  </article>;
};

export default Introduction;
