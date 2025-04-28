'use client';

import { useTranslations } from 'next-intl';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function Home() {
  const t = useTranslations('home');
  const { theme } = useTheme();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key="home"
          className="flex min-h-screen flex-col items-center justify-center p-4 bg-background"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl font-bold text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('title')}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('subtitle')}
          </motion.p>
          <motion.p
            className="mt-4 text-lg text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Current Theme: {theme}
          </motion.p>
        </motion.main>
      </AnimatePresence>
    </>
  );
}