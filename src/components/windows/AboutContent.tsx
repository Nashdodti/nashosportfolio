import { motion } from 'framer-motion';
import { Sparkles, MapPin, Heart, Coffee, Rocket, Code, Quote } from 'lucide-react';

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
          <p className="text-sm font-medium text-primary mb-1">Senior Data Analyst @ Uber</p>
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
          From leading data teams to winning startup awards, I've helped companies unlock growth through data-driven decisions, sharp insights, and love making data-driven decisions feel easy.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Toolkit spans Excel, SQL, Tableau, Power BI, Python, R, Looker, and Google Analytics (plus a sprinkle of AI), thrives in cross-functional teams and love making data-driven decisions feel easy.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          - Years of experience in Analytics & Business Strategy – Led analytics for Edtech startup & featured by Google Startup School
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2">
          - Recognized amongst the Top Indian startups to present at Pride of India (ISC) 2023
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2">
          - Strong communicator with proven leadership in cross-functional team environments
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
              <h3 className="font-medium text-foreground text-sm">Business Problems</h3>
              <p className="text-xs text-muted-foreground">Solving real-world challenges</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-secondary/50 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-foreground text-sm">Data-Driven Decisions</h3>
              <p className="text-xs text-muted-foreground">Turning insights into action</p>
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
        <p className="text-sm text-muted-foreground mb-3">
          You'll probably find me traveling to new places, learning something new, hitting the gym, or exploring different cuisines around the city.
        </p>
        <div className="flex flex-wrap gap-2">
          {['✈️ Traveling', '📚 Learning', '💪 Working Out', '🍜 Food Explorer', '☕ Coffee', '🎵 Music'].map((interest) => (
            <span 
              key={interest}
              className="px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground"
            >
              {interest}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Recommendation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <Quote className="w-5 h-5 text-primary" />
          What Others Say
        </h2>
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Quote className="w-6 h-6 text-primary/40 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-foreground italic mb-3">
                "I have worked with Nash at InterviewReady. He understood our product requirements, figured out 
                our data schema, set up data pipelines and had dashboards up in less than 2 weeks! As the above 
                example shows, Nash is resourceful. He goes out of his way to find root causes, potential solutions 
                and is up for learning new things. His management of our digital ads and chipping into product 
                requirements testify his leadership abilities."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">GS</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Gaurav Sen</p>
                  <p className="text-xs text-muted-foreground">Founder at InterviewReady, Previously at Uber</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
