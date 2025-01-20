import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Timer, Sparkles, Copy, Check } from 'lucide-react';

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  
  const copyCode = async () => {
    await navigator.clipboard.writeText('EARLYBIRD');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-yellow-400 relative z-50"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center py-2 text-blue-900 text-center gap-2">
              <div className="flex flex-wrap items-center justify-center gap-2 font-medium">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-sm">Limited Time Offer: Use code</span>
                <motion.button
                  onClick={copyCode}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center gap-1.5 font-bold bg-blue-900 text-yellow-400 
                           px-3 py-1 rounded cursor-pointer group"
                >
                  EARLYBIRD
                  <AnimatePresence>
                    {isCopied ? (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -right-6"
                      >
                        <Check className="w-4 h-4 text-green-400" />
                      </motion.span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    )}
                  </AnimatePresence>
                </motion.button>
                <span className="text-sm">for 30% off!</span>
                <Timer className="w-4 h-4 animate-spin-slow" />
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-blue-900/10 
                         rounded-full transition-colors sm:static sm:transform-none"
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 