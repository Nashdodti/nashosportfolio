import { motion } from 'framer-motion';
import { Building2, Calendar, TrendingUp, Users, Zap } from 'lucide-react';

const experiences = [
  {
    company: 'Uber',
    role: 'Senior Data Analyst @ Uber',
    location: 'Mumbai Metropolitan Region',
    period: 'Current',
    color: 'bg-foreground',
    achievements: [
      'Partnering across functions to turn complex data into clear, actionable decisions',
      'Working across SQL, Python, Tableau and business analytics',
    ],
    impact: 'Data strategy & decision support',
  },
  {
    company: 'Certify Inc.',
    role: 'Data Analyst | Quality Lead',
    location: 'NYC',
    period: 'Previous role',
    color: 'bg-primary',
    achievements: [
      'Built and deployed 3 web apps for Doctors in US for healthcare clients',
      'Created internal tools (Campaign Engine, CAQH Validator) saving 2 ops team time',
      'Led Playwright-based automated testing, cutting bugs by 50%',
      'Supported 3.5k daily users; application submission time cut by 60%',
    ],
    impact: '60% faster submissions, 50% fewer bugs',
  },
  {
    company: 'InterviewReady Inc.',
    role: 'Lead Data Analyst',
    location: 'India',
    period: 'Sep 2022 - Aug 2023',
    color: 'bg-accent',
    achievements: [
      'Built interactive Tableau & Looker dashboards increasing efficiency by 90%',
      'Developed advanced SQL queries, cutting reporting time by 50%',
      'Achieved 377% ROI on Google Ads from $240 budget',
      'Increased website traffic by 18%',
    ],
    impact: '377% ROI, 90% faster decisions',
  },
  {
    company: 'Eaglytics Co.',
    role: 'Business Analyst',
    location: 'Dubai',
    period: 'Jun 2021 - Sep 2022',
    color: 'bg-yellow-500',
    achievements: [
      'Built Looker Studio reports improving marketing campaigns',
      'Managed and trained 2 interns, boosting delivery speed by 30%',
      'Presented strategic recommendations to clients and stakeholders',
    ],
    impact: '30% faster delivery',
  },
];

export function ExperienceContent() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Work Experience</h2>
        <p className="text-muted-foreground text-sm">Analytics leadership, product thinking and measurable outcomes</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative pl-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full ${exp.color} flex items-center justify-center`}>
                <Building2 className="w-3 h-3 text-primary-foreground" />
              </div>

              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-sm text-primary font-medium">{exp.role}</p>
                    <p className="text-xs text-muted-foreground">{exp.location}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Zap className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{exp.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
