import { motion } from 'framer-motion';
import { ExternalLink, Github, Lightbulb, Wrench, Target, BarChart3, Database, LineChart, Brain, Utensils } from 'lucide-react';

const projects = [
  {
    title: 'AI Food Rating for India (Bharat)',
    category: 'AI & Health Tech',
    problem: 'Indians needed easy-to-understand health ratings for packaged foods',
    approach: 'Built AI-powered food scoring system analyzing nutritional data for Indian package food products',
    tools: ['AI/ML', 'React', 'TypeScript'],
    results: 'Smart food choices made simple with instant health scoring',
    icon: <Utensils className="w-5 h-5" />,
    color: 'from-green-500 to-emerald-400',
    link: 'https://foodscore.lovable.app/',
  },
  {
    title: 'Healthcare Web Apps',
    category: 'Full Stack',
    problem: 'Doctors needed streamlined credentialing workflows',
    approach: 'Built 3 web applications with automated validation and campaign engines',
    tools: ['React', 'SQL', 'Looker Studio'],
    results: 'Serving 3.5k daily users with 60% faster submissions',
    icon: <Database className="w-5 h-5" />,
    color: 'from-primary to-primary/70',
  },
  {
    title: 'Executive Dashboards',
    category: 'Data Visualization',
    problem: 'Leadership needed real-time decision-making insights',
    approach: 'Designed interactive Tableau & Looker dashboards with drill-down capabilities',
    tools: ['Tableau', 'Looker', 'SQL'],
    results: '90% improvement in decision-making efficiency',
    icon: <LineChart className="w-5 h-5" />,
    color: 'from-accent to-accent/70',
  },
  {
    title: 'Marketing Analytics',
    category: 'Growth Analytics',
    problem: 'Optimize ad spend and improve marketing ROI',
    approach: 'Implemented Google Analytics tracking and A/B testing frameworks',
    tools: ['Google Analytics', 'Excel', 'Python'],
    results: '377% ROI on $240 Google Ads budget, 18% traffic increase',
    icon: <BarChart3 className="w-5 h-5" />,
    color: 'from-yellow-500 to-yellow-400',
  },
  {
    title: 'Automated Testing Framework',
    category: 'Quality Assurance',
    problem: 'High bug rate impacting user experience',
    approach: 'Led implementation of Playwright-based automated testing suite',
    tools: ['Playwright', 'TypeScript', 'CI/CD'],
    results: 'Reduced bugs by 50%, improved release confidence',
    icon: <Brain className="w-5 h-5" />,
    color: 'from-blue-500 to-blue-400',
  },
];

export function ProjectsContent() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Projects</h2>
        <p className="text-muted-foreground text-sm">Impact-driven work with measurable results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${project.color} p-4 text-white`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="text-xs opacity-80">{project.category}</span>
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1">
                  <Lightbulb className="w-3 h-3" /> Problem
                </div>
                <p className="text-sm text-foreground">{project.problem}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1">
                  <Wrench className="w-3 h-3" /> Approach
                </div>
                <p className="text-sm text-foreground">{project.approach}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-secondary text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-border">
                <div className="flex items-center gap-2 text-xs font-medium text-primary mb-1">
                  <Target className="w-3 h-3" /> Results
                </div>
                <p className="text-sm font-medium text-foreground">{project.results}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
