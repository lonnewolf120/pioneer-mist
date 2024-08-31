"use client"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {martyrData.memories.map((memory, index) => (
                <Card key={index} className="bg-gray-900 border-red-600">
                  <CardHeader>
                    <CardTitle className="text-red-600">{memory.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href={memory.url} className="text-red-400 hover:underline">
                      Read memory
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {martyrData.articles.map((article, index) => (
                <Card key={index} className="bg-gray-900 border-red-600">
                  <CardHeader>
                    <CardTitle className="text-red-100">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href={article.url} className="text-red-400 hover:underline">
                      Read article
                    </Link>
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