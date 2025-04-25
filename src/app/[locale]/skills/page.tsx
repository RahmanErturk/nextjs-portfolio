'use client';

import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
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
      </main>
    </>
  );
}