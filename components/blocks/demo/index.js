import React from 'react';
import Form from '/components/design/demoform'
import Newsletter from '/components/design/newsletter'

const Demo = () => {
  return <article className="bg-grey pt-28 pb-12 md:pt-48 md:pb-12">
      <div className="container">
        <div className="grid gap-10 lg:gap-0 lg:grid-cols-2 mb-32">
          <div className="lg:pr-20 xl:pr-40">
            <h2 className="font-bold font-heading text-2xl md:text-4xl leading-8 md:leading-10 mb-5 md:mb-8">Your Personal Webdemo</h2>
            <p className="mb-6 md:mb-8">Get to know Personio! In just 30 minutes, our product experts will guide you through the solution and answer any questions you have.</p>
            <ul className="list-disc ml-6">
              <li>Introduction to all product features</li>
              <li>Tailored to your business priorities</li>
              <li>Answers to any questions you have</li>
            </ul>
          </div>
          <div className="bg-white">
            <Form />
          </div>
        </div>
        <Newsletter />
      </div>
  </article>;
};

export default Demo;
