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

const blogs: Blog[] = [
  {
    createdAt: "2022-01-01",
    createdBy: "John Doe",
    title: "Sample Blog",
    pionerId: "123456",
    hashTags: ["programming", "typescript"],
    type: "tutorial",
    content: [
      {
        chapter: "Introduction",
        content: "Lorem ipsum dolor sit amet...",
        imageUrl: "https://example.com/image1.jpg",
      },
      {
        chapter: "Chapter 1",
        content: "Lorem ipsum dolor sit amet...",
        imageUrl: "https://example.com/image2.jpg",
      },
      {
        chapter: "Chapter 2",
        content: "Lorem ipsum dolor sit amet...",
        imageUrl: "https://example.com/image3.jpg",
      },
    ],
    published: true,
    description: "This is a sample blog.",
  },
  {
    createdAt: "2022-01-02",
    createdBy: "Jane Doe",
    title: "Another Blog",
    pionerId: "654321",
    hashTags: ["programming", "javascript"],
    type: "tutorial",
    content: [
      {
        chapter: "Introduction",
        content: "Lorem ipsum dolor sit amet...",
        imageUrl: "https://example.com/image4.jpg",
      },
      {
        chapter: "Chapter 1",
        content: "Lorem ipsum dolor sit amet...",
        imageUrl: "https://example.com/image5.jpg",
      },
      {
        chapter: "Chapter 2",
        content: "Lorem ipsum dolor sit amet...",
        imageUrl: "https://example.com/image6.jpg",
      },
    ],
    published: true,
    description: "This is another sample blog.",
  },
];

export default blogs;