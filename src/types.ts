export interface ColorOption {
  name: string;
  image: string;
}

export interface Camera {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  price: number;
  saveBadge?: string;
  image?: string;
  quantity: number;
  colors?: ColorOption[];
}

export interface Sensor {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  price: number;
  image?: string;
  originalPrice?: number;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  features?: string[];
  popular?: boolean;
}

export interface Protection {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  price: number;
  image?: string;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
}
