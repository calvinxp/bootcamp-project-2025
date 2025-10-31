<html>
  <head>
    <title>Main page</title>
    {/* <link rel="stylesheet" href="styles.min.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
      rel="stylesheet" */}
    {/* /> */}
  </head>
  <body>
    {/* <!-- <div ><img src="sequoianationalpark/IMG_6180.png" ></div> --> */}
    <img src="images/bgimage.png" draggable="false" className="bkg" />
    <nav className="navbar">
      <a href="index.html" className="navlink">Home</a>
      <a href="about.html" className="navlink">About Me</a>
      <a href="portfolio.html" className="navlink">Portfolio</a>
      <a href="blog.html" className="navlink">Blog</a>
      <a href="contact.html" className="navlink">Contact</a>
      <a href="resume.html" id="resume" className="navlink">Resume</a>
    </nav>
    <main>
      <div className="side-panel">
        <ul className="side-panel-list">
          <li><a href="#Swerve Drivetrain" className="side-panel-link">Swerve Drivetrain</a></li>
          <li>
            <a href="#choreo" className="side-panel-link">Autonomous Path Planning</a>
          </li>
          <div className="mini-break"></div>
          <li><a href="#3 Drive Adapter" className="side-panel-link">3 Drive Adapter</a></li>
          <li>
            <a href="#VEX U 2024 Robot CAD Practice" className="side-panel-link">VEX U 2024 Robot CAD Practice</a>
          </li>
          <li><a href="#Cabin Project" className="side-panel-link">Cabin Project</a></li>
          <div className="mini-break"></div>
          <li><a href="#This Website" className="side-panel-link">This Website</a></li>
          <div className="mini-break"></div>
          <li><a href="#Map Generator" className="side-panel-link">Map Generator</a></li>
        </ul>
      </div>

      <div className="main-content">
        <h1 className="page-title">Introduction</h1>
        <p>
          Hi, I&aposm Calvin Richards. I&aposm a second year Computer Science major at
          Cal Poly Slo. I enjoy coding and robotics. Here are some projects I
          have worked on.
        </p>
        <div className="big-break"></div>
        <div className="section-box">
          <h1 className="page-title">Autonomous Path Planning for Swerve</h1>
          <h2 id="Swerve Drivetrain">Swerve Drive</h2>
          <div className="project-pictures">
            <img src="images/swerve-prototype.jpg" className="project-image" />
            <img src="images/swerve-final.png" className="project-image" />
            <img src="images/IMG_4848.gif" className="project-image" />
          </div>
          <p>
            I implemented the WPIlib API to enable our robot to be controlled
            both remotely and autonomously.
          </p>
          <div className="small-break"></div>
          <h2 id="choreo">Choreo Path Planning</h2>
          <div className="project-pictures">
            <img src="images/choreo.gif" className="project-image" />
          </div>
          <p>
            I implemented a program called Choreo that allowed our robot
            precisely follow predetermined paths.
          </p>
        </div>
        <div className="small-break"></div>
        <div className="section-box">
          <h1 className="project-title">Cad Projects</h1>
          <div className="project-pictures">
            <h2 id="3 Drive Adapter">3 Drive Adapter</h2>
            <img
              src="images/3-drive-adapter.png"
              className="project-image"
              // style="height: 40vh"
            />
            <img
              src="images/3-drive-adapter-final.jpg"
              className="project-image"
              // style="height: 40vh"
            />
            <p>
              I designed this adapter in Onshape so 3 2.5 in SSDs to fit into
              the space of a single 3.5 in HDD.
            </p>
          </div>
          <div className="project-pictures">
            <h2 id="VEX U 2024 Robot CAD Practice">
              VEX U 2024 Robot CAD Practice
            </h2>
            <img
              src="images/robot.png"
              className="project-image"
              // style="height: 40vh"
            />
            <p >
              Over 2025 summer I, with minimal 1:1 help, I designed a robot in
              SolidWorks for the VEX U 2024 game <em>High Steaks</em>.
            </p>
          </div>
          <div className="project-pictures">
            <h2 id="Cabin Project">Cabin Project</h2>
            <img
              src="images/cabin-autocad.png"
              className="project-image"
              // style="height: 40vh"
            />
            <p>I designed a ~1000 square foot cabin.</p>
          </div>
        </div>
        <div className="small-break"></div>

        <div className="section-box">
          <h1 className="project-title" id="This Website">This Website</h1>
          <div className="project-pictures">
            <img
              src="images/this-project.png"
              className="project-image"
              // style="height: 40vh"
            />

            <p>
              I followed the Hack4Impact bootcap to create this website as a
              portfolio for all my personal projects.
            </p>
          </div>
        </div>

        <div className="small-break"></div>
        <div className="section-box">
          <h1 className="project-title" id="Map Generator">Map Generator</h1>
          <div className="project-pictures">
            <img
              src="images/map.png"
              className="project-image"
              // style="height: 40vh"
            />
            <img
              src="images/small-map.png"
              className="project-image"
              // style="height: 40vh; image-rendering: pixelated"
            />
            <p>
              I developed my own algorithm to generate a 2d terrain map in a
              variety of sizes and scales.
            </p>
          </div>
        </div>
      </div>
    </main>
    <div className="small-break"></div>
  </body>
</html>
