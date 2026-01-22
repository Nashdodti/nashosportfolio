import { motion } from 'framer-motion';

export function AboutIcon() {
  return (
    <motion.div 
      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center"
      whileHover={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.3 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="12" r="5" fill="white" fillOpacity="0.9"/>
        <path d="M8 26C8 21.5817 11.5817 18 16 18C20.4183 18 24 21.5817 24 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.9"/>
      </svg>
    </motion.div>
  );
}
