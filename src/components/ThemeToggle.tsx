"use client";

import { ThemeContext } from '@/contexts/ThemeContext';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300">
        <div className="h-5 w-5" />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        {theme === 'light' ? (
          <IconMoon className="h-5 w-5 text-gray-700" />
        ) : (
          <IconSun className="h-5 w-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};
