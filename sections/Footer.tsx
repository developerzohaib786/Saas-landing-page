import React from 'react'
import Logo from '@/assets/images/logo.svg';
import Image from 'next/image';

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" }
];

const Footer = () => {
  return (
    <section className='py-16 border-t border-white/10'>
      <div className="container">
        <div className='flex flex-col items-center gap-8'>
          <div>
            <Image src={Logo} alt='Logo' style={{ filter: 'invert(83%) sepia(48%) saturate(546%) hue-rotate(35deg) brightness(105%) contrast(89%)' }} />
          </div>
          <nav className='flex gap-6'>
            {footerLinks.map((i) =>
              <a
                href={i.href}
                key={i.label}
                className='text-white/50 text-sm hover:text-lime-400 transition-colors duration-200'
              >
                {i.label}
              </a>
            )}
          </nav>
          <p className='text-white/30 text-sm'>
            &copy; {new Date().getFullYear()} Layers, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer