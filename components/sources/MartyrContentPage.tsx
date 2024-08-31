import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database or API
const martyrData = {
  name: "John Doe",
  age: 35,
  killedBy: "Oppressive Regime",
  deathAge: 35,
  deathLocation: "Freedom Square, Capital City",
  image: "/next.svg",
  bio: "John Doe was a courageous activist who dedicated his life to fighting for human rights and democracy...",
  achievements: [
    "Led peaceful protests for democratic reforms",
    "Established a non-profit organization for education",
    "Authored influential books on civil liberties",
  ],
  memories: [
    { title: "Remembering John's Courage", url: "#" },
    { title: "A Day in the Life of John Doe", url: "#" },
    { title: "John's Last Speech", url: "#" },
  ],
  articles: [
    { title: "The Legacy of John Doe", url: "#" },
    { title: "How John Doe Changed Our Nation", url: "#" },
    { title: "John Doe: A Symbol of Resistance", url: "#" },
  ],
}

export default function MartyrPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex justify-center md:justify-start">
          <Image
            src={martyrData.image}
            alt={martyrData.name}
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{martyrData.name}</h1>
          <p className="text-xl mb-2">Age: {martyrData.age}</p>
          <p className="text-xl mb-2">Killed by: {martyrData.killedBy}</p>
          <p className="text-xl mb-2">Died at age: {martyrData.deathAge}</p>
          <p className="text-xl mb-2">Place of death: {martyrData.deathLocation}</p>
        </div>
      </div>

      <Tabs defaultValue="bio" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="bio">Bio</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="memories">Memories</TabsTrigger>
          <TabsTrigger value="articles">Blog/Articles</TabsTrigger>
        </TabsList>
        <TabsContent value="bio">
          <Card>
            <CardHeader>
              <CardTitle>Biography</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{martyrData.bio}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {martyrData.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="memories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {martyrData.memories.map((memory, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{memory.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={memory.url} className="text-primary hover:underline">
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
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={article.url} className="text-primary hover:underline">
                    Read article
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}