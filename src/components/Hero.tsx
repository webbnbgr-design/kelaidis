import { motion } from 'motion/react';
import React from 'react';
import { Button } from './ui/Button';
import { Container } from './ui/Container';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.4em] font-bold mb-6 text-brand-900/60">
              Νομική Υπεράσπιση & Συμβουλευτική
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-10 text-balance">
              Νικόλαος Χ. Κελαΐδης – Νομική Υπεράσπιση με <span className="text-brand-900/40">Ήθος</span>, Εμπειρία και Συνέπεια
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="px-12 bg-brand-900 text-brand-50">
                Κλείστε Ραντεβού
              </Button>
              <Button variant="outline" size="lg" className="px-12">
                Οι Υπηρεσίες μας
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-brand-900/10 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {[
              { label: 'Χρόνια Εμπειρίας', value: '25+' },
              { label: 'Υποθέσεις', value: '1.2k+' },
              { label: 'Επιτυχία', value: '98%' },
              { label: 'Προσωπική Φροντίδα', value: '100%' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-display font-bold mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
