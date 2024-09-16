"use client"

import { useAppDispatch, useAppSelector } from "@/redux"
import { setIsSidebarCollapsed } from "@/redux/state"
import { Archive, CircleDollarSign, Clipboard, Layout, Menu, SlidersHorizontal, User,} from "lucide-react";
import { SidebarLink } from "@/components/SidebarLink"

export const Sidebar = () => {
  const dispatch = useAppDispatch()

  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed ); // boolean

  const toggleSidebar = () => {dispatch(setIsSidebarCollapsed(!isSidebarCollapsed)); };

  const sidebarClassNames = `fixed flex flex-col ${ isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* The Top Logo */}
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
        <div>logo</div>
        <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-xl`}> TushStock</h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* The links for the dashboard */}
      <div className="flex-grow mt-8">
      <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
         <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* FOOTER FOR Nav */}
      <div>
      <p className="text-center text-xs text-gray-500">&copy; 2024 TushStock</p>
      </div>
      </div>
  )
}
