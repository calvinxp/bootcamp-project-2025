import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import blogs from "../blogData";

export default function BlogPage() {
  return (
    <div>
      <Image
        src="/bgimage.png"
        alt="background"
        width={1920}
        height={1080}
        draggable={false}
        className={styles.bkg}
        priority
      />
      <main>
        <div className={styles.center_main_content}>
          {blogs.map((post) => (
            <div key={post.slug} className={styles.section_box}>
              <h1 className={styles.page_title}>{post.title}</h1>
              <div>{post.date}</div>
              <div>{post.description}</div>
              <Image
                src={post.image}
                alt={post.altImage}
                width={600}
                height={400}
                className={styles.project_image}
              />
              <br />
              <Link href={`/blog/${post.slug}`} className={styles.link}>
                learn more here
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
