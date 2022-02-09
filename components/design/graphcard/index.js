import React from 'react';
import Image from 'next/image'

const GraphCard = (props) => {
  return <section className="md:flex md:items-end">
    <div className="xl:flex xl:items-center">
      <div className="relative flex justify-end md:flex-shrink-0 lg:w-56 md:justify-start mb-6 md:mr-10">
        <Image src={props.graphic} alt="{props.heading}" width={props.width} height={props.height} quality={80} />
      </div>
      <div>
        <h3 className="font-semibold text-xl md:text-2xl mb-2 md:mb-5">{props.heading}</h3>
        <p className="text-tiny md:text-base">{props.description}</p>
      </div>
    </div>
  </section>;
};

export default GraphCard;
