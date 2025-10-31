export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  altImage: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Updating website with TypeScript",
    date: "2025-10-15",
    description: "I used TypeScript to create a dynamic blog.",
    image: "/adding-ts.png",
    altImage: "vs code",
    slug: "ts-blog-page",
  },
  {
    title: "Hack for Impact",
    date: "2025-10-15",
    description:
      "I started working on the Hack for Impact Milestone 1 project.",
    image: "/h4ims1.png",
    altImage: "notion page",
    slug: "ms1",
  },
];

export default blogs;
