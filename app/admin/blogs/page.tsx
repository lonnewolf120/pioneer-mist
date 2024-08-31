"use client";
import React from "react";
import blogs from "./dummy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const [search, setSearch] = React.useState("");
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs);
  const router = useRouter();

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
    <div className="text-white flex flex-col items-center py-5 px-5 md:px-36 h-screen">
      <h2 className="text-2xl font-bold">Blogs</h2>

      <div className="w-full mt-4 flex flex-col">
        {/* search blog section */}
        <Input
          type="text"
          placeholder="Search blog"
          className="bg-gray-800 text-white p-2 rounded-md border-none"
        />

        {/* blog list */}
        <div>
          {filteredBlogs.map((blog: Blog, index: number) => (
            <div
              key={blog.title}
              className="bg-gray-800 p-4 rounded-md my-2 flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-bold">{blog.title}</h3>
                <p>{blog.description}</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {blog.hashTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-white p-2 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                {/* created by and created at */}
                <p>
                  {blog.createdBy} | {blog.createdAt}
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-center">
                <Button className="bg-secondary text-white p-2 rounded-md" 
                onClick={() => {
                  router.push(`/admin/blogs/${blog.pionerId}`);
                }}
                >
                  Edit
                </Button>
                <Button className="bg-primary text-white p-2 rounded-md">
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
