import React from 'react';
import { FooterNewsletter } from './FooterNewsletter';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterInfo } from './FooterInfo';

export const Footer = () => {
  return (
    <footer className="bg-blue-950 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <FooterInfo />
          <FooterLinks />
          <FooterSocial />
          <FooterNewsletter />
        </div>
        
        <div className="border-t border-blue-900/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Coding Thinker. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="hover:text-yellow-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};