import { motion } from 'framer-motion';

export function ContactIcon() {
  return (
    <motion.div 
      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center"
      whileHover={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.3 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="24" height="16" rx="2" fill="white" fillOpacity="0.9"/>
        <path d="M4 10L16 18L28 10" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.div>
  );
}
