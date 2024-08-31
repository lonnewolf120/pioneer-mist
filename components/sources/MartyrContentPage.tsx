"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

type BlogPost = {
  title: string;
  content: string;
}

type MartyrData = {
  name: string
  age: number
  killedBy: string
  deathAge: number
  deathLocation: string
  image: string
  bio: string
  achievements: string[]
  memories: { title: string; url: string }[]
  articles: { title: string; url: string }[]
}

export default function MartyrPage({ martyrData }: { martyrData: MartyrData }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [newBlogPost, setNewBlogPost] = useState<BlogPost>({ title: "", content: "" })
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  const handleBlogSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setBlogPosts((prevPosts) => [...prevPosts, newBlogPost])
    setNewBlogPost({ title: "", content: "" })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex justify-center md:justify-start">
            <Image
              src={martyrData.image}
              alt={martyrData.name}
              width={300}
              height={400}
              className="rounded-lg shadow-lg border-2 border-red-600"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4 text-red-600">{martyrData.name}</h1>
            <p className="text-xl mb-2">Age: {martyrData.age}</p>
            <p className="text-xl mb-2">Killed by: {martyrData.killedBy}</p>
            <p className="text-xl mb-2">Died at age: {martyrData.deathAge}</p>
            <p className="text-xl mb-2">Place of death: {martyrData.deathLocation}</p>
          </div>
        </div>

        <Tabs defaultValue="bio" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900">
            <TabsTrigger value="bio" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Bio</TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Achievements</TabsTrigger>
            <TabsTrigger value="memories" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Memories</TabsTrigger>
            <TabsTrigger value="articles" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Blog/Articles</TabsTrigger>
          </TabsList>
          <TabsContent value="bio">
            <Card className="bg-gray-900 border-red-600">
              <CardHeader>
                <CardTitle className="text-red-600">Biography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-100">{martyrData.bio}</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements">
            <Card className="bg-gray-900 border-red-600">
              <CardHeader>
                <CardTitle className="text-red-100">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {martyrData.achievements.map((achievement, index) => (
                    <li key={index} className="text-white">{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="memories">
            <Card className="bg-gray-900 border-red-600">
              <CardHeader>
                <CardTitle className="text-red-100">Memories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {martyrData.memories.map((memory, index) => (
                    <li key={index} className="text-white">
                      <a href={memory.url} className="text-red-400 hover:underline">
                        {memory.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="articles">
            <Card className="bg-gray-900 border-red-600">
              <CardHeader>
                <CardTitle className="text-red-100">Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {martyrData.articles.map((article, index) => (
                    <li key={index} className="text-white">
                      <a href={article.url} className="text-red-400 hover:underline">
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {isAdmin && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Add Blog Post</h2>
            <form onSubmit={handleBlogSubmit}>
              <Input
                type="text"
                placeholder="Blog Title"
                value={newBlogPost.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewBlogPost({ ...newBlogPost, title: e.target.value })}
                className="mb-2 bg-gray-800 text-white border-red-600"
                aria-label="Blog post title"
              />
              <Textarea
                placeholder="Write your blog post here..."
                value={newBlogPost.content}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBlogPost({ ...newBlogPost, content: e.target.value })}
                className="mb-2 bg-gray-800 text-white border-red-600"
                aria-label="Blog post content"
              />
              <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">Post Blog</Button>
            </form>
          </div>
        )}

        {/* Toggle Admin Mode button */}
        <Button onClick={() => setIsAdmin(!isAdmin)} className="mt-4 bg-red-600 hover:bg-red-700 text-white">
          Toggle Admin Mode
        </Button>
      </div>
    </div>
  )
}
