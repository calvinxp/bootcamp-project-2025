import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function AboutPage() {
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
          <h1 className={styles.page_title}>About Me</h1>
          <div className={styles.section_box}>
            <p>
              <strong>Hi,</strong> my name is <strong>Calvin Richards</strong>{" "}
              and I&apos;m from <em>Arroyo Grande CA</em>. I&apos;m a
              second-year Computer Science major. I&apos;ve been doing robotics
              and coding for over
              <strong>7 years</strong>. One of my Interests is building and
              taking apart computers.
            </p>
            <h2>Club Involvement</h2>
            <p>
              I&apos;ve enjoyed partaking in a variety of clubs at Cal Poly. One
              of my favorites is the <strong>Cal Poly VEX U team</strong>. There
              I have worked on prototyping and building robots for global
              competitions. I&apos;ve also participated in the{" "}
              <strong>Innovation Sandbox</strong>, where I operated 3D printers
              to print various things for Cal Poly Students. I&apos;ve been
              involved in a few other clubs like the
              <strong>Google Developer Student Club</strong>, where I learned
              about creating apps using Dart and Flutter; <strong>CS:AI</strong>{" "}
              where I&apos;ve leaned about AI and Machine learning, and have
              gotten to train basic AI models; and the{" "}
              <strong>Cal poly Security club</strong>, where I&apos;ve learned
              about satellite security and various other topics.
            </p>
            <h2>Projects</h2>
            <p>Take a look at some of my projects.</p>
            <ul>
              <li>
                <Link href="/#Swerve Drivetrain" className={styles.link}>
                  Swerve Drive
                </Link>
              </li>
              <li>
                <Link href="/#choreo" className={styles.link}>
                  Choreo Path Planning
                </Link>
              </li>
              <li>
                <Link href="/#3 Drive Adapter" className={styles.link}>
                  3 Drive Adapter
                </Link>
              </li>
              <li>
                <Link
                  href="/#VEX U 2024 Robot CAD Practice"
                  className={styles.link}
                >
                  VEX U 2024 Robot CAD Practice
                </Link>
              </li>
              <li>
                <Link href="/#Cabin Project" className={styles.link}>
                  Cabin Project
                </Link>
              </li>
              <li>
                <Link href="/#This Website" className={styles.link}>
                  This Website
                </Link>
              </li>
              <li>
                <Link href="/#Map Generator" className={styles.link}>
                  Map Generator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
