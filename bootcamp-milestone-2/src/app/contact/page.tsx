import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function ContactPage() {
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
        <div
          className={styles.center_main_content}
          style={{ textAlign: "center" }}
        >
          <h1 className={styles.page_title}>Contact</h1>
          <div className={styles.section_box}>
            <p>
              Email me at{" "}
              <a
                href="mailto:richardscalvin119@gmail.com"
                className={styles.link}
              >
                richardscalvin119@gmail.com
              </a>
            </p>
            <p>I&apos;d love to talk.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
