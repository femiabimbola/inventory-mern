"use client"

import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import StoreProvider, { useAppSelector } from "@/redux";
import { useEffect } from "react";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardWrapperProps) => {
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  // We want to add it to the html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });


  return (
    <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar />
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-100  pl-3 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};


 export  const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

