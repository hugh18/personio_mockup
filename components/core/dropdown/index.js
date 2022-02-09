import { useState } from "react";
import Link from 'next/link'
import CustomerService from '/components/design/customerservice'
import Helpful from '/components/design/helpful'
import Image from 'next/image'

export default function Dropdown(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };
  
  return (
    <div className="border-solid border-t border-grey py-7">
      <button className="flex w-full justify-between" onClick={toggle}>
        <p className="font-semibold text-lg md:text-xl">{props.title}</p>
        <div className={`${isShowing ? "rotate-180" : null }`}><Image src="/assets/icons/arrow-down.svg" width={12} height={12} alt="Arrow Down" /></div>
      </button>
      <div className="mt-3 mt:mb-5" style={{ display: isShowing ? "block" : "none" }}>
        {props.servicelinks ? <CustomerService /> : <Helpful /> }
      </div>
    </div>
  );
}