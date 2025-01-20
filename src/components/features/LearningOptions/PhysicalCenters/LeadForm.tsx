import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{9,11}$/, 'Invalid phone number'),
  course: z.string().min(1, 'Please select a course'),
  schedule: z.string().min(1, 'Please select a schedule'),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  centerId: string;
  onBack: () => void;
  onSubmit: (data: FormData) => void;
}

export const LeadForm: React.FC<Props> = ({ centerId, onBack, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto"
    >
      <button
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-yellow-500 mb-6 dark:text-gray-400"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Centers
      </button>

      <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">
          Request Information
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
              Full Name
            </label>
            <input
              {...register('name')}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                Phone Number
              </label>
              <input
                {...register('phone')}
                type="tel"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                Preferred Course
              </label>
              <select
                {...register('course')}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select a course</option>
                <option value="full-stack">Full Stack Development</option>
                <option value="data-science">Data Science</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="devops">DevOps</option>
              </select>
              {errors.course && (
                <p className="mt-1 text-sm text-red-500">{errors.course.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                Preferred Schedule
              </label>
              <select
                {...register('schedule')}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select a schedule</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="weekend">Weekend</option>
              </select>
              {errors.schedule && (
                <p className="mt-1 text-sm text-red-500">{errors.schedule.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
              Additional Comments
            </label>
            <textarea
              {...register('comments')}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="text-yellow-500 hover:text-yellow-600">
              Privacy Policy
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </motion.div>
  );
};