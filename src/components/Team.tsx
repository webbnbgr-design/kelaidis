import { motion } from 'motion/react';
import React from 'react';
import { Container } from './ui/Container';

const team = [
  {
    name: 'Νικόλαος Χ. Κελαΐδης',
    role: 'Δικηγόρος παρ’ Αρείω Πάγω',
    bio: 'Με περισσότερα από 25 χρόνια εμπειρίας, ο κ. Κελαΐδης έχει χειριστεί πλήθος υποθέσεων με επιτυχία, διατηρώντας πάντα την προσωπική επαφή και την ανθρωπιά ως επίκεντρο της δουλειάς του.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000',
  },
  {
    name: 'Κατερίνα Θαλασσινού',
    role: 'Συνεργάτης Δικηγόρος',
    bio: 'Εξειδικευμένη στο αστικό και εμπορικό δίκαιο, η κα. Θαλασσινού προσφέρει δυναμική νομική εκπροσώπηση και στρατηγική συμβουλευτική, δίνοντας έμφαση στη λεπτομέρεια και την αποτελεσματικότητα.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000',
  },
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-brand-50 overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-24">
          <span className="text-xs uppercase tracking-[0.4em] font-bold mb-6 block text-brand-900/40">
            Η Ομάδα μας
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Επαγγελματισμός & <span className="text-brand-900/40">Ανθρωπιά</span>
          </h2>
          <p className="mt-8 text-brand-900/60 text-lg leading-relaxed">
            Πιστεύουμε ότι η νομική επιστήμη πρέπει να υπηρετεί τον άνθρωπο. Στο γραφείο μας, κάθε υπόθεση είναι μοναδική και κάθε πελάτης αντιμετωπίζεται με τον σεβασμό και την προσοχή που του αξίζει.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="flex flex-col gap-8 p-12 border border-brand-900/10 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.2 }}
            >
              <div className="pt-4">
                <h3 className="text-3xl font-display font-bold mb-2">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-900/40 mb-6">
                  {member.role}
                </p>
                <p className="text-base text-brand-900/60 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
