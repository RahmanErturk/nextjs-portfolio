'use client';

import { useTranslations } from 'next-intl';
import Navbar from '../../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const t = useTranslations('about');

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key="about"
          className="flex min-h-screen flex-col items-center justify-center p-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('title')}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('description')}
          </motion.p>
        </motion.main>
      </AnimatePresence>
    </>
  );
}