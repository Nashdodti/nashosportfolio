import { motion } from 'framer-motion';
import { Sparkles, MapPin, Heart, Coffee, Rocket, Code } from 'lucide-react';

export function AboutContent() {
  return (
    <div className="p-6 space-y-6">
      {/* Header with photo placeholder */}
      <motion.div 
        className="flex flex-col sm:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          N
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-foreground mb-1">Nash Dodti</h1>
          <p className="text-sm font-medium text-primary mb-1">Senior Data Analyst at Uber</p>
          <p className="text-muted-foreground flex items-center justify-center sm:justify-start gap-1">
            <MapPin className="w-4 h-4" /> Mumbai, India
          </p>
        </div>
      </motion.div>

      {/* Story */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" />
          My Story
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          From leading data teams to winning startup awards, I help companies unlock growth through
          data-driven decisions, sharp insights, and creative problem-solving.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          My toolkit spans Excel, SQL, Tableau, Power BI, Python, R, Looker, Google Analytics, and AI.
          I thrive in cross-functional teams and enjoy making complex analysis useful to real people.
        </p>
      </motion.div>

      {/* What drives me */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-primary" />
          What Drives Me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-secondary/50 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground text-sm">Product Thinking</h3>
              <p className="text-xs text-muted-foreground">Building tools that solve real problems</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-secondary/50 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-foreground text-sm">Data Storytelling</h3>
              <p className="text-xs text-muted-foreground">Making numbers meaningful</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fun facts */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <Coffee className="w-5 h-5 text-yellow-500" />
          When I'm Not Working
        </h2>
        <div className="flex flex-wrap gap-2">
          {['📊 Dashboard Design', '🎮 Gaming', '📚 Learning', '☕ Coffee', '✈️ Travel', '🎵 Music'].map((interest) => (
            <span 
              key={interest}
              className="px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground"
            >
              {interest}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
