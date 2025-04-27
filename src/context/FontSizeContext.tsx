'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type FontSize = 'sm' | 'base' | 'lg' | 'xl';

interface FontSizeContextType {
    fontSize: FontSize;
    increaseFontSize: () => void;
    decreaseFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
    const [fontSize, setFontSize] = useState<FontSize>('base');
  
    const fontSizes: FontSize[] = ['sm', 'base', 'lg', 'xl'];
  
    const increaseFontSize = () => {
      const currentIndex = fontSizes.indexOf(fontSize);
      if (currentIndex < fontSizes.length - 1) {
        setFontSize(fontSizes[currentIndex + 1]);
      }
    };
  
    const decreaseFontSize = () => {
      const currentIndex = fontSizes.indexOf(fontSize);
      if (currentIndex > 0) {
        setFontSize(fontSizes[currentIndex - 1]);
      }
    };
  
    return (
      <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize }}>
        {children}
      </FontSizeContext.Provider>
    );
};

export const useFontSize = () => {
    const context = useContext(FontSizeContext);
    if (!context) {
      throw new Error('useFontSize must be used within a FontSizeProvider');
    }
    return context;
};