'use client';

import { useFontSize } from '@/context/FontSizeContext';
import { ReactNode } from 'react';

export default function FontSizeWrapper({ children }: { children: ReactNode }) {
  const { fontSize } = useFontSize();
  return <div className={`text-${fontSize}`}>{children}</div>;
} 