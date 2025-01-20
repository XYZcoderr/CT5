import React from 'react'; 
import { motion } from 'framer-motion'; 
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react'; 
import { itemVariants } from './animations'; 
import { Button } from '../../common'; 

const centers = [ 
  { 
    id: '1', 
    city: 'Bhopal', 
    address: ' MP Nagar, Zone 1, Bhopal', 
    timings: '9:00 AM - 6:00 PM', 
    phone: '+91 1234567890', 
    mapsUrl: 'https://goo.gl/maps/example1', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' 
  }, 
  { 
    id: '2', 
    city: 'Indore', 
    address: '456 Vijay Nagar, Indore', 
    timings: '9:00 AM - 6:00 PM', 
    phone: '+91 2345678901', 
    mapsUrl: 'https://goo.gl/maps/example2', 
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80' 
  }, 
  { 
    id: '3', 
    city: 'Gwalior', 
    address: '789 City Center, Gwalior', 
    timings: '9:00 AM - 6:00 PM', 
    phone: '+91 3456789012', 
    mapsUrl: 'https://goo.gl/maps/example3', 
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' 
  }, 
  { 
    id: '4', 
    city: 'Jabalpur', 
    address: '321 Wright Town, Jabalpur', 
    timings: '9:00 AM - 6:00 PM', 
    phone: '+91 4567890123', 
    mapsUrl: 'https://goo.gl/maps/example4', 
    image: 'https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?auto=format&fit=crop&w=800&q=80' 
  } 
]; 
 
interface Props { 
  onCallbackRequest: () => void; 
} 
 
export const PhysicalCenters: React.FC<Props> = ({ onCallbackRequest }) => { 
  return ( 
    <motion.div 
      variants={itemVariants} 
      initial="hidden" 
      animate="visible" 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
    > 
      {centers.map((center) => ( 
        <div key={center.id} className="bg-blue-900/30 rounded-xl overflow-hidden border border-blue-800/50"> 
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

            <div className="flex justify-between items-center pt-4 gap-4">
              {/* Request Callback Button with Phone Icon */}
              <Button  
                variant="primary" 
                onClick={onCallbackRequest} 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm"
              > 
                <Phone className="w-4 h-4" />   Callback 
              </Button>
               
              {/* View on Map Button */}
              <a 
                href={center.mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors px-4 py-2 rounded-md text-sm"
              > 
                View on Map 
                <ExternalLink className="w-4 h-4" /> 
              </a>
            </div> 
          </div> 
        </div> 
      ))} 
    </motion.div> 
  ); 
}; 
