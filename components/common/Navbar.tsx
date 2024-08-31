"use client"
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon, UserCircle, Home, Info, Mail, PenTool , Settings, LogOut, Trophy,Camera } from 'lucide-react'
import ThemeSelector from "./ThemeSelector"

interface User {
  id: string;
  name: string;
  email: string;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}


const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Pioneers', href: '/about', icon: Trophy },
  { name: 'Blogs', href: '/blogs/feed', icon: PenTool },
  { name: 'Memories', href: '/memories/feed', icon: Camera },
]

const DDItems: NavItem[] = [ { name: 'Dashboard', href: '/dashboard', icon: Info },
    { name: 'Signout', href: '/logout', icon: Mail }  
]

export default function Component() {
  const [user, setUser] = useState<User | null>(null)
//   const router = useRouter()
  
  useEffect(() => {
    setUser({
        id: '12345',
        name: 'someone',
        email: 'something'
    })
    const fetchUser = async () => {
      const res = await fetch('/api/user')
      if (res.ok) {
        const userData = await res.json()
        setUser(userData)
      }
    }
    fetchUser()
  }, [])

return (
    <nav className="bg-black text-white border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold text-red-600">
                        Logo
                    </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name}
                            href={item.href} 
                            className={`inline-flex items-center px-1 pt-1 text-sm font-medium 'border-transparent text-gray-300 hover:border-gray-300 hover:text-red-600`}
                        >
                            <item.icon className="w-4 h-4 mr-2" />
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative rounded-full bg-black p-1 text-gray-300 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black">
                                    <span className="absolute -inset-1.5" />
                                    <UserCircle className="h-6 w-6" aria-hidden="true" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-black border border-red-800">
                                <DropdownMenuLabel className="text-gray-300">{user.name}</DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-red-600" />
                                { DDItems.map((item) =>(
                                <DropdownMenuItem className="text-gray-300 hover:bg-red-900 hover:text-white">
                                    <UserCircle className="mr-2 h-4 w-4" />
                                     <Link href={item.href}><span>{item.name}</span></Link>
                                </DropdownMenuItem>))
                                }
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                            
                        <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                            Log in
                        </Button>
                    )}
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                                <span className="sr-only">Open main menu</span>
                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-black border border-red-800">
                            {navItems.map((item) => (
                                <DropdownMenuItem key={item.name} asChild>
                                    <Link href={item.href} className="flex items-center text-gray-300 hover:bg-red-900 hover:text-white">
                                        <item.icon className="mr-2 h-4 w-4" />
                                        <span>{item.name}</span>
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                            {user ? (
                                <>
                                    <DropdownMenuSeparator className="bg-red-800" />
                                    <DropdownMenuLabel className="text-gray-300">{user.name}</DropdownMenuLabel>
                                    <DropdownMenuItem className="text-gray-300 hover:bg-red-900 hover:text-white">
                                        <UserCircle className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-gray-300 hover:bg-red-900 hover:text-white">
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Dashboard</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-gray-300 hover:bg-red-900 hover:text-white">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Sign out</span>
                                    </DropdownMenuItem>
                                </>
                            ) : (
                                <DropdownMenuItem className="text-gray-300 hover:bg-red-900 hover:text-white">
                                    <Link href="/login">Log in</Link>
                                    
                                </DropdownMenuItem>
                            )}
                            
                            <DropdownMenuItem>
                                <ThemeSelector text="Toggle theme" />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> 
                </div>
                
            </div>
        </div>
    </nav>
)
}