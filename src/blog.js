var blogData = [
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
var blogContainer = document.getElementById("blog-container");
blogData.forEach(function (blog_post_data) {
    var post = document.createElement("div");
    var title = document.createElement("h1");
    title.innerHTML = blog_post_data.title;
    post.appendChild(title);
    var date = document.createElement("div");
    date.innerHTML = blog_post_data.date;
    post.appendChild(date);
    var description = document.createElement("div");
    description.innerHTML = blog_post_data.description;
    post.appendChild(date);
    var image = document.createElement("img");
    image.src = blog_post_data.image;
    image.className = "project-image";
    post.appendChild(image);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(post);
});
