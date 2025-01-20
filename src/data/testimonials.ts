export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Software Engineer',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'The Full Stack course transformed my career. The hands-on projects and mentorship were invaluable.',
    rating: 5
  },
  {
    id: '2',
    name: 'James Wilson',
    role: 'Data Scientist',
    company: 'DataTech',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'The Data Science course provided practical skills that I use daily in my new role.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'DesignHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'The UI/UX course helped me transition from graphic design to product design seamlessly.',
    rating: 5
  },
  {
    id: '4',
    name: 'Michael Chang',
    role: 'Frontend Developer',
    company: 'WebFlow',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Outstanding React course! The real-world projects gave me confidence in my development skills.',
    rating: 5
  }
];