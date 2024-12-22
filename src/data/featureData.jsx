import { MessageSquare, Code, Users, Zap, GitBranch, Lock } from 'lucide-react';
import { createIcon } from '../utils/iconFactory';

export const featureData = [
  {
    icon: createIcon(Code),
    title: 'Real-time Code Editor',
    description: 'Powerful code editor with syntax highlighting and real-time collaboration',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: createIcon(MessageSquare),
    title: 'Integrated Chat',
    description: 'Built-in chat system for seamless team communication',
    imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: createIcon(Users),
    title: 'Team Collaboration',
    description: 'Work together in real-time with multiple team members',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: createIcon(Zap),
    title: 'Instant Updates',
    description: 'See changes instantly as your team members type',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: createIcon(GitBranch),
    title: 'Version Control',
    description: 'Built-in version control for tracking changes',
    imageUrl: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: createIcon(Lock),
    title: 'Secure',
    description: 'Enterprise-grade security for your code and communications',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];
