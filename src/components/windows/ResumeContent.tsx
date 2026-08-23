import { motion } from 'framer-motion';
import { Download, MapPin, Phone, Mail, Linkedin, Award, GraduationCap } from 'lucide-react';

export function ResumeContent() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div 
        className="text-center border-b border-border pb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Nash Dodti</h1>
        <p className="text-primary font-medium mb-3">Senior Data Analyst at Uber</p>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Mumbai
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" /> 7020073385
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" /> dodtinash@gmail.com
          </span>
        </div>
      </motion.div>

      {/* Summary */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Award className="w-4 h-4 text-primary" />
          </span>
          Summary
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            Senior data analyst helping teams unlock growth through clear insights and data-driven decisions
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            Cross-functional experience spanning analytics, product thinking, quality, and growth
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            Recognized amongst the Top Indian startups at Pride of India 2023
          </li>
        </ul>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-3">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['SQL', 'Excel', 'Tableau', 'Power BI', 'Python', 'R', 'Looker', 'Google Analytics', 'AWS', 'GCP', 'Alteryx', 'A/B Testing'].map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-accent" />
          </span>
          Education
        </h2>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-secondary/50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-foreground">Masters - Business Analytics</h3>
                <p className="text-sm text-muted-foreground">Symbiosis International University</p>
              </div>
              <span className="text-xs text-muted-foreground">2025-2027</span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-secondary/50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-foreground">Bachelor's Computer Science</h3>
                <p className="text-sm text-muted-foreground">Fr. C. Rodrigues College of Engineering</p>
              </div>
              <span className="text-xs text-primary font-medium">8.7 GPA</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-3">Certifications & Awards</h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Google Data Analytics Professional Certification
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Top Startup Award - Google
          </div>
        </div>
      </motion.section>
    </div>
  );
}
