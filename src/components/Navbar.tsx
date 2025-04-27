'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFontSize } from '../context/FontSizeContext';

const Navbar = () => {
  const t = useTranslations('navigation');
  const ta = useTranslations('accessibility');
  const locale = useLocale();
  const { setTheme, theme } = useTheme();
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/projects', label: t('projects') },
    { href: '/skills', label: t('skills') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav className="bg-primary text-white p-4 sticky top-0 z-50" aria-label="Main navigation">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold" aria-label="Portfolio Home">
          Portfolio
        </Link>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <ul
          id="mobile-menu"
          className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-primary md:bg-transparent p-4 md:p-0`}
        >
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="my-2 md:my-0"
            >
              <Link
                href={`/${locale}${item.href}`}
                className="block py-2 px-4 hover:bg-secondary rounded focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="hidden md:flex space-x-4 items-center">
          <select
            onChange={(e) => window.location.assign(`/${e.target.value}`)}
            value={locale}
            className="bg-secondary text-white p-2 rounded"
            aria-label={ta('switchLanguage')}
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="tr">Türkçe</option>
          </select>
          <select
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
            className="bg-secondary text-white p-2 rounded"
            aria-label={ta('switchTheme')}
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <div className="flex space-x-2">
            <button
              onClick={decreaseFontSize}
              className="bg-secondary text-white p-2 rounded"
              aria-label={ta('decreaseFontSize')}
              disabled={fontSize === 'sm'}
            >
              A-
            </button>
            <button
              onClick={increaseFontSize}
              className="bg-secondary text-white p-2 rounded"
              aria-label={ta('increaseFontSize')}
              disabled={fontSize === 'xl'}
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;