import { motion } from 'framer-motion';

export function ExperienceIcon() {
  return (
    <motion.div 
      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center"
      whileHover={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.3 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="24" height="16" rx="2" fill="white" fillOpacity="0.9"/>
        <rect x="10" y="6" width="12" height="6" rx="1" fill="white" fillOpacity="0.7"/>
        <rect x="12" y="8" width="8" height="2" rx="1" fill="currentColor" className="text-accent"/>
        <circle cx="16" cy="18" r="4" fill="currentColor" className="text-accent/30"/>
        <path d="M14 18L15.5 19.5L18 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent"/>
      </svg>
    </motion.div>
  );
}
