import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{9,11}$/, 'Invalid phone number'),
  mode: z.enum(['online', 'offline']),
  centerId: z.string().optional(),
  course: z.string().min(1, 'Please select a course'),
});

type FormData = z.infer<typeof schema>;

interface Props {
  mode: 'online' | 'offline';
  selectedCenter?: string;
  onSubmit: (data: FormData) => void;
}

export const RegistrationForm: React.FC<Props> = ({ mode, selectedCenter, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      mode,
      centerId: selectedCenter,
    },
  });

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-md mx-auto"
    >
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">
          Full Name
        </label>
        <input
          {...register('name')}
          className="w-full px-4 py-2 rounded-lg border border-border-color bg-bg-secondary text-text-primary focus:ring-2 focus:ring-accent-primary/50 outline-none"
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">
          Email Address
        </label>
        <input
          {...register('email')}
          type="email"
          className="w-full px-4 py-2 rounded-lg border border-border-color bg-bg-secondary text-text-primary focus:ring-2 focus:ring-accent-primary/50 outline-none"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">
          Phone Number
        </label>
        <input
          {...register('phone')}
          type="tel"
          className="w-full px-4 py-2 rounded-lg border border-border-color bg-bg-secondary text-text-primary focus:ring-2 focus:ring-accent-primary/50 outline-none"
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-accent-primary text-white py-3 rounded-lg hover:bg-accent-secondary transition-colors font-medium"
      >
        Request Callback
      </button>
    </motion.form>
  );
};