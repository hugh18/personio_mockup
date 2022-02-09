import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const informationenLinks = [
  { name: 'FAQ', href: '/' },
  { name: 'Data Protection and IT Security', href: '/' },
  { name: 'Help Centre', href: '/' },
  { name: 'Implementation', href: '/' },
  { name: 'Product Updates', href: '/' },
  { name: 'Customer Newslette', href: '/' },
  { name: 'Developer Hub', href: '/' },
  { name: 'HR Software', href: '/' }
]

const Helpful = (props) => {
  return <section>
    {informationenLinks.map((link) =>
      <Link key={link.name} href={link.href}>
        <a className="text-sm block leading-5 mb-4 hover:underline">
          {link.name}
        </a>
      </Link>
    )}
  </section>;
};

export default Helpful;
