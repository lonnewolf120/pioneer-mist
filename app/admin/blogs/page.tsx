"use client";
import React, { useEffect, useState } from "react";
import blogs from "./dummy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { buttonVariants } from "@/components/ui/button";
import { SiteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Blogs = () => {
  const [search, setSearch] = React.useState("");
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs);
  const router = useRouter();
  const latestPosts = sortPosts(posts);

  type Blog = {
    createdAt: string;
    createdBy: string;
    title: string;
    pionerId: string;
    hashTags: string[];
    type: string;
    content: {
      chapter: string;
      content: string;
      imageUrl: string;
    }[];
    published: boolean;
    description: string;
  };

  return (
    <div className="text-white flex flex-col items-center py-5 px-5 md:px-36">
      <h2 className="text-2xl font-bold">Blogs</h2>

      <div className="w-full mt-4 flex flex-col">
        {/* search blog section */}
        <Input
          type="text"
          placeholder="Search blog"
          className=" text-white p-2 rounded-md border-none"
        />

        {/* blog list */}
        <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6">
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
      </div>
    </div>
  );
};

export default Blogs;
