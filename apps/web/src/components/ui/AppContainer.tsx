import React from 'react';


interface AppContainerProps {
  children: React.ReactNode; 
}

// 2. O Componente em si
export function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="max-w-[520px] mx-auto min-h-screen flex flex-col pb-24 bg-[#fff9ef]">
      {children}
    </div>
  );
}