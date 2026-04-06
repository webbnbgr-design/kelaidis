import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import React, { useState } from 'react';
import { Container } from './ui/Container';

const reviews = [
  {
    name: 'Γιώργος Παπαδόπουλος',
    text: 'Άψογος επαγγελματίας, πάνω απ’ όλα άνθρωπος. Με βοήθησε σε μια πολύ δύσκολη υπόθεση με απόλυτη επιτυχία.',
    rating: 5,
  },
  {
    name: 'Μαρία Κωνσταντίνου',
    text: 'Άριστος δικηγόρος με βαθιά γνώση του αντικειμένου. Η εμπειρία του φαίνεται από την πρώτη στιγμή.',
    rating: 5,
  },
  {
    name: 'Ανδρέας Σωτηρίου',
    text: 'Εξαιρετική συνεργασία, συνέπεια και ήθος. Το γραφείο του κ. Κελαΐδη είναι εγγύηση για κάθε νομικό ζήτημα.',
    rating: 5,
  },
  {
    name: 'Ελένη Δημητρίου',
    text: 'Προσωπική φροντίδα και άμεση ανταπόκριση. Αισθάνθηκα ασφάλεια και σιγουριά από την πρώτη συνάντηση.',
    rating: 5,
  },
  {
    name: 'Νίκος Βασιλείου',
    text: 'Ένας δικηγόρος που ακούει και καταλαβαίνει. Η προσέγγισή του είναι μοναδική και τα αποτελέσματα εξαιρετικά.',
    rating: 5,
  },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-32 bg-brand-900 text-brand-50 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold mb-6 opacity-40">
            Κριτικές Πελατών
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight max-w-3xl">
            Η Εμπιστοσύνη σας είναι η <span className="text-brand-50/40">Μεγαλύτερη Επιτυχία</span> μας
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 -left-12 opacity-10">
            <Quote className="w-32 h-32" />
          </div>
          
          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-50 text-brand-50" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed mb-10">
                  "{reviews[currentIndex].text}"
                </p>
                <div className="text-sm uppercase tracking-widest font-bold opacity-60">
                  {reviews[currentIndex].name}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-8 mt-16">
            <button
              onClick={prev}
              className="p-4 border border-brand-50/20 rounded-full hover:bg-brand-50 hover:text-brand-900 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-4 border border-brand-50/20 rounded-full hover:bg-brand-50 hover:text-brand-900 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
