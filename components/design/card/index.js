import React from 'react';
import Link from 'next/link'

const Card = (props) => {
  return <section className="border-solid border-t border-black pt-6 md:pt-8 pb-8 md:pb-11">
    <h3 className="font-semibold text-lg md:text-xl mb-5">{props.heading}</h3>
    <p className="text-tiny md:text-lg">{props.description}</p>
  </section>;
};

export default Card;
