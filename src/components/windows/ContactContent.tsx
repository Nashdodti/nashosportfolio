import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ChevronRight, Copy } from 'lucide-react';
import { toast } from 'sonner';

export function ContactContent() {
  const terminalLines = [
    { type: 'comment', text: '// Welcome to Nash\'s Terminal' },
    { type: 'command', text: 'whoami' },
    { type: 'output', text: 'nash-dodti @ data-analyst' },
    { type: 'command', text: 'cat contact.txt' },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('dodtinash@gmail.com');
      toast.success('Email copied to clipboard');
    } catch {
      toast.error('Could not copy the email address');
    }
  };

  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'dodtinash@gmail.com',
      color: 'bg-primary/10 text-primary',
      copyable: true,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'nashdodti',
      href: 'https://linkedin.com/in/nashdodti/',
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'nashdodti',
      href: 'https://github.com/nashdodti',
      color: 'bg-foreground/10 text-foreground',
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Terminal Header */}
      <div className="terminal p-4 border-b border-green-900/30">
        <div className="space-y-1 font-mono text-xs">
          {terminalLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={line.type === 'comment' ? 'text-gray-500' : ''}
            >
              {line.type === 'command' && (
                <span className="terminal-prompt">$ </span>
              )}
              {line.text}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex-1 p-4 space-y-4 bg-card overflow-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick Links</h3>
          <div className="space-y-2">
            {contactLinks.map((link) => {
              const content = <>
                <div className={`w-10 h-10 rounded-lg ${link.color} flex items-center justify-center`}>
                  {link.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium text-foreground">{link.label}</div>
                  <div className="text-xs text-muted-foreground">{link.value}</div>
                </div>
                {link.copyable ? (
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:scale-110 transition-transform" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                )}
              </>;

              return link.copyable ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={copyEmail}
                  className="flex w-full items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  aria-label="Copy email address"
                >
                  {content}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
