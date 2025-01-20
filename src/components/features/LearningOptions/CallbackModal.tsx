import React from 'react';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{9,11}$/, 'Invalid phone number'),
  enquiryType: z.enum(['Online Learning', 'Physical Centers']),
  location: z.string().optional().refine((val) => {
    if (val === 'Physical Centers') {
      return ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur'].includes(val);
    }
    return true;
  }, 'Please select a valid location'),
  comments: z.string().optional()
});

type FormData = z.infer<typeof schema>;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

export const CallbackModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const enquiryType = watch('enquiryType');

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="min-h-screen px-4 py-6 flex items-center justify-center">
        <motion.div 
          className="relative w-full max-w-md rounded-2xl bg-blue-900/95 p-4 sm:p-6 shadow-xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-lg rotate-3"></div>
                <div className="absolute inset-0 bg-blue-950 rounded-lg -rotate-3"></div>
                <img src="/logo.png" alt="" className="relative w-full h-full rounded-lg" />
              </div>
              <h2 className="text-lg sm:text-xl font-heading font-semibold text-white">
                Request Callback
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-blue-800/50 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="max-h-[calc(100vh-12rem)] overflow-y-auto px-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <input
                  {...register('name')}
                  placeholder="Your full name"
                  className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base bg-blue-800/30 border border-blue-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <input
                  {...register('email')}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base bg-blue-800/30 border border-blue-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <select
                    className="px-3 py-2 sm:py-3 text-sm sm:text-base bg-blue-800/30 border border-blue-700 rounded-lg text-white"
                  >
                    <option value="+91">+91</option>
                  </select>
                  <input
                    {...register('phone')}
                    placeholder="Enter your mobile number"
                    className="flex-1 px-4 py-2 sm:py-3 text-sm sm:text-base bg-blue-800/30 border border-blue-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <select
                  {...register('enquiryType')}
                  className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base bg-blue-800/30 border border-blue-700 rounded-lg text-white"
                >
                  <option value="">Select enquiry type</option>
                  <option value="Online Learning">Online Learning</option>
                  <option value="Physical Centers">Physical Centers</option>
                </select>
                {errors.enquiryType && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.enquiryType.message}
                  </p>
                )}
              </div>

              {enquiryType === 'Physical Centers' && (
                <div className="space-y-4">
                  <select
                    {...register('location')}
                    className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base bg-blue-800/30 border border-blue-700 rounded-lg text-white"
                  >
                    <option value="">Select a center</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Indore">Indore</option>
                    <option value="Gwalior">Gwalior</option>
                    <option value="Jabalpur">Jabalpur</option>
                  </select>
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.location.message}
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-4">
                <textarea
                  {...register('comments')}
                  placeholder="Any additional information or questions?"
                  className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base bg-blue-800/30 border border-blue-700 rounded-lg text-white placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-blue-900 py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-sm sm:text-base"
              >
                Submit Request
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};