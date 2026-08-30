import { motion } from 'framer-motion';
import { ExternalLink, Github, Lightbulb, Wrench, Target, BarChart3, Database, LineChart, Brain, Utensils, MessageSquare, Globe } from 'lucide-react';

const projects = [
  {
    title: 'AI Food Rating for India (Bharat)',
    category: 'AI & Health Tech',
    problem: 'Indians needed easy-to-understand health ratings for packaged foods',
    approach: 'Built AI-powered food scoring system analyzing nutritional data for Indian package food products',
    tools: ['AI/ML', 'React', 'TypeScript'],
    results: 'Smart food choices made simple with instant health scoring',
    icon: <Utensils className="w-5 h-5" />,
    link: 'https://foodscore.lovable.app/',
  },
  {
    title: 'AI Data Analyst',
    category: 'AI & Analytics',
    problem: 'Data analysis needed to be more accessible and conversational',
    approach: 'Created AI-powered data analyst tool that answers questions and generates insights',
    tools: ['AI/ML', 'Python', 'Data Analytics'],
    results: 'Making data analysis conversational and accessible',
    icon: <MessageSquare className="w-5 h-5" />,
    link: 'https://nashdodti-data-analyst-ai.lovable.app/',
  },
  {
    title: 'Executive Dashboards',
    category: 'Data Visualization',
    problem: 'Leadership needed real-time decision-making insights',
    approach: 'Designed interactive Tableau & Looker dashboards with drill-down capabilities',
    tools: ['Tableau', 'Looker', 'SQL'],
    results: '90% improvement in decision-making efficiency',
    icon: <LineChart className="w-5 h-5" />,
  },
  {
    title: 'Marketing Analytics',
    category: 'Growth Analytics',
    problem: 'Optimize ad spend and improve marketing ROI',
    approach: 'Implemented Google Analytics tracking and A/B testing frameworks',
    tools: ['Google Analytics', 'Excel', 'Python'],
    results: '377% ROI on $240 Google Ads budget, 18% traffic increase',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    title: 'Vibe-Coded Portfolio',
    category: 'Web Development',
    problem: 'Needed a modern, interactive portfolio to showcase work',
    approach: 'Built a sleek portfolio website with modern design and smooth interactions',
    tools: ['React', 'TypeScript', 'Lovable'],
    results: 'A beautiful portfolio showcasing projects and skills',
    icon: <Globe className="w-5 h-5" />,
    link: 'https://nashfolio.lovable.app/',
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
            <div className="bg-foreground p-4 text-background">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-background/15 flex items-center justify-center">
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
                    className="w-8 h-8 rounded-lg bg-background/15 hover:bg-background/25 flex items-center justify-center transition-colors"
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
                <div className="flex items-center gap-2 text-xs font-medium text-foreground mb-1">
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
