import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React from 'react';
import { Button } from './ui/Button';
import { Container } from './ui/Container';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold mb-6 block text-brand-900/40">
              Επικοινωνία
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-12 text-balance">
              Είμαστε εδώ για να σας <span className="text-brand-900/40">Ακούσουμε</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-brand-50 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2 opacity-40">Διεύθυνση</h4>
                  <p className="text-lg font-display font-medium">Αργοστολίου 20, Κυψέλη, Αθήνα</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-brand-50 rounded-full">
                  <Phone className="w-6 h-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2 opacity-40">Τηλέφωνο</h4>
                  <p className="text-lg font-display font-medium">+30 210 1234567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-brand-50 rounded-full">
                  <Mail className="w-6 h-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2 opacity-40">Email</h4>
                  <p className="text-lg font-display font-medium">info@kelaidis-law.gr</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-brand-900 text-brand-50 p-12 md:p-20 text-center"
          >
            <Phone className="w-16 h-16 mx-auto mb-8 stroke-[1]" />
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Άμεση Επικοινωνία</h3>
            <p className="text-brand-50/60 mb-12 text-lg">
              Καλέστε μας τώρα για να συζητήσουμε την υπόθεσή σας και να κλείσουμε ένα ραντεβού.
            </p>
            <a 
              href="tel:+302101234567" 
              className="inline-block w-full py-6 bg-brand-50 text-brand-900 font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Κλήση Τώρα
            </a>
            
            <div className="mt-12 pt-12 border-t border-brand-50/10">
              <p className="text-xs uppercase tracking-widest opacity-40 mb-4">Τοποθεσία Γραφείου</p>
              <div className="w-full aspect-video grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 overflow-hidden border border-brand-50/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.123456789!2d23.738!3d37.995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd123456789%3A0x123456789abcdef!2sArgostoliou%2020%2C%20Athina%20113%2062!5e0!3m2!1sen!2sgr!4v1234567890123!5m2!1sen!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
