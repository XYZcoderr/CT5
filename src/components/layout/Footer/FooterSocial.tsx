import React from 'react';
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/codingthinker' },
  { icon: Twitter, href: 'https://twitter.com/codingthinker' },
  { icon: Linkedin, href: 'https://linkedin.com/company/codingthinker' },
  { icon: Youtube, href: 'https://youtube.com/codingthinker' }
];

export const FooterSocial = () => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
      <div className="flex gap-4">
        {socialLinks.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900/50 p-2 rounded-lg hover:bg-yellow-400/20 transition-colors group"
          >
            <Icon className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
};