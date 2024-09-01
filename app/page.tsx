"use client";
import { buttonVariants } from "@/components/ui/button";
import { SiteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  const [imagePath, setImagePath] = useState("/SY_MIC.jpg");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/SY_MIC.jpg", "/cover.jpg", "/sr1.jpg", "/sr2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setImagePath(images[currentImageIndex]);
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div
          className="container flex flex-col md:flex-row md:justify-between items-center gap-4 text-center
         transition-all duration-300 ease-in-out"
        >
          <Image
            src={imagePath}
            width={450}
            height={550}
            alt="yamin"
            className="rounded-md transition-all duration-300 ease-in-out h-auto w-auto"
          />
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
              Pioneers of MIST
            </h1>
            <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
              Honoring the brave students who fought for rights and justice at
              the Military Institute of Science and Technology.
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-fit"
                )}
              >
                View our blogs
              </Link>
              <Link
                href={SiteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-fit"
                )}
              >
                MIST Official Website
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map(
            (post) =>
              post.published && (
                <li
                  key={post.slug}
                  className="first:border-t first:border-border"
                >
                  <PostItem
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    tags={post.tags}
                  />
                </li>
              )
          )}
        </ul>
      </section>
    </>
  );
}
