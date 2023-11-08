import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1 className={style.logo}>
        <a href="/">Akhil Elamanchili</a>
      </h1>
      <ul className={style["nav-list"]}>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/contact">Contact</a></li> 
      </ul>
    </header>
  );
}
