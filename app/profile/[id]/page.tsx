'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Dummy data
const initialUser = {
  id: '1',
  name: 'iftee',
  email: 'iftekharulislam1594@example.com',
  bio: 'Software developer passionate about all frameworks, loves to surf the web and learn new stuff',
  avatar: '/user_avatar.jpg '
}

const dummyPosts = [
  { id: '1', title: 'Getting Started with Next.js', excerpt: 'Learn the basics of Next.js and start building awesome apps.' },
  { id: '2', title: 'Advanced React Patterns', excerpt: 'Dive deep into advanced React patterns to level up your skills.' },
  { id: '3', title: 'CSS-in-JS: Pros and Cons', excerpt: 'Explore the advantages and disadvantages of using CSS-in-JS.' },
]

export default function UserProfile() {
    const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState(initialUser)
  const [isEditing, setIsEditing] = useState(false)
  const router = useRouter()

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically send a request to update the user in the backend
    console.log('User updated:', user)
  }

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Here you would typically send a request to delete the user in the backend
      console.log('User deleted')
      router.push('/')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="container mx-auto">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-900">
            <TabsTrigger value="profile" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Profile</TabsTrigger>
            <TabsTrigger value="posts" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Blog Posts</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card className="bg-gray-900 border-red-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-500">User Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-20 w-20 border-2 border-red-500">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-red-600 text-white">{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                    <p className="text-gray-400">{user.email}</p>
                  </div>
                </div>
                {isEditing ? (
                  <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                      <Input id="name" name="name" value={user.name} onChange={handleChange} className="bg-gray-800 text-white border-red-500 focus:border-red-600" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                      <Input id="email" name="email" type="email" value={user.email} onChange={handleChange} className="bg-gray-800 text-white border-red-500 focus:border-red-600" />
                    </div>
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-400">Bio</label>
                      <Textarea id="bio" name="bio" value={user.bio} onChange={handleChange} className="bg-gray-800 text-white border-red-500 focus:border-red-600" />
                    </div>
                    <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">Save Changes</Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-300">{user.bio}</p>
                    <div className="space-x-2">
                      <Button onClick={handleEdit} className="bg-red-600 hover:bg-red-700 text-white">Edit Profile</Button>
                      <Button variant="destructive" onClick={handleDelete} className="bg-gray-700 hover:bg-gray-600 text-white">Delete Account</Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="posts">
            <Card className="bg-gray-900 border-red-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-500">Your Blog Posts</CardTitle>
              </CardHeader>
              <CardContent>
                {dummyPosts.map((post) => (
                  <div key={post.id} className="mb-4 p-4 border border-red-500 rounded-lg">
                    <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                    <p className="text-gray-400">{post.excerpt}</p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" className="mr-2 border-red-500 text-red-500 hover:bg-red-600 hover:text-white">Edit</Button>
                      <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-600 hover:text-white">Delete</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}