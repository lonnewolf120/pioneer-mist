"use client"
import { useState, ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define an interface for the Header props
interface HeaderProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
}

// Header component
const Header: React.FC<HeaderProps> = ({ title, imageUrl, imageAlt }) => (
  <header className="bg-gray-900 py-8 mb-8">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{title}</h1>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full max-w-2xl h-64 object-cover rounded-md mx-auto"
      />
    </div>
  </header>
);

// Define an interface for the TabSection props
interface TabSectionProps {
  title: string;
  content: ReactNode;
}

// TabSection component
const TabSection: React.FC<TabSectionProps> = ({ title, content }) => (
  <TabsContent value={title.toLowerCase()} className="mt-6">
    <h2 className="text-2xl font-bold text-red-500 mb-4">{title}</h2>
    {content}
  </TabsContent>
);

// Define an interface for the MemoryCard props
interface MemoryCardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

// MemoryCard component
const MemoryCard: React.FC<MemoryCardProps> = ({ title, description, buttonText, onClick }) => (
  <Card className="bg-gray-900 border-red-800">
    <CardHeader>
      <CardTitle className="text-red-500">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-400">{description}</p>
      <Button className="mt-4 bg-red-700 hover:bg-red-600" onClick={onClick}>
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

// Define an interface for BioSection props
interface BioSectionProps {
  bioSections: { title: string; content: string }[];
}

// BioSection component
const BioSection: React.FC<BioSectionProps> = ({ bioSections }) => {
  const [bioTab, setBioTab] = useState(bioSections[0].title.toLowerCase());

  return (
    <Tabs value={bioTab} onValueChange={setBioTab}>
      <TabsList className="bg-gray-800 mb-4">
        {bioSections.map((section) => (
          <TabsTrigger key={section.title} value={section.title.toLowerCase()} className="text-gray-200 data-[state=active]:bg-red-700">
            {section.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {bioSections.map((section) => (
        <TabsContent key={section.title} value={section.title.toLowerCase()}>
          <p>{section.content}</p>
        </TabsContent>
      ))}
    </Tabs>
  );
};

// Define an interface for the MartyrPage props
interface MartyrPageProps {
  header: HeaderProps;
  bioSections: { title: string; content: string }[];
  achievements: string[];
  articles: { title: string; link: string }[];
  memories: { title: string; description: string }[];
  blogPosts: { title: string; description: string }[];
}

// Main MartyrPage component
const MartyrPage: React.FC<MartyrPageProps> = ({
  header,
  bioSections,
  achievements,
  articles,
  memories,
  blogPosts,
}) => {
  return (
    <div className="min-h-screen bg-black bg-opacity-90 bg-[radial-gradient(#330000_1px,transparent_1px)] [background-size:16px_16px] text-gray-200 pb-12">
      <Header {...header} />

      <div className="container mx-auto px-4">
        <Tabs defaultValue="bio" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="bio" className="text-gray-200 data-[state=active]:bg-red-700">Bio</TabsTrigger>
            <TabsTrigger value="achievements" className="text-gray-200 data-[state=active]:bg-red-700">Achievements</TabsTrigger>
            <TabsTrigger value="memories" className="text-gray-200 data-[state=active]:bg-red-700">Memories</TabsTrigger>
            <TabsTrigger value="blog-posts" className="text-gray-200 data-[state=active]:bg-red-700">Blog Posts</TabsTrigger>
          </TabsList>

          <TabsContent value="bio" className="mt-6">
            <BioSection bioSections={bioSections} />
          </TabsContent>

          <TabSection
            title="Achievements"
            content={
              <>
                <ul className="list-disc list-inside space-y-2">
                  {achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-bold text-red-500 mt-6 mb-2">Related Articles</h3>
                <ul className="space-y-2">
                  {articles.map((article, i) => (
                    <li key={i}>
                      <a href={article.link} className="text-blue-400 hover:underline">{article.title}</a>
                    </li>
                  ))}
                </ul>
              </>
            }
          />

          <TabSection
            title="Memories"
            content={
              <div className="grid md:grid-cols-2 gap-6">
                {memories.map((memory, i) => (
                  <MemoryCard
                    key={i}
                    title={memory.title}
                    description={memory.description}
                    buttonText="Read More"
                    onClick={() => console.log(`Read more about ${memory.title}`)}
                  />
                ))}
              </div>
            }
          />

          <TabSection
            title="Blog Posts"
            content={
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, i) => (
                  <MemoryCard
                    key={i}
                    title={post.title}
                    description={post.description}
                    buttonText="Read Full Post"
                    onClick={() => console.log(`Read full post: ${post.title}`)}
                  />
                ))}
              </div>
            }
          />
        </Tabs>
      </div>
    </div>
  );
}

export default MartyrPage;
