import React from 'react';
import Link from 'next/link'

const Newsletter = (props) => {
  return <div className="lg:flex lg:items-center lg:justify-center">
      <h2 className="font-bold font-heading leading-tight text-2xl md:text-3xl mb-10 lg:mb-0">HR Insights, Delivered Right To Your Inbox</h2>
      <form method="post" className="md:flex md:items-center">
        <div className="w-full lg:w-96 lg:ml-10">
          <input className="focus:border-blue focus:outline-0 rounded-none w-full text-tiny bg-grey border-solid border-b border-darkgrey px-4 p-3" type="text" name="Email Address" placeholder="Enter your email address" required />
        </div>
        <button className="w-full md:w-auto my-5 md:ml-5 bg-yellow py-3 px-1 px-12 font-bold text-tiny hover:underline" type="submit">Send</button>
      </form>
    </div>;
};

export default Newsletter;
