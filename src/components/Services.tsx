import { motion } from 'motion/react';
import { Briefcase, Building2, Gavel, Scale, ShieldCheck, Users } from 'lucide-react';
import React from 'react';
import { Container } from './ui/Container';

const services = [
  {
    title: 'Αστικό Δίκαιο',
    description: 'Εξειδικευμένη νομική υποστήριξη σε θέματα οικογενειακού, κληρονομικού και ενοχικού δικαίου.',
    icon: Scale,
  },
  {
    title: 'Ποινικό Δίκαιο',
    description: 'Υπεράσπιση σε όλο το φάσμα του ποινικού δικαίου με έμφαση στην προστασία των δικαιωμάτων σας.',
    icon: Gavel,
  },
  {
    title: 'Εμπορικό Δίκαιο',
    description: 'Συμβουλευτική και δικαστική εκπροσώπηση επιχειρήσεων, εταιρικό δίκαιο και εμπορικές συμβάσεις.',
    icon: Briefcase,
  },
  {
    title: 'Ακίνητα',
    description: 'Πλήρης νομικός έλεγχος, αγοραπωλησίες, μισθώσεις και διαχείριση ακίνητης περιουσίας.',
    icon: Building2,
  },
  {
    title: 'Εργατικό Δίκαιο',
    description: 'Επίλυση διαφορών μεταξύ εργοδοτών και εργαζομένων, συμβάσεις και αποζημιώσεις.',
    icon: Users,
  },
  {
    title: 'Διοικητικό Δίκαιο',
    description: 'Εκπροσώπηση ενώπιον των διοικητικών αρχών και δικαστηρίων για υποθέσεις δημοσίου δικαίου.',
    icon: ShieldCheck,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] font-bold mb-6 block text-brand-900/40">
              Τομείς Εξειδίκευσης
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Ολοκληρωμένες Νομικές Υπηρεσίες για <span className="text-brand-900/40">Κάθε Ανάγκη</span>
            </h2>
          </div>
          <div className="max-w-md text-brand-900/60 text-sm leading-relaxed">
            Παρέχουμε υψηλού επιπέδου νομικές υπηρεσίες, συνδυάζοντας την πολυετή εμπειρία με τη συνεχή ενημέρωση στις εξελίξεις της νομοθεσίας.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-900/10 border border-brand-900/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-12 group hover:bg-brand-900 transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <service.icon className="w-10 h-10 mb-8 stroke-[1.5] text-brand-900 group-hover:text-brand-50 transition-colors duration-500" />
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-50 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-sm text-brand-900/60 leading-relaxed group-hover:text-brand-50/70 transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
