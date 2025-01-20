export interface Center {
  id: string;
  city: string;
  address: string;
  timings: string;
  phone: string;
  mapsUrl: string;
  image: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
  level: string;
  price: number;
  image: string;
  category: string;
  students: number;
  modules: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
} 