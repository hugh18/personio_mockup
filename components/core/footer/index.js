import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Appstore from '/components/design/appstore'
import CustomerService from '/components/design/customerservice'
import Helpful from '/components/design/helpful'
import Dropdown from "/components/core/dropdown";


const salesLinks = [
  { name: '+49 (0) 89 143 777499', href: 'tel:+49 (0) 89 143 777499', icon: '/assets/icons/phone.svg' },
  { name: 'hello@personio.com', href: 'mailto:hello@personio.com', icon: '/assets/icons/mail.svg' },
  { name: 'Contact Form', href: '/', icon: '/assets/icons/speech.svg' }
]
const careerLinks = [
  { name: 'careers@personio.com', href: 'mailto:careers@personio.com', icon: '/assets/icons/mail.svg' }
]
const legalLinks = [
  { name: 'General Terms and Conditions', href: '/' },
  { name: 'Privacy Policy', href: '/' },
  { name: 'Cookie Settings', href: '/' },
  { name: 'Legal Notice', href: '/' },
  { name: 'Site Map', href: '/' }
]
const companyLinks = [
  { name: 'About', href: '/' },
  { name: 'Press', href: '/' },
  { name: 'Careers', href: '/' }
]
const socialLinks = [
  { name: 'LinkedIn', href: 'https://de.linkedin.com/company/personio', icon: '/assets/icons/linkedin.svg' },
  { name: 'Facebook', href: 'https://www.facebook.com/personiohr/', icon: '/assets/icons/facebook.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/personio_hr/', icon: '/assets/icons/instagram.svg' },
  { name: 'Twitter', href: 'https://twitter.com/personiohr', icon: '/assets/icons/twitter.svg' }
]

const Footer = () => {
  return <footer className="px-4 lg:px-7 py-16 md:py-12">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      <div className="flex flex-col justify-between">
        <Link href="/">
          <a className="flex-shrink-0 mb-8">
            <Image src="/assets/design/logo.svg" width={152} height={48} alt="Personio Logo" />
          </a>
        </Link>
        <div className="sm:hidden">
          <Dropdown title="Contact Us" servicelinks />
          <Dropdown title="Helpful Links" helpfullinks />
        </div>
        <div className="hidden sm:block">
          <Appstore />
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col">
        <h4 className="font-bold text-tiny mb-5">Customer Service</h4>
        <CustomerService />
      </div>
       <div className="hidden sm:flex sm:flex-col">
        <h4 className="font-bold text-tiny mb-5">Contact sales.</h4>
        {salesLinks.map((link) =>
          <Link key={link.name} href={link.href}>
            <a className="flex items-center text-sm leading-5 mb-4 hover:underline">
              <Image src={link.icon} width={24} height={24} alt={link.name} />
              <span className="ml-2">{link.name}</span>
            </a>
          </Link>
        )}
      </div>
      <div className="hidden sm:flex sm:flex-col">
        <h4 className="font-bold text-tiny mb-5">Careers at Personio</h4>
        {careerLinks.map((link) =>
          <Link key={link.name} href={link.href}>
            <a className="flex items-center text-sm leading-5 mb-4 hover:underline">
              <Image src={link.icon} width={24} height={24} alt={link.name} />
              <span className="ml-2">{link.name}</span>
            </a>
          </Link>
        )}
      </div>
      <div className="hidden sm:flex sm:flex-col">
        <h4 className="font-bold text-tiny mb-5">Legal Links</h4>
        {legalLinks.map((link) =>
          <Link key={link.name} href={link.href}>
            <a className="text-sm leading-5 mb-4 hover:underline">
              {link.name}
            </a>
          </Link>
        )}
      </div>
      <div className="hidden sm:flex sm:flex-col">
        <h4 className="font-bold text-tiny mb-5">Informationen</h4>
        <Helpful />
        {/* {informationenLinks.map((link) =>
          <Link key={link.name} href={link.href}>
            <a className="text-sm leading-5 mb-4 hover:underline">
              {link.name}
            </a>
          </Link>
        )} */}
      </div>
      <div className="hidden sm:flex sm:flex-col">
        <h4 className="font-bold text-tiny mb-5">Company</h4>
        {companyLinks.map((link) =>
          <Link key={link.name} href={link.href}>
            <a className="text-sm leading-5 mb-4 hover:underline">
              {link.name}
            </a>
          </Link>
        )}
      </div>
      <div className="pb-3 border-solid border-b border-grey sm:border-none sm:flex sm:flex-col">
        <h4 className="hidden sm:block font-bold text-tiny mb-5">Connect</h4>
        <p className="text-xs mb-3 opacity-50 sm:hidden">Connect</p>
        <div className="w-60 grid grid-cols-2 sm:flex-col sm:grid-cols-none sm:flex sm:w-full">
            {socialLinks.map((link) =>
            <a key={link.name} href={link.href} target="_blank" rel="noreferrer" className="flex items-center text-sm leading-5 mb-4 hover:underline">
              <Image src={link.icon} width={24} height={24} alt={link.name} />
              <span className="ml-2">{link.name}</span>
            </a>
          )}
        </div>
      </div>
      <div className="block sm:hidden">
          <Appstore />
      </div>
      <div className="hidden md:col-span-3 lg:col-span-1 lg:flex md:items-center">
        <p className="font-bold text-xs">&copy; 2021 Personio GmbH</p>
      </div>
      <div className="sm:col-span-2 md:col-span-3">
        <p className="text-xs mb-2 opacity-50 sm:hidden">Credentials</p>
        <a target="_blank" href="/" rel="noopener noreferrer" className="mr-5">
          <Image src="/assets/design/kununu-open-company.svg" width={92} height={64} quality={100} alt="Kununu Open Company" />
        </a>
        <a target="_blank" href="/" rel="noopener noreferrer" className="mr-5">
          <Image src="/assets/design/kununu-top-company.svg" width={92} height={64} quality={100} alt="Kununu Top Company" />
        </a>
        <a target="_blank" href="https://wtca.lfca.earth/e/personio" rel="noopener noreferrer" className="mr-5">
            <Image src="/assets/design/actnow.svg" width={92} height={64} quality={100} alt="Act Now" />
          </a>
          <a target="_blank" href="https://www.planetly.org/en/personio/" rel="noopener noreferrer">
            <Image src="/assets/design/planetly.svg" width={92} height={64} quality={100} alt="Planetly" />
          </a>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:hidden">
        {legalLinks.map((link) =>
          <Link key={link.name} href={link.href}>
            <a className="text-xs hover:underline">
              {link.name}
            </a>
          </Link>
        )}
      </div>
      <div className="flex items-center lg:hidden">
        <p className="text-xs">&copy; 2021 Personio GmbH</p>
      </div>
    </div>
    
  </footer>;
};

export default Footer;
