import React from 'react';
import { Container } from './ui/Container';

export function Footer() {
  return (
    <footer className="py-20 bg-brand-950 text-brand-50/40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-display font-bold tracking-tight uppercase text-brand-50">Ν. Χ. Κελαΐδης</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 -mt-1">Δικηγορικό Γραφείο</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed">
              Παρέχουμε υψηλού επιπέδου νομικές υπηρεσίες με επίκεντρο τον άνθρωπο και την αποτελεσματικότητα. Η πολυετής εμπειρία μας είναι η εγγύηση για την επιτυχία σας.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-50 mb-8">Πλοήγηση</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-50 transition-colors">Αρχική</a></li>
              <li><a href="#services" className="hover:text-brand-50 transition-colors">Υπηρεσίες</a></li>
              <li><a href="#team" className="hover:text-brand-50 transition-colors">Η Ομάδα</a></li>
              <li><a href="#reviews" className="hover:text-brand-50 transition-colors">Κριτικές</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-50 mb-8">Ωράριο</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Δευτέρα - Παρασκευή:</span>
                <span className="text-brand-50">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Σάββατο:</span>
                <span className="text-brand-50">Κατόπιν Ραντεβού</span>
              </li>
              <li className="flex justify-between">
                <span>Κυριακή:</span>
                <span className="text-brand-50">Κλειστά</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-brand-50/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Νικόλαος Χ. Κελαΐδης. Με επιφύλαξη παντός δικαιώματος.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-50 transition-colors">Πολιτική Απορρήτου</a>
            <a href="#" className="hover:text-brand-50 transition-colors">Όροι Χρήσης</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
