import React from "react";
import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image
        src="/bgimage.png"
        alt="background"
        width={1920}
        height={1080}
        draggable={false}
        className={style.bkg}
        priority
      />
      <main>
        <div className={style.side_panel}>
          <ul className={style.side_panel_list}>
            <li>
              <a href="#Swerve Drivetrain" className={style.side_panel_link}>
                Swerve Drivetrain
              </a>
            </li>
            <li>
              <a href="#choreo" className={style.side_panel_link}>
                Autonomous Path Planning
              </a>
            </li>
            <div className={style.mini_break}></div>
            <li>
              <a href="#3 Drive Adapter" className={style.side_panel_link}>
                3 Drive Adapter
              </a>
            </li>
            <li>
              <a
                href="#VEX U 2024 Robot CAD Practice"
                className={style.side_panel_link}
              >
                VEX U 2024 Robot CAD Practice
              </a>
            </li>
            <li>
              <a href="#Cabin Project" className={style.side_panel_link}>
                Cabin Project
              </a>
            </li>
            <div className={style.mini_break}></div>
            <li>
              <a href="#This Website" className={style.side_panel_link}>
                This Website
              </a>
            </li>
            <div className={style.mini_break}></div>
            <li>
              <a href="#Map Generator" className={style.side_panel_link}>
                Map Generator
              </a>
            </li>
          </ul>
        </div>

        <div className={style.main_content}>
          <h1 className={style.page_title}>Introduction</h1>
          <p>
            Hi, I&apos;m Calvin Richards. I&apos;m a second year Computer
            Science major at Cal Poly Slo. I enjoy coding and robotics. Here are
            some projects I have worked on.
          </p>
          <div className={style.big_break}></div>
          <div className={style.section_box}>
            <h1 className={style.page_title}>
              Autonomous Path Planning for Swerve
            </h1>
            <h2 id="Swerve Drivetrain">Swerve Drive</h2>
            <div className={style.project_pictures}>
              <Image
                src="/swerve_prototype.jpg"
                alt="swerve prototype"
                width={600}
                height={400}
                className={style.project_image}
              />
              <Image
                src="/swerve_final.png"
                alt="swerve final"
                width={600}
                height={400}
                className={style.project_image}
              />
              <Image
                src="/IMG_4848.gif"
                alt="swerve gif"
                width={600}
                height={400}
                className={style.project_image}
              />
            </div>
            <p>
              I implemented the WPIlib API to enable our robot to be controlled
              both remotely and autonomously.
            </p>
            <div className={style.small_break}></div>
            <h2 id="choreo">Choreo Path Planning</h2>
            <div className={style.project_pictures}>
              <Image
                src="/choreo.gif"
                alt="Choreo path planning visualization"
                width={600}
                height={400}
                className={style.project_image}
              />
            </div>
            <p>
              I implemented a program called Choreo that allowed our robot
              precisely follow predetermined paths.
            </p>
          </div>
          <div className={style.small_break}></div>
          <div className={style.section_box}>
            <h1 className={style.project_title}>Cad Projects</h1>
            <div className={style.project_pictures}>
              <h2 id="3 Drive Adapter">3 Drive Adapter</h2>
              <Image
                src="/3-drive-adapter.png"
                alt="3 Drive Adapter CAD design"
                width={600}
                height={400}
                className={style.project_image}
              />
              <Image
                src="/3-drive-adapter-final.jpg"
                alt="3 Drive Adapter final product"
                width={600}
                height={400}
                className={style.project_image}
              />
              <p>
                I designed this adapter in Onshape so 3 2.5 in SSDs to fit into
                the space of a single 3.5 in HDD.
              </p>
            </div>
            <div className={style.project_pictures}>
              <h2 id="VEX U 2024 Robot CAD Practice">
                VEX U 2024 Robot CAD Practice
              </h2>
              <Image
                src="/robot.png"
                alt="VEX U 2024 robot CAD design"
                width={600}
                height={400}
                className={style.project_image}
              />
              <p>
                Over 2025 summer I, with minimal 1:1 help, I designed a robot in
                SolidWorks for the VEX U 2024 game <em>High Steaks</em>.
              </p>
            </div>
            <div className={style.project_pictures}>
              <h2 id="Cabin Project">Cabin Project</h2>
              <Image
                src="/cabin-autocad.png"
                alt="Cabin AutoCAD design"
                width={600}
                height={400}
                className={style.project_image}
              />
              <p>I designed a ~1000 square foot cabin.</p>
            </div>
          </div>
          <div className={style.small_break}></div>

          <div className={style.section_box}>
            <h1 className={style.project_title} id="This Website">
              This Website
            </h1>
            <div className={style.project_pictures}>
              <Image
                src="/this-project.png"
                alt="Screenshot of this website project"
                width={600}
                height={400}
                className={style.project_image}
              />

              <p>
                I followed the Hack4Impact bootcap to create this website as a
                portfolio for all my personal projects.
              </p>
            </div>
          </div>

          <div className={style.small_break}></div>
          <div className={style.section_box}>
            <h1 className={style.project_title} id="Map Generator">
              Map Generator
            </h1>
            <div className={style.project_pictures}>
              <Image
                src="/map.png"
                alt="Generated terrain map"
                width={600}
                height={400}
                className={style.project_image}
              />
              <Image
                src="/small-map.png"
                alt="Small generated terrain map"
                width={600}
                height={400}
                className={style.project_image}
              />
              <p>
                I developed my own algorithm to generate a 2d terrain map in a
                variety of sizes and scales.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className={style.small_break}></div>
    </div>
  );
}
