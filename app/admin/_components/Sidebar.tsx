import { Camera, Home, PenTool, Trophy } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

const AdminSidebar = () => {
  const path: string = usePathname();
  
  type NavItem = {
    name: string;
    href: string;
    icon: React.ElementType;
  };
  const navItems = [
    { name: "Users", href: "/admin/users", icon: Home },
    { name: "Pioneers", href: "/admin/pioneers", icon: Trophy },
    { name: "Blogs", href: "/admin/blogs", icon: PenTool },
    { name: "Memories", href: "/admin/memories", icon: Camera },
  ];

  return (
    <div className="p-5 bg-background h-screen shadow-sm border border-background">
      <hr className="mt-7  border-background" />
      <div className="mt-5 h-[80%] overflow-y-auto pr-1">
        {navItems.map((item, index) => (
          <div
            key={item.href}
            className="transition-all duration-300 ease-in-out flex flex-col mb-4 group"
          >
            <div
              className={`flex items-center rounded-md justify-start p-3 cursor-pointer ${
                path === item.href
                  ? "bg-secondary text-white"
                  : "text-gray-500 hover:text-white hover:bg-secondary hover:opacity-40"
              }`}
            >
              <Link
                href={item.href}
                key={item.href}
                className="flex items-center gap-2"
              >
                <item.icon className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                <span>{item.name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
