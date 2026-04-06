import { cn } from '@/src/lib/utils';
import { motion, useScroll, useTransform } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { Container } from './ui/Container';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { name: 'Αρχική', href: '#' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Η Ομάδα', href: '#team' },
    { name: 'Κριτικές', href: '#reviews' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6',
        isScrolled ? 'bg-brand-50/90 backdrop-blur-md py-4 border-b border-brand-900/10' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-display font-bold tracking-tight uppercase">Ν. Χ. Κελαΐδης</span>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 -mt-1">Δικηγορικό Γραφείο</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs uppercase tracking-widest font-medium hover:opacity-50 transition-opacity"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu toggle could go here */}
          <button className="text-xs uppercase tracking-widest font-bold">Menu</button>
        </div>
      </Container>
    </motion.nav>
  );
}
