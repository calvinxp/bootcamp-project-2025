import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function ResumePage() {
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
          <iframe
            src="/Resume.pdf"
            style={{
              width: "100%",
              height: "100vh",
              border: "none",
            }}
            title="Resume PDF"
          />
        </div>
      </main>
    </div>
  );
}
