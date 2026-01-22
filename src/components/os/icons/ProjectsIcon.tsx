import { motion } from 'framer-motion';

export function ProjectsIcon() {
  return (
    <motion.div 
      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-400 flex items-center justify-center"
      whileHover={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.3 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10C4 8.89543 4.89543 8 6 8H12L14 11H26C27.1046 11 28 11.8954 28 13V24C28 25.1046 27.1046 26 26 26H6C4.89543 26 4 25.1046 4 24V10Z" fill="white" fillOpacity="0.9"/>
        <rect x="8" y="15" width="16" height="2" rx="1" fill="#EAB308" fillOpacity="0.5"/>
        <rect x="8" y="19" width="12" height="2" rx="1" fill="#EAB308" fillOpacity="0.3"/>
      </svg>
    </motion.div>
  );
}
