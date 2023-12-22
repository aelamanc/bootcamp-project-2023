import React from 'react';
import style from "./navbar.module.css";
import Link from 'next/link';

export default function Resume() {
    return (
    <>
        <main className = "main">
        <h1 className="page-title">Resume</h1>
        <Link href="resume.pdf" download>Download Resume</Link>
        <div className = "about animate">
        <div className="resume">
            <section>
            <h2 className="section-title">Education</h2>
            <div className="entry">
                <h3 className="entry-title">California Polytechnic State University, San Luis Obispo</h3>
                <p className="entry-info">Bachelor of Science in Computer Science | 2025</p>
            </div>
            </section>
            <section>
            <h2 className="section-title">Experience</h2>
            <div className="entry">
                <h3 className="entry-title">Software Developer</h3>
                <p className="entry-info">Hack4Impact| September 2023 - Present</p>
                <p className="entry-description">Participate in Bootcamp. Build full stack applications for non-profits</p>
            </div>
            </section>
            <section>
            <h2 className="section-title">Skills</h2>
            <ul className="skill-list">
                <li>Software Engineering</li>
                <li>Data Science</li>
                <li>Leadership</li>
            </ul>
            </section>
            <section>
            <h2 className="section-title">Projects</h2>
            <div className="entry">
                <h3 className="entry-title">Portfolio</h3>
                <p className="entry-info">Personal Website</p>
                <p className="entry-description">Built Personal Website</p>
            </div>
            </section>
            <section>
            <h2 className="section-title">Coursework</h2>
            <ul className="course-list">
                <li>Data Structures and Algorithms</li>
                <li>Object-oriented programming</li>
                <li>Systems Programming</li>
            </ul>
            </section>
        </div>
        </div>
        </main>
    </>
    )
  }
  