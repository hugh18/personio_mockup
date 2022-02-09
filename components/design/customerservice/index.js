import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  { name: '+49 (0) 89 143 777499', href: 'tel:+49 (0) 89 143 777499', icon: '/assets/icons/phone.svg' },
  { name: '+49 (0) 89 143 777412 (EN)', href: 'tel:+49 (0) 89 143 777412', icon: '/assets/icons/globe.svg' },
  { name: 'Contact Form', href: '/', icon: '/assets/icons/speech.svg' }
]

const CustomerService = (props) => {
  return <section>
    {serviceLinks.map((link) =>
      <Link key={link.name} href={link.href}>
        <a className="flex items-center text-sm leading-5 mb-4 hover:underline">
          <Image src={link.icon} width={24} height={24} alt={link.name} />
          <span className="ml-2">{link.name}</span>
        </a>
      </Link>
    )}
  </section>;
};

export default CustomerService;
