import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  // List containing information about each martyr
  const martyrs = [
    {
      name: "Shahid Shykh Ashhabul Yamin",
      profileUrl: "/SY_profile.jpg",
      description: "Shahid Yamin was a brave student who sacrificed his life to protect the students and civilian protesters from the tear gas shells and bullets fired from Police APC. He was a kind but brave soul; his courage and dedication continue to inspire us all.",
      link: "/about/shahid_yamin",
    },
    {
      name: "Shahid MD. Rakibul Hossein",
      profileUrl: "/SR_profile.png",
      description: "Shahid Rakib was a very inspirational, charismatic student and person who always stood up for people, helped them and came up in moments of their dispair, he didn't hesitat to participate in the student movement despite he bacame a Professional, he participated in the movement, not because he was once a student but he was a person who always stood by the side of justice",
      link: "/about/shahid_yamin",
    }
  ];

  return (
    <div className="min-h-screen bg-black bg-opacity-90 bg-[radial-gradient(#330000_1px,transparent_1px)] [background-size:16px_16px] text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-red-600">Our Brave Martyrs</h1>
        <div className="grid md:grid-cols-2 gap-2">
          {martyrs.map((martyr, index) => (
            <Card key={index} className="bg-gray-900 border-red-800 flex flex-col w-[30rem]">
              <Link href={martyr.link} className="absolute inset-0 z-10" prefetch={false} />
              <CardHeader>
                <CardTitle className="text-red-500 m-auto">{martyr.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={martyr.profileUrl}
                  alt={martyr.name}
                  width={128}
                  height={128}
                  className="aspect-square w-fit object-cover m-auto"
                />
                <p className="text-[1rem] text-gray-400 p-4 w-fit m-auto">
                  {martyr.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-red-700 hover:bg-red-600 text-white w-fit m-auto">View More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
