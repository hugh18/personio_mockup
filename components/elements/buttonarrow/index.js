import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const ButtonArrow = (props) => {
  return <button className="text-tiny font-bold hover:underline">
    {props.title}
    <span className="relative mx-2">
      <Image src="/assets/icons/arrow-right.svg" alt="Arrow" height={11} width={11} />
    </span>
  </button>;
};

export default ButtonArrow;
