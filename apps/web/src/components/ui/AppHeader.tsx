import React from 'react';

interface AppHeaderProps {
  title?: string;      
  subtitle?: string;
  children?: React.ReactNode; 
}

export function AppHeader({
  title = 'Feira & Cia',
  subtitle = 'Sua lista inteligente da feira ao caixa',
  children,
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-[#2d4a22] text-[#fff9ef] shadow-md">
      <div className="px-4 pt-4 pb-3">
        <h1 className="font-serif text-2xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs italic opacity-85 mt-0.5">{subtitle}</p>
        )}
      </div>
      {children}
    </header>
  );
}