import { useState } from "react";
import Link from 'next/link'

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="border-solid border-t border-black py-7">
      <button className="flex w-full justify-between" onClick={toggle}>
        <p className="font-semibold text-lg md:text-xl">{props.title}</p>
        <p className="font-semibold text-lg md:text-xl">{isShowing ? "-" : "+" }</p>
      </button>
      <div className="mt-3 mt:mb-5" style={{ display: isShowing ? "block" : "none" }}>
        <p>{props.content}</p>
        <div className="flex justify-end">
          <Link href={props.link}>
            <a className="font-semibold text-tiny hover:underline mt-5">
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
