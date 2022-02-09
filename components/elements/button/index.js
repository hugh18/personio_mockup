import React from 'react';
import Link from 'next/link'

const Button = (props) => {
  return <button className="bg-yellow w-full md:w-max py-3 px-3 md:px-12 font-bold text-tiny hover:underline">
    {props.title}
  </button>;
};

export default Button;
