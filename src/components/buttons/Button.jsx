import React from 'react';
import clsx from 'clsx';

export const Button = ({
  children,
  icon: Icon, 
  onClick,
  type = "button", 
  variant,
  iconPosition = "before", 
}) => {
  const buttonClasses = clsx(
    "flex items-center justify-center px-[29px] py-[12px]", 
    {
      "rounded-lg gap-[10px] bg-primary text-white": variant === "primary",
      "rounded-lg gap-[10px] bg-cream-yellow text-primary font-bold": variant === "secondary",
      "rounded-lg gap-[10px] bg-blue-500": variant === "third",
      "rounded-lg gap-[10px] font-bold bg-mint-cream text-primary": variant === "fourth",
    }
  );

 
  return (
    <button 
      type={type} 
      onClick={onClick || (() => {})} 
      className={buttonClasses}
    >
      {iconPosition === "before" && Icon && <Icon />}
      {children}
      {iconPosition === "after" && Icon && <Icon />}
    </button>
  );
};
