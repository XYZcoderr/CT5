export interface Center {
  id: string;
  city: string;
  address: string;
  timings: string;
  phone: string;
  mapsUrl: string;
  image: string;
  facilities: string[];
  courses: string[];
}

export interface FilterOptions {
  city: string;
  course: string;
  schedule: string;
}