import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none text-center";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide",
    md: "px-5 py-2.5 text-sm sm:text-base font-semibold",
    lg: "px-7 py-3.5 text-base sm:text-lg font-bold shadow-md",
  };

  const variantStyles = {
    primary: "bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-900 border border-transparent shadow-sm hover:shadow-navy-glow",
    gold: "bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 text-navy-950 font-bold hover:from-gold-400 hover:to-gold-600 focus:ring-gold-500 border border-gold-400 shadow-md hover:shadow-gold-glow",
    secondary: "bg-navy-100 text-navy-900 hover:bg-navy-200 focus:ring-navy-400 border border-transparent",
    outline: "bg-transparent text-navy-900 border-2 border-navy-900 hover:bg-navy-900 hover:text-white focus:ring-navy-900",
    outlineWhite: "bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-navy-950 focus:ring-white",
    ghost: "bg-transparent text-navy-900 hover:bg-slate-100 focus:ring-slate-300",
    danger: "bg-crimson-600 text-white hover:bg-crimson-700 focus:ring-crimson-600",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 -ml-0.5 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-0.5 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} onClick={onClick} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
