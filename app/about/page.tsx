import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pioneers of MIST",
  description: "Information about the website Pioneers of MIST",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Pioneers of MIST
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/1200px-MIST.svg.png" alt={SiteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {SiteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            A place where MISTians share their knowledge and experiences
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4 md:mt-20 text-justify">
          Our website is a platform for the MIST community to share their
          knowledge and experiences. We aim to provide a platform for the
          community to share their knowledge and experiences with the world. We
          have made this website in Memory of our martyred classmate <b>Shykh Aashhabul Yamin</b>
          and our respected senior <b>Md Rakibul Hussein</b>, who were students of MIST.
        </p>
      </div>
    </div>
  );
}
