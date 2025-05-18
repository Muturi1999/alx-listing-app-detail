export interface CardProps {
    id?: string;
    title: string;
    description?: string;
    image?: string;
    price?: number;
    location?: string;
    className?: string;
    onClick?: () => void;
  }
  
  export interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
  }

  