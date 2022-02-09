import React from 'react';
import Image from 'next/image'
import Button from '/components/elements/button'

const logosListing = [
  { logo: '/assets/design/logo-urban.svg', alt: 'Urban'},
  { logo: '/assets/design/logo-verivox.svg', alt: 'Verivox'},
  { logo: '/assets/design/logo-fritz.svg', alt: 'Fritz'},
  { logo: '/assets/design/logo-aboutyou.svg', alt: 'About You'},
  { logo: '/assets/design/logo-heidelberg.svg', alt: 'Heidelberg'},
  { logo: '/assets/design/logo-urban.svg', alt: 'Urban'}
]

const Hero = () => {
  return <article className="relative">
    <div className="flex justify-between">
      <div className="flex flex-wrap">
        <div className="pb-14 pt-14 lg:pb-60 lg:pt-44 pl-4 pr-4 lg:pl-7 lg:pr-20 xl:pl-7 xl:pr-44 w-full lg:w-1/2">
          <h1 className="font-heading font-bold text-4xl md:text-7xl leading-10 md:leading-none mb-5 md:mb-6">It&apos;s Time To Unlock HR&apos;s Productive Potential</h1>
          <p className="text-tiny md:text-lg mb-7">Personio is Europe&apos;s leading HR Software for SMEs - your one-stop HR solution with automated processes, seamless integrations, and data-driven insights. Try it today.</p>
          <Button title="Book Now" />
        </div>
        <div className="relative w-full h-96 lg:h-full lg:w-1/2">
          <Image src="/assets/design/hero.jpg" alt="Hero Image" layout="fill" objectFit="cover" priority quality={85} />
        </div>
      </div>
    </div>
    <div className="hidden lg:grid gap-12 grid-cols-6 pl-4 pr-4 lg:pl-7 lg:pr-7 mt-3">
      {logosListing.map((card, index) =>
        <Image key={index} src={card.logo} width={860} height={420} quality="100" alt={card.alt} />
      )}
    </div>
  </article>;
};

export default Hero;
