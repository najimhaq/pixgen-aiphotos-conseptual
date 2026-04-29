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
    <header className='border-b bg-white/80 backdrop-blur-md sticky top-0 z-50'>
      <nav className='flex justify-between items-center py-4 px-6 max-w-7xl mx-auto w-full'>
        {/* Logo */}
        <div className='flex gap-2 items-center'>
          <Image
            src='/logo.png'
            alt='logo'
            loading='eager'
            width={32}
            height={32}
            className='object-cover h-auto w-auto'
          />
          <h3 className='font-extrabold text-xl tracking-tight text-gray-900'>
            pixgen.
          </h3>
        </div>

        {/* Navigation Links */}
        <ul className='flex items-center gap-6 text-sm font-medium'>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors duration-200 ${
                  isActivePath(href)
                    ? 'text-pink-600 border-b-2 border-pink-600 pb-1'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Links */}
        <div className='flex gap-4'>
          <ul className='flex items-center gap-4 text-sm font-medium'>
            {authLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className='px-3 py-1 rounded-md transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
