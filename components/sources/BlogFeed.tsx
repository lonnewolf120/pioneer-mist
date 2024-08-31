"use client"
import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: 1,
    title: "Remembering Shahid Yamin: A Hero's Legacy",
    excerpt: "Exploring the life and sacrifices of Shahid Yamin and his impact on our nation.",
    date: "2023-05-15",
    tags: ["shahid_yamin", "hero", "remembrance"]
  },
  {
    id: 2,
    title: "The Quota Movement: A Fight for Equality",
    excerpt: "An in-depth look at the Quota Movement and its significance in our society.",
    date: "2023-06-02",
    tags: ["quota_movement", "equality", "social_justice"]
  },
  {
    id: 3,
    title: "Shahid Rakib: Courage in the Face of Adversity",
    excerpt: "Honoring Shahid Rakib's bravery and the lasting impact of his actions.",
    date: "2023-06-20",
    tags: ["shahid_rakib", "bravery", "inspiration"]
  },
  {
    id: 4,
    title: "The Importance of Remembering Our Martyrs",
    excerpt: "Why it's crucial to honor and remember those who have made the ultimate sacrifice.",
    date: "2023-07-05",
    tags: ["shahid_yamin", "shahid_rakib", "remembrance"]
  },
  {
    id: 5,
    title: "Quota Movement: One Year Later",
    excerpt: "Reflecting on the changes and ongoing challenges a year after the Quota Movement.",
    date: "2023-07-18",
    tags: ["quota_movement", "reflection", "progress"]
  }
]

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

export default function BlogsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(post => 
    (selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag))) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen bg-black bg-opacity-90 bg-[radial-gradient(#330000_1px,transparent_1px)] [background-size:16px_16px] text-gray-200 pb-12">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Blog Posts</h1>
        
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-800 text-white border-red-800 mb-4"
          />
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className={`cursor-pointer ${
                  selectedTags.includes(tag) ? 'bg-red-600' : 'text-gray-300 border-red-800'
                }`}
                onClick={() => toggleTag(tag)}
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredPosts.map(post => (
            <Card key={post.id} className="bg-gray-900 border-red-800">
              <CardHeader>
                <CardTitle className="text-red-500">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-red-900 text-gray-200">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Button className="bg-red-700 hover:bg-red-600">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-400 mt-8">No blog posts found matching your criteria.</p>
        )}
      </div>
    </div>
  )
}