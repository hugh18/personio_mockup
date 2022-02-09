import React from 'react';
import Image from 'next/image'
import ButtonArrow from '/components/elements/buttonarrow'
import Accordion from "/components/core/accordion";

const Banner = () => {
  return <article className="bg-blue py-28 md:py-48">
      <div className="container">
        <h2 className="text-center font-bold font-heading text-3xl md:text-6xl leading-8 md:leading-none mb-20 md:mb-16">All Your HR Processes <br/>in one Tool</h2>
        <div className="flex items-start">
            <div className="hidden lg:flex w-7/12">
              <Image src="/assets/design/application-list.png" alt="Application List Chart" width={1440} height={916} quality={100} />
            </div>
            <div className="lg:pl-8 w-full lg:w-5/12">
              <Accordion title="Preliminary Payroll" link="/" content="Use personal and transactional data from personnel files for payroll, saving time with automated updates and processes." />
              <Accordion title="HR Management" link="/" content="Use personal and transactional data from personnel files for payroll, saving time with automated updates and processes." />
              <Accordion title="Recruiting" link="/" content="Use personal and transactional data from personnel files for payroll, saving time with automated updates and processes." />
            </div>
        </div>
        <div className="text-center mt-12 md:mt-10">
          <ButtonArrow title="All Features" />
        </div>
      </div>
  </article>;
};

export default Banner;
