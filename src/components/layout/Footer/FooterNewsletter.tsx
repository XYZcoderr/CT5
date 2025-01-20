import React from 'react';
import { Send } from 'lucide-react';

export const FooterNewsletter = () => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
      <p className="text-gray-400 mb-4">
        Subscribe to our newsletter for the latest updates and exclusive content.
      </p>
      <form className="space-y-3">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-blue-900/30 border border-blue-800 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Subscribe
        </button>
      </form>
    </div>
  );
};