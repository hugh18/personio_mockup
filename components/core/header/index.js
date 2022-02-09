import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {

  // Main Navigation Links
  const navigationLinks = [
    { name: 'PWA', href: '/people-workflow-automation' },
    { name: 'Products', href: '/product' },
    { name: 'Why Personio', href: '/why-personio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Personio', href: '/about-personio' },
    { name: 'Resources and Support', href: '/resources' }
  ]

  return <header>
    <div className="px-4 lg:px-7 hidden md:flex justify-end border-solid border-b border-grey">
      <div className="flex py-2">
        <Link href="/de">
          <a className="flex items-center text-alt leading-5 pl-5 ml-5 hover:underline">
            <Image src="/assets/icons/globe.svg" width={24} height={24} alt="DE" />
            <span className="ml-2">DE</span>
          </a>
        </Link>
         <Link href="/">
          <a className="flex items-center text-alt leading-5 border-solid border-l border-black pl-5 ml-5 hover:underline">
            <Image src="/assets/icons/user.svg" width={24} height={24} alt="Login" />
            <span className="ml-2">Login</span>
          </a>
        </Link>
      </div>
    </div>
    <div className="pl-4 pr-4 lg:pl-7 lg:pr-7 xl:pl-7 xl:pr-0 flex justify-between">
      <div className="flex items-center">
          <Link href="/">
            <a className="flex-shrink-0 mr-4 py-4">
              <Image src="/assets/design/logo.svg" width={126} height={40} alt="Personio Logo" />
            </a>
          </Link>
          <nav className="hidden xl:flex">
              {navigationLinks.map((link) =>
                <Link key={link.name} href={link.href}>
                  <a className="flex items-center text-alt leading-5 ml-6 hover:underline">
                    <span className="mr-2">{link.name}</span>
                    <Image src="/assets/icons/arrow-down.svg" width={8} height={8} alt="Arrow" />
                  </a>
                </Link>
              )}
          </nav>
      </div>
      <div className="flex items-center xl:hidden">
        <Image src="/assets/icons/menu.svg" width={32} height={32} alt="Menu" />
      </div>
      <div className="hidden xl:flex">
        <Link href="/">
          <a className="flex items-center text-alt leading-5 pl-5 ml-5 hover:underline">
            <Image src="/assets/icons/speech.svg" width={20} height={20} alt="Contact Sales" />
            <span className="ml-2">Contact Sales</span>
          </a>
        </Link>
        <Link href="/webdemo">
          <a className="flex items-center text-alt leading-5 ml-5 py-7 px-4 bg-yellow hover:underline">
            <span className="mr-3 font-bold">Book Your Demo</span>
            <Image src="/assets/icons/arrow-circle-right.svg" width={24} height={24} alt="Book Your Demo" />
          </a>
        </Link>
      </div>
    </div>
  </header>;
};

export default Header;
