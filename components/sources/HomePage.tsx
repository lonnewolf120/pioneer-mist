"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, Users, BookOpen, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


interface Martyr {
    id: number;
    name: string;
    image: string;
    description: string;
}

interface Article {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    link: string;
}

interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
}

const martyrs: Martyr[] = [
    { id: 1, name: 'Shahid Shykh Ashhabul Yamin', image: '/SY_profile.jpg', description: 'Brave soul who stood against injustice' },
    { id: 2, name: 'Shahid Shykh Ashhabul Yamin', image: '/SY_MIC.jpg', description: 'A voice for student rights' },
    { id: 3, name: 'Shahid MD. Rakibul Hossein', image: '/sr1.jpg', description: 'Champion of educational reform' },
    { id: 4, name: 'Shahid MD. Rakibul Hossein', image: '/sr2.jpg', description: 'Fought for equality in education' },
];

//TODO: add the articles
const articles: Article[] = [
    { id: 1, title: 'The History of MIST Student Movements', excerpt: 'Explore the rich history of student activism at MIST...', image: '/articles/article1.jpg', link: '/articles/history-of-mist-movements' },
    { id: 2, title: 'Remembering the Heroes of the Anti-Quota Movement', excerpt: 'A tribute to those who sacrificed everything for equality...', image: '/articles/article2.jpg', link: '/articles/remembering-heroes' },
    { id: 3, title: 'The Impact of Student Activism on Bangladesh\'s Education System', excerpt: 'How MIST students shaped the future of education...', image: '/articles/article3.jpg', link: '/articles/impact-of-student-activism' },
];

//TODO: add the events
const events: Event[] = [
    { id: 1, title: 'Annual Memorial Service', date: '2023-07-15', description: 'Honoring our fallen heroes' },
    { id: 2, title: 'Student Rights Seminar', date: '2023-08-22', description: 'Discussing the progress and challenges in student rights' },
    { id: 3, title: 'MIST Alumni Gathering', date: '2023-09-10', description: 'Connecting past and present for a better future' },
];

export default function HomePage() {
  const [currentMartyr, setCurrentMartyr] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMartyr((prev) => (prev + 1) % martyrs.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative bg-black py-48 px-8 sm:py-56 sm:px-16 lg:px-20 rounded-lg overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <Link href="/about/shahid_yamin">
            <Image
              src="/cover.jpg"
              alt="MIST campus"
              layout="fill"
              objectFit="cover"
              className="opacity-60"
            />
            </Link>
          </div>
          <div
            id="pioneer text"
            className="absolute bottom-10 left-10 max-w-3xl opacity-80 text-left"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-red-500">
              MIST Pioneers
            </h1>
            <div className="mt-6 text-xl max-w-prose">
              Honoring the brave students who fought for rights and justice at the Military Institute of Science and Technology.
            </div>
            <div className="mt-10">
              <Link href="/about/shahid_yamin">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Learn More about Shykh Ashhabul Yamin
              </Button>
              </Link>
            </div>
          </div>
        </div>


        {/* Martyrs Carousel */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Our Brave Martyrs</h2>
          <div className="relative max-w-xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out transform">
              <Image
                src={martyrs[currentMartyr].image}
                alt={martyrs[currentMartyr].name}
                width={800}
                height={400}
                layout="responsive"
                objectFit="cover"
                className="transition-opacity duration-500 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentMartyr((prev) => (prev - 1 + martyrs.length) % martyrs.length)}
                className="bg-black/50 text-white hover:bg-red-600/75"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentMartyr((prev) => (prev + 1) % martyrs.length)}
                className="bg-black/50 text-white hover:bg-red-600/75"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
              <p className="text-lg font-semibold">{martyrs[currentMartyr].name}</p>
              <p className="text-sm">{martyrs[currentMartyr].description}</p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mt-16 bg-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="h-8 w-8 mx-auto text-red-500" />
              <p className="mt-2 text-3xl font-semibold">1000+</p>
              <p className="text-gray-400">Students Involved</p>
            </div>
            <div>
              <Calendar className="h-8 w-8 mx-auto text-red-500" />
              <p className="mt-2 text-3xl font-semibold">50+</p>
              <p className="text-gray-400">Events Organized</p>
            </div>
            <div>
              <BookOpen className="h-8 w-8 mx-auto text-red-500" />
              <p className="mt-2 text-3xl font-semibold">20+</p>
              <p className="text-gray-400">Publications</p>
            </div>
            <div>
              <Award className="h-8 w-8 mx-auto text-red-500" />
              <p className="mt-2 text-3xl font-semibold">10</p>
              <p className="text-gray-400">National Awards</p>
            </div>
          </div>
        </section>

        {/* Featured Content Tabs */}
        <section className="mt-16">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
              <TabsTrigger value="articles" className="text-white data-[state=active]:bg-red-600">Articles</TabsTrigger>
              <TabsTrigger value="events" className="text-white data-[state=active]:bg-red-600">Upcoming Events</TabsTrigger>
            </TabsList>
            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {articles.map((article) => (
                  <Card key={article.id} className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-red-500">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={300}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                        className="rounded-md mb-4"
                      />
                      <CardDescription className="text-gray-300">{article.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Link href={article.link} passHref>
                        <Button variant="outline" className="w-full hover:bg-red-600 hover:text-white">Read More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {events.map((event) => (
                  <Card key={event.id} className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-red-500">{event.title}</CardTitle>
                      <CardDescription className="text-gray-300">{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full hover:bg-red-600 hover:text-white">Register</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-red-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
          <p className="mb-6">Be a part of the ongoing struggle for student rights and social justice.</p>
          <Button variant="outline" className="bg-white text-red-600 hover:bg-gray-100">Get Involved</Button>
        </section>
      </div>
  )
}