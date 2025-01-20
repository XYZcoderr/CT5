import React from 'react';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../../common/Button/Button';

interface CenterCardProps {
  center: {
    id: string;
    city: string;
    address: string;
    timings: string;
    phone: string;
    mapsUrl: string;
    image: string;
  };
  onSelect: (centerId: string) => void;
}

export const CenterCard: React.FC<CenterCardProps> = ({ center, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-blue-900/30 backdrop-blur-xl rounded-xl overflow-hidden border border-blue-800/50"
    >
      <div className="relative h-48">
        <img
          src={center.image}
          alt={`${center.city} Center`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-semibold text-white">{center.city}</h3>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
            <p className="text-gray-300">{center.address}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-yellow-400" />
            <p className="text-gray-300">{center.timings}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-yellow-400" />
            <a 
              href={`tel:${center.phone}`}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {center.phone}
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button 
            variant="primary"
            onClick={() => onSelect(center.id)}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900"
          >
            Request Callback
          </Button>
          
          <a
            href={center.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            View on Map
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};