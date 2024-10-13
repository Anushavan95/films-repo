import React from 'react';

interface DynamicButtonProps {
  label: string;                      
  onClick?: () => void;                
  disabled?: boolean;                
  style?: React.CSSProperties;       
  icon?:React.ReactNode
}

const Button: React.FC<DynamicButtonProps> = ({
  label,
  onClick,
  disabled = false,
  style,
  icon
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ padding: '10px 20px', cursor: 'pointer', ...style }}
      className={disabled ? 'disabled' : ''}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
