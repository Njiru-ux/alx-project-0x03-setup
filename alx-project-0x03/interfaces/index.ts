// Layout interfaces
export interface LayoutProps {
  children: React.ReactNode;
}

// Button interfaces - matches your actual Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// Home page interfaces
export interface PageRouteProps {
  pageRoute: string;
}

// Additional common interfaces
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}