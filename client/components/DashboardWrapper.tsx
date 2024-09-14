import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

export const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar />
      <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-100  pl-3 md:pl-24">
        <Navbar />
        {children}
      </main>
    </div>
  );
};
