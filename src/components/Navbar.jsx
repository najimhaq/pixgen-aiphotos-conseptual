'use client';

import useActivePath from '@/app/utils/useActivePath';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const isActivePath = useActivePath();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/all-photos', label: 'All Photos' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/profile', label: 'Profile' },
  ];

  const authLinks = [
    { href: '/signup', label: 'Sign Up' },
    { href: '/signin', label: 'Sign In' },
  ];

  return (
    <header className='sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md'>
      <nav className='mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4'>
        <div className='flex items-center gap-2'>
          <Image
            src='/logo.png'
            alt='logo'
            priority
            width={32}
            height={32}
            className='h-auto w-auto object-cover'
          />
          <h3 className='text-xl font-extrabold tracking-tight text-gray-900'>
            pixgen.
          </h3>
        </div>

        <ul className='flex items-center gap-6 text-sm font-medium'>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors duration-200 ${
                  isActivePath(href)
                    ? 'border-b-2 border-pink-600 pb-1 text-pink-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className='flex items-center gap-4 text-sm font-medium'>
          {authLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className='rounded-md px-3 py-1 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600'
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
