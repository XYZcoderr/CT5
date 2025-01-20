import React from 'react';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { buttonVariants } from "./animations";

interface CenterCardProps {
  center: {
    id: string;
    name: string;
    address: string;
    timings: string;
    contact: string;
    mapsUrl: string;
    image: string;
  };
  onSelect: (centerId: string) => void;
}

export const CenterCard: React.FC<CenterCardProps> = ({ center, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-blue-900/30 backdrop-blur-xl rounded-xl overflow-hidden border border-blue-800/50
                 sm:max-w-sm w-full mx-auto h-full flex flex-col"
    >
      <div className="aspect-video relative">
        <img
          src={center.image}
          alt={center.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-heading font-semibold text-white">{center.name}</h3>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 space-y-4 flex-grow flex flex-col">
        <div className="space-y-2.5 flex-grow">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-1" />
            <span className="text-sm text-gray-300">{center.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">{center.timings}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">{center.contact}</span>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 mt-auto pt-4">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => onSelect(center.id)}
            className="flex-1 px-3 py-2 text-sm font-medium bg-yellow-400 hover:bg-yellow-500 
                      text-blue-900 rounded-lg transition-all duration-300
                      hover:shadow-lg hover:shadow-yellow-400/20
                      focus:ring-2 focus:ring-yellow-400/50
                      min-w-[120px] text-center"
          >
            Request Callback
          </motion.button>
          
          <a
            href={center.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2
                     text-sm font-medium text-yellow-400 hover:text-yellow-300 
                     border border-yellow-400/30 hover:border-yellow-400/50 
                     rounded-lg transition-all duration-300
                     min-w-[100px]"
          >
            View Map
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};