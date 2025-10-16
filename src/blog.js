var blogData = [
    {
        title: "Updating website with TypeScript",
        date: "2025-10-15",
        description: "I used TypeScript to create a dynamic blog.",
        image: "images/adding-ts.png",
        altImage: "vs code",
        slug: "ts-blog-page",
    },
    {
        title: "Hack for Impact",
        date: "2025-10-15",
        description: "I started working on the Hack for Impact Milestone 1 project.",
        image: "images/h4ims1.png",
        altImage: "notion page",
        slug: "ms1",
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
    post.appendChild(description);
    var image = document.createElement("img");
    image.src = blog_post_data.image;
    image.alt = blog_post_data.altImage;
    image.className = "project-image";
    post.appendChild(image);
    post.appendChild(document.createElement("br"));
    var link = document.createElement("a");
    link.href = blog_post_data.slug + ".html";
    link.innerHTML = "learn more here";
    post.appendChild(link);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(post);
});
