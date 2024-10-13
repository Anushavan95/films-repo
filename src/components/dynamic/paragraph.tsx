import React from 'react';

interface DynamicTextProps {
  text: string;                       
  component?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; 
  style?: React.CSSProperties;       
  className?: string;                 
  id?: string;                       
}

const DynamicText: React.FC<DynamicTextProps> = ({
  text,
  component: Component = 'p', 
  style,
  className,
  id,
}) => {
  return (
    <Component style={style} className={className} id={id}>
      {text}
    </Component>
  );
};

export default DynamicText;
