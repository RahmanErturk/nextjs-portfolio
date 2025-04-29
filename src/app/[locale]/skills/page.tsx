'use client';

import { useTranslations } from 'next-intl';
import Navbar from '../../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key="skills"
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
            {t('description')}
          </motion.p>
          {/* TODO: Beceri grafikleri veya liste buraya eklenecek */}
        </motion.main>
      </AnimatePresence>
    </>
  );
}