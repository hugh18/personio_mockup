import React from 'react';
import Image from 'next/image'

const marginAuto = 'mx-auto';
const largeText = 'text-xl md:text-2xl'
const largePadding = 'md:px-12 md:py-16'

const Testimonial = (props) => {
  return <section className={`${props.center == true ? marginAuto : null} ${props.large == true ? largePadding : null} bg-white border-solid border-2 border-darkgrey px-8 py-10 max-w-xl`}>
    <div className="w-7 mb-7">
        <Image src="/assets/icons/quote.svg" alt="Quote Icon" width={35} height={30} quality={80} />
    </div>
    <p className={`${props.large == true ? largeText : 'text-base'} md:leading-normal mb-7`}>{props.quote}</p>
    <div className="flex items-center">
        <div className="w-14 shrink-0 mr-5">
            <Image src={props.photo} alt={props.name} width={112} height={112} quality={80} />
        </div>
        <div>
            <h3 className="font-bold text-base leading-tight">
                {props.name},
                <span className="block">{props.position}</span>
            </h3>
        </div>
    </div>
    {props.logo && 
    <div className="md:mt-28">
        <Image src={props.logo} alt={props.company} width={175} height={95} quality={80} />
    </div>}
  </section>;
};

export default Testimonial;
