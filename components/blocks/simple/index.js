import React from 'react';
import Image from 'next/image'
import Button from '/components/elements/button'

const Simple = () => {
  return <article className="mt-28 md:mt-40 mb-0 md:mb-20 lg:mb-40">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row md:items-center">
          <div className="relative w-full xl:w-9/12">
            <Image src="/assets/design/timeline.png" alt="We Make Core HR As Simple As Possible" width={1752} height={1212} quality={80} />
          </div>
          <div className="w-full lg:w-6/12 xl:w-4/12 xl:pr-10 mb-10">
            <h2 className="font-bold font-heading text-2xl md:text-4xl leading-8 md:leading-10 mb-5 md:mb-8">We Make Core HR As Simple As Possible</h2>
            <p className="mb-6 md:mb-8">Let&apos;s be honest, calculating absence entitlements isn&apos;t fun but it has to be done. Personio makes the core HR stuff that has to happen in every company as simple and efficient as possible. Because if you get them wrong - or spend too much time getting them right - your strategic HR initiatives will never get off the ground.</p>
            <Button title="Book A Demo" />
          </div>
        </div>
      </div>
  </article>;
};

export default Simple;
