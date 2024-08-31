"use client";
import { Logs } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import AdminSidebar from "./_components/Sidebar";

const AdminPanel = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        sidebar
      ) {
        setSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef, sidebar]);

  return (
    <div>
      {/* menu icon when in mobile view */}
      <Logs
        className="text-gray-500 cursor-pointer hover:text-secondary
       sm:hidden absolute top-2 left-1"
        onClick={() => setSidebar(!sidebar)}
      />

      {/* sidebar */}
      <div
        ref={sidebarRef}
        className={`sm:w-64 z-10 sm:block fixed transition-all duration-300 ease-in-out ${
          !sidebar && "hidden"
        }`}
      >
        <AdminSidebar />
      </div>

      {/* main content */}
      <div className="sm:ml-64 bg-muted"> {children}</div>
    </div>
  );
};

export default AdminPanel;
