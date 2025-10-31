import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <header>
      <nav className={style.navbar}>
        <Link href="/" className={style.navlink}>
          Home
        </Link>
        <Link href="/about" className={style.navlink}>
          About Me
        </Link>
        <Link href="/" className={style.navlink}>
          Portfolio
        </Link>
        <Link href="/blog" className={style.navlink}>
          Blog
        </Link>
        <Link href="/contact" className={style.navlink}>
          Contact
        </Link>
        <Link href="/resume" className={style.navlink}>
          Resume
        </Link>
      </nav>
    </header>
  );
}
