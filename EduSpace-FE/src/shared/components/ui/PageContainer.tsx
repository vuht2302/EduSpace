import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="flex-1 lg:ml-64 xl:mr-[340px] p-6 md:p-10 min-h-[calc(100vh-64px)]">
      {children}
    </main>
  );
}
