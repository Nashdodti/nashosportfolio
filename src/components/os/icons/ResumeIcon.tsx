import { motion } from 'framer-motion';

export function ResumeIcon() {
  return (
    <motion.div 
      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center"
      whileHover={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.3 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="20" height="24" rx="2" fill="white" fillOpacity="0.9"/>
        <rect x="9" y="8" width="14" height="2" rx="1" fill="currentColor" className="text-primary"/>
        <rect x="9" y="12" width="10" height="1.5" rx="0.75" fill="currentColor" className="text-primary/50"/>
        <rect x="9" y="15" width="14" height="1.5" rx="0.75" fill="currentColor" className="text-primary/30"/>
        <rect x="9" y="18" width="12" height="1.5" rx="0.75" fill="currentColor" className="text-primary/30"/>
        <rect x="9" y="22" width="8" height="1.5" rx="0.75" fill="currentColor" className="text-primary/50"/>
      </svg>
    </motion.div>
  );
}
