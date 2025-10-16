type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  altImage: string;
  slug: string;
};

const blogData: Blog[] = [
  {
    title: "Updating website with TypeScript",
    date: "2025-10-15",
    description: "I used TypeScript to create a dynamic blog",
    image: "images/bgimage.png",
    altImage: "temp background image",
    slug: "i dont know yet",
  },
  {
    title: "fsdafsdafsda",
    date: "2025-10-15",
    description: "fjdaskl fd asjfjdkl jkl ;a",
    image: "images/bgimage.png",
    altImage: "temp background image",
    slug: "i dont know yet",
  },
];

const blogContainer = document.getElementById("blog-container");

blogData.forEach((blog_post_data) => {
  let post = document.createElement("div");

  let title = document.createElement("h1");
  title.innerHTML = blog_post_data.title;
  post.appendChild(title);

  let date = document.createElement("div");
  date.innerHTML = blog_post_data.date;
  post.appendChild(date);

  let description = document.createElement("div");
  description.innerHTML = blog_post_data.description;
  post.appendChild(date);

  let image = document.createElement("img");
  image.src = blog_post_data.image;
  image.alt = blog_post_data.altImage;
  image.className = "project-image";
  post.appendChild(image);

  // do stuff with slug

  blogContainer?.appendChild(post);
});
