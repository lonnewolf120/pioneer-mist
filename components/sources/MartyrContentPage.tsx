import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [bioTab, setBioTab] = useState("growing-up")

  return (
    <div className="min-h-screen bg-black bg-opacity-90 bg-[radial-gradient(#330000_1px,transparent_1px)] [background-size:16px_16px] text-gray-200 pb-12">
      <header className="bg-gray-900 py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Shahid Yamin</h1>
          <img
            src="/placeholder.svg?height=200&width=400"
            alt="Shahid Yamin"
            className="w-full max-w-2xl h-64 object-cover rounded-md mx-auto"
          />
        </div>
      </header>

      <div className="container mx-auto px-4">
        <Tabs defaultValue="bio" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="bio" className="text-gray-200 data-[state=active]:bg-red-700">Bio</TabsTrigger>
            <TabsTrigger value="achievements" className="text-gray-200 data-[state=active]:bg-red-700">Achievements</TabsTrigger>
            <TabsTrigger value="memories" className="text-gray-200 data-[state=active]:bg-red-700">Memories</TabsTrigger>
            <TabsTrigger value="blog-posts" className="text-gray-200 data-[state=active]:bg-red-700">Blog Posts</TabsTrigger>
          </TabsList>

          <TabsContent value="bio" className="mt-6">
            <Tabs value={bioTab} onValueChange={setBioTab}>
              <TabsList className="bg-gray-800 mb-4">
                <TabsTrigger value="growing-up" className="text-gray-200 data-[state=active]:bg-red-700">Growing Up</TabsTrigger>
                <TabsTrigger value="school" className="text-gray-200 data-[state=active]:bg-red-700">School</TabsTrigger>
                <TabsTrigger value="college" className="text-gray-200 data-[state=active]:bg-red-700">College</TabsTrigger>
                <TabsTrigger value="university" className="text-gray-200 data-[state=active]:bg-red-700">University</TabsTrigger>
              </TabsList>
              <TabsContent value="growing-up">
                <p>Information about Shahid Yamin's early years and upbringing...</p>
              </TabsContent>
              <TabsContent value="school">
                <p>Details about Shahid Yamin's school life and experiences...</p>
              </TabsContent>
              <TabsContent value="college">
                <p>Information about Shahid Yamin's college years...</p>
              </TabsContent>
              <TabsContent value="university">
                <p>Details about Shahid Yamin's university education and experiences...</p>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="achievements" className="mt-6">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Notable Achievements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Achievement 1</li>
              <li>Achievement 2</li>
              <li>Achievement 3</li>
            </ul>
            <h3 className="text-xl font-bold text-red-500 mt-6 mb-2">Related Articles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-400 hover:underline">Article 1 about Shahid Yamin</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Article 2 about Shahid Yamin</a></li>
            </ul>
          </TabsContent>

          <TabsContent value="memories" className="mt-6">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Memories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="bg-gray-900 border-red-800">
                  <CardHeader>
                    <CardTitle className="text-red-500">Memory {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">A touching memory of Shahid Yamin shared by Admin...</p>
                    <Button className="mt-4 bg-red-700 hover:bg-red-600">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blog-posts" className="mt-6">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Community Blog Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="bg-gray-900 border-red-800">
                  <CardHeader>
                    <CardTitle className="text-red-500">Blog Post {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">A heartfelt blog post about Shahid Yamin by a community member...</p>
                    <Button className="mt-4 bg-red-700 hover:bg-red-600">Read Full Post</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}